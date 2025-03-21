// src/pages/CustomerManagement.tsx
import React, { useState, ChangeEvent } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import MainLayout from '../components/layout/MainLayout';
import CustomerList from '../components/customers/CustomerList';
import CustomerDetails from '../components/customers/CustomerDetails';
import AddCustomerForm from '../components/customers/AddCustomerForm';
import ErrorAlert from '../components/common/ErrorAlert';
import { useCustomerAPI } from '../hooks/useCustomerAPI';
import { Customer, NewCustomer } from '../types/customer';

const CustomerManagement: React.FC = () => {
    // API state and functions
    const {
        customers,
        loading,
        error,
        addCustomer,
        updateCustomer,
        deleteCustomer
    } = useCustomerAPI();

    // Local state
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('list');
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [newCustomer, setNewCustomer] = useState<NewCustomer>({
        name: '',
        email: '',
        phone: '',
        balance: 0,
    });
    const [editedCustomer, setEditedCustomer] = useState<Partial<Customer>>({
        name: '',
        email: '',
        phone: '',
        balance: 0,
    });

    // Handlers
    const handleSelectCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setEditedCustomer({ ...customer });
        setActiveTab('details');
    };

    const handleNewCustomerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCustomer(prev => ({
            ...prev,
            [name]: name === 'balance' ? parseFloat(value) || 0 : value,
        }));
    };

    const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedCustomer(prev => ({
            ...prev,
            [name]: name === 'balance' ? parseFloat(value) || 0 : value,
        }));
    };

    const showAddCustomerForm = () => {
        setSelectedCustomer(null);
        setActiveTab('add');
    };

    const handleAddCustomer = async () => {
        const success = await addCustomer(newCustomer);
        if (success) {
            setNewCustomer({ name: '', email: '', phone: '', balance: 0 });
            setActiveTab('list');
        }
    };

    const handleUpdateCustomer = async () => {
        const success = await updateCustomer(editedCustomer);
        if (success) {
            setActiveTab('list');
            setSelectedCustomer(null);
        }
    };

    const handleDeleteCustomer = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            const success = await deleteCustomer(id);
            if (success && selectedCustomer && selectedCustomer.id === id) {
                setSelectedCustomer(null);
                setActiveTab('list');
            }
        }
    };

    const handleCancel = () => {
        setActiveTab('list');
        if (activeTab === 'details') {
            setSelectedCustomer(null);
        }
    };

    return (
        <MainLayout
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onAddCustomer={showAddCustomerForm}
        >
            <ErrorAlert message={error} />

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                    <TabsTrigger value="list">Customer List</TabsTrigger>
                    <TabsTrigger value="details">Customer Details</TabsTrigger>
                    <TabsTrigger value="add">Add Customer</TabsTrigger>
                </TabsList>

                <TabsContent value="list">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customers</CardTitle>
                            <CardDescription>Manage your customer information and balances.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CustomerList
                                customers={customers}
                                loading={loading}
                                searchTerm={searchTerm}
                                onSelectCustomer={handleSelectCustomer}
                                onDeleteCustomer={handleDeleteCustomer}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="details">
                    <Card>
                        <CardHeader>
                            <CardTitle>Edit Customer</CardTitle>
                            <CardDescription>Update customer information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CustomerDetails
                                selectedCustomer={selectedCustomer}
                                editedCustomer={editedCustomer}
                                onEditChange={handleEditChange}
                                onCancel={handleCancel}
                                onSave={handleUpdateCustomer}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="add">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Customer</CardTitle>
                            <CardDescription>Enter customer information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AddCustomerForm
                                newCustomer={newCustomer}
                                onChange={handleNewCustomerChange}
                                onCancel={handleCancel}
                                onAdd={handleAddCustomer}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </MainLayout>
    );
};

export default CustomerManagement;