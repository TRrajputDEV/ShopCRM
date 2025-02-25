// import axios from 'axios';

// // Base URL for API
// const API_URL = 'http://localhost/shop-api/api';

// // Get all customers
// export const getCustomers = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/customers/read.php`);
//         return response.data.records || [];
//     } catch (error) {
//         console.error('Error fetching customers:', error);
//         return [];
//     }
// };

// // Get one customer
// export const getCustomer = async (id) => {
//     try {
//         const response = await axios.get(`${API_URL}/customers/read_one.php?id=${id}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching customer with id ${id}:`, error);
//         return null;
//     }
// };

// // Create customer
// export const createCustomer = async (customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/customers/create.php`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating customer:', error);
//         throw error;
//     }
// };

// // Update customer
// export const updateCustomer = async (customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/customers/update.php`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating customer:', error);
//         throw error;
//     }
// };

// // Delete customer
// export const deleteCustomer = async (id) => {
//     try {
//         const response = await axios.post(`${API_URL}/customers/delete.php`, { id });
//         return response.data;
//     } catch (error) {
//         console.error(`Error deleting customer with id ${id}:`, error);
//         throw error;
//     }
// };