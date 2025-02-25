import { useState, useEffect, ChangeEvent } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, UserPlus, Edit, Trash2, Database, CreditCard, Save, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import axios from 'axios';

// Declare your interface at the top
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
}

const ShopManagementSystem = () => {
  // State
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('list');
  const [newCustomer, setNewCustomer] = useState<Omit<Customer, 'id'>>({
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
  const [error, setError] = useState('');

  // API base URL
  const API_URL = 'http://localhost/shop_api.php';

  // Fetch customers on load
  useEffect(() => {
    fetchCustomers();
  }, []);

  // API Functions
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?action=get_customers`);
      setCustomers(response.data.records || []);
      setError('');
    } catch (err) {
      console.error('Error fetching customers:', err);
      setError('Failed to load customers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCustomer = async () => {
    try {
      await axios.post(`${API_URL}?action=create_customer`, newCustomer);
      setNewCustomer({ name: '', email: '', phone: '', balance: 0 });
      fetchCustomers();
      setActiveTab('list');
      setError('');
    } catch (err) {
      console.error('Error adding customer:', err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Failed to add customer');
      } else {
        setError('Failed to add customer');
      }
    }
  };

  const handleUpdateCustomer = async () => {
    try {
      await axios.post(`${API_URL}?action=update_customer`, editedCustomer);
      fetchCustomers();
      setActiveTab('list');
      setSelectedCustomer(null);
      setError('');
    } catch (err) {
      console.error('Error updating customer:', err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Failed to update customer');
      } else {
        setError('Failed to update customer');
      }
    }
  };

  const handleDeleteCustomer = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await axios.post(`${API_URL}?action=delete_customer`, { id });
        fetchCustomers();
        if (selectedCustomer && selectedCustomer.id === id) {
          setSelectedCustomer(null);
        }
        setError('');
      } catch (err) {
        console.error('Error deleting customer:', err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Failed to delete customer');
        } else {
          setError('Failed to delete customer');
        }
      }
    }
  };

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  // Handle customer selection
  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setEditedCustomer({ ...customer });
    setActiveTab('details');
  };

  // Handle new customer form input changes
  const handleNewCustomerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer(prev => ({
      ...prev,
      [name]: name === 'balance' ? parseFloat(value) || 0 : value,
    }));
  };

  // Handle edit form input changes
  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCustomer(prev => ({
      ...prev,
      [name]: name === 'balance' ? parseFloat(value) || 0 : value,
    }));
  };

  // Get customer initials for avatar
  const getInitials = (name: string) => {
    return name ? name.split(' ').map(word => word[0]).join('').toUpperCase() : 'N/A';
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Show add customer form
  const showAddCustomerForm = () => {
    setSelectedCustomer(null);
    setActiveTab('add');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">Shop Manager</h1>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md">
              <Database size={18} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
              <UserPlus size={18} />
              <span>About us </span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
              <CreditCard size={18} />
              <span>Transactions</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Customer Management</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  className="pl-10 w-64"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={showAddCustomerForm}>
                <Plus size={16} className="mr-2" />
                Add Customer
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

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
                  {loading ? (
                    <div className="text-center py-8">Loading customers...</div>
                  ) : filteredCustomers.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No customers match your search' : 'No customers found. Add your first customer!'}
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Balance</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCustomers.map((customer) => (
                          <TableRow key={customer.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <Avatar>
                                  <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{customer.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                            <TableCell>
                              <Badge variant={customer.balance > 0 ? "default" : "outline"}>
                                {formatCurrency(customer.balance)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleSelectCustomer(customer)}
                                >
                                  <Edit size={16} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleDeleteCustomer(customer.id)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
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
                  {selectedCustomer ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Name</label>
                          <Input 
                            name="name" 
                            value={editedCustomer.name || ''} 
                            onChange={handleEditChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Email</label>
                          <Input 
                            name="email" 
                            value={editedCustomer.email || ''} 
                            onChange={handleEditChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Phone</label>
                          <Input 
                            name="phone" 
                            value={editedCustomer.phone || ''} 
                            onChange={handleEditChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Balance</label>
                          <Input 
                            name="balance" 
                            type="number" 
                            value={editedCustomer.balance?.toString() || '0'} 
                            onChange={handleEditChange}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      Select a customer to edit details
                    </div>
                  )}
                </CardContent>
                {selectedCustomer && (
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => {
                      setSelectedCustomer(null);
                      setActiveTab('list');
                    }}>
                      <X size={16} className="mr-2" />
                      Cancel
                    </Button>
                    <Button onClick={handleUpdateCustomer}>
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="add">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Customer</CardTitle>
                  <CardDescription>Enter customer information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Name</label>
                        <Input 
                          name="name" 
                          value={newCustomer.name} 
                          onChange={handleNewCustomerChange}
                          placeholder="Customer name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <Input 
                          name="email" 
                          value={newCustomer.email} 
                          onChange={handleNewCustomerChange}
                          placeholder="customer@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Phone</label>
                        <Input 
                          name="phone" 
                          value={newCustomer.phone} 
                          onChange={handleNewCustomerChange}
                          placeholder="Phone number"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Initial Balance</label>
                        <Input 
                          name="balance" 
                          type="number" 
                          value={newCustomer.balance.toString()} 
                          onChange={handleNewCustomerChange}
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab('list')}>
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleAddCustomer}>
                    <UserPlus size={16} className="mr-2" />
                    Add Customer
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ShopManagementSystem;
