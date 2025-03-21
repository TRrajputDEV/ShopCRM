// src/hooks/useCustomerAPI.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Customer, NewCustomer } from "@/types/customer";

// API base URL
const API_URL = "http://localhost/shop_api.php";

export const useCustomerAPI = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}?action=get_customers`);
            setCustomers(response.data.records || []);
            setError("");
        } catch (err) {
            console.error("Error fetching customers:", err);
            setError("Failed to load customers. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const addCustomer = async (newCustomer: NewCustomer): Promise<boolean> => {
        try {
            await axios.post(`${API_URL}?action=create_customer`, newCustomer);
            await fetchCustomers();
            setError("");
            return true;
        } catch (err) {
            console.error("Error adding customer:", err);
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Failed to add customer");
            } else {
                setError("Failed to add customer");
            }
            return false;
        }
    };

    const updateCustomer = async (
        editedCustomer: Partial<Customer>
    ): Promise<boolean> => {
        try {
            await axios.post(`${API_URL}?action=update_customer`, editedCustomer);
            await fetchCustomers();
            setError("");
            return true;
        } catch (err) {
            console.error("Error updating customer:", err);
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Failed to update customer");
            } else {
                setError("Failed to update customer");
            }
            return false;
        }
    };

    const deleteCustomer = async (id: number): Promise<boolean> => {
        try {
            await axios.post(`${API_URL}?action=delete_customer`, { id });
            await fetchCustomers();
            setError("");
            return true;
        } catch (err) {
            console.error("Error deleting customer:", err);
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Failed to delete customer");
            } else {
                setError("Failed to delete customer");
            }
            return false;
        }
    };

    // Initialize data on mount
    useEffect(() => {
        fetchCustomers();
    }, []);

    return {
        customers,
        loading,
        error,
        fetchCustomers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        setError,
    };
};
