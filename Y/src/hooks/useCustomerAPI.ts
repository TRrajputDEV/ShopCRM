// src/hooks/useCustomerAPI.ts
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Customer, NewCustomer } from "@/types/customer";

// API base URL - Ensure this matches your PHP script location
const API_URL = "http://localhost/shop-api.php";

// Enhanced error handling interface
interface APIError {
    status: string;
    message: string;
    details?: string;
}

export const useCustomerAPI = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Centralized error handling function
    const handleError = (err: unknown) => {
        if (axios.isAxiosError(err)) {
            const axiosError = err as AxiosError<APIError>;
            const errorMessage = axiosError.response?.data?.message 
                || axiosError.message 
                || "An unexpected error occurred";
            
            console.error("API Error Details:", {
                status: axiosError.response?.status,
                message: errorMessage,
                fullError: axiosError
            });

            setError(errorMessage);
        } else if (err instanceof Error) {
            console.error("Network or Runtime Error:", err);
            setError(err.message);
        } else {
            console.error("Unknown Error:", err);
            setError("An unexpected error occurred");
        }
    };

    const fetchCustomers = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(`${API_URL}?action=get_customers`);
            
            // Extensive logging for debugging
            console.log('Full API Response:', response.data);
            
            // Robust data extraction with multiple fallback strategies
            const customerRecords = 
                response.data.records || 
                response.data || 
                [];
            
            // Validate customer data structure
            const validCustomers = customerRecords.filter((customer: any) => 
                customer.id && 
                customer.name && 
                customer.email
            );

            setCustomers(validCustomers);
        } catch (err) {
            handleError(err);
            setCustomers([]); // Ensure customers is reset on error
        } finally {
            setLoading(false);
        }
    };

    const addCustomer = async (newCustomer: NewCustomer): Promise<boolean> => {
        try {
            const response = await axios.post(`${API_URL}?action=create_customer`, newCustomer);
            
            // Log successful creation
            console.log('Customer Creation Response:', response.data);
            
            await fetchCustomers(); // Refresh customer list
            return true;
        } catch (err) {
            handleError(err);
            return false;
        }
    };

    const updateCustomer = async (
        editedCustomer: Partial<Customer>
    ): Promise<boolean> => {
        try {
            const response = await axios.post(`${API_URL}?action=update_customer`, editedCustomer);
            
            // Log successful update
            console.log('Customer Update Response:', response.data);
            
            await fetchCustomers(); // Refresh customer list
            return true;
        } catch (err) {
            handleError(err);
            return false;
        }
    };

    const deleteCustomer = async (id: number): Promise<boolean> => {
        try {
            const response = await axios.post(`${API_URL}?action=delete_customer`, { id });
            
            // Log successful deletion
            console.log('Customer Deletion Response:', response.data);
            
            await fetchCustomers(); // Refresh customer list
            return true;
        } catch (err) {
            handleError(err);
            return false;
        }
    };

    // Initialize data on mount with retry mechanism
    useEffect(() => {
        const initializeData = async () => {
            await fetchCustomers();
        };

        initializeData();

        // Optional: Add retry mechanism
        const retryTimer = setTimeout(() => {
            if (loading) {
                console.warn('Initial data fetch timed out. Retrying...');
                initializeData();
            }
        }, 10000); // 10-second timeout

        return () => clearTimeout(retryTimer);
    }, []);

    return {
        customers,
        loading,
        error,
        fetchCustomers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        setError, // Expose for manual error management
    };
};