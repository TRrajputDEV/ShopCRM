// src/components/customers/CustomerTabs.tsx
import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';
import AddCustomerForm from './AddCustomerForm';
import CustomerNotes from './CustomerNotes';
import ShopCalculators from '@/components/customers/ShopCalculators'; // Adjusted path to match the correct location
import { Customer, NewCustomer } from '../../types/customer';
import { ChangeEvent } from 'react';

interface CustomerTabsProps {
    activeTab: string;
    setActiveTab: (value: string) => void;
    customers: Customer[];
    loading: boolean;
    searchTerm: string;
    selectedCustomer: Customer | null;
    editedCustomer: Partial<Customer>;
    newCustomer: NewCustomer;
    notes: string;
    onNotesChange: (value: string) => void;
    onSelectCustomer: (customer: Customer) => void;
    onDeleteCustomer: (id: number) => void;
    onEditChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onNewCustomerChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onCancel: () => void;
    onSave: () => Promise<void>;
    onAdd: () => Promise<void>;
}

const CustomerTabs: React.FC<CustomerTabsProps> = ({
    activeTab,
    setActiveTab,
    customers,
    loading,
    searchTerm,
    selectedCustomer,
    editedCustomer,
    newCustomer,
    notes,
    onNotesChange,
    onSelectCustomer,
    onDeleteCustomer,
    onEditChange,
    onNewCustomerChange,
    onCancel,
    onSave,
    onAdd
}) => {
    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
                <TabsTrigger value="list">Customer List</TabsTrigger>
                <TabsTrigger value="details">Customer Details</TabsTrigger>
                <TabsTrigger value="add">Add Customer</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="calculators">Shop Calculators</TabsTrigger>
            </TabsList>

            {/* Customer List Tab */}
            <TabsContent value="list">
                <Card>
                    <CardHeader>
                        <CardTitle>Customers</CardTitle>
                        <CardDescription>
                            Manage your customer information and balances.
                        </CardDescription>
                    </CardHeader>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                        <CardContent>
                            <CustomerList
                                customers={customers}
                                loading={loading}
                                searchTerm={searchTerm}
                                onSelectCustomer={onSelectCustomer}
                                onDeleteCustomer={onDeleteCustomer}
                            />
                        </CardContent>
                    </div>
                </Card>
            </TabsContent>

            {/* Customer Details Tab */}
            <TabsContent value="details">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Customer</CardTitle>
                        <CardDescription>Update customer information</CardDescription>
                    </CardHeader>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                        <CardContent>
                            <CustomerDetails
                                selectedCustomer={selectedCustomer}
                                editedCustomer={editedCustomer}
                                onEditChange={onEditChange}
                                onCancel={onCancel}
                                onSave={onSave}
                            />
                        </CardContent>
                    </div>
                </Card>
            </TabsContent>

            {/* Add Customer Tab */}
            <TabsContent value="add">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Customer</CardTitle>
                        <CardDescription>Enter customer information</CardDescription>
                    </CardHeader>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                        <CardContent>
                            <AddCustomerForm
                                newCustomer={newCustomer}
                                onChange={onNewCustomerChange}
                                onCancel={onCancel}
                                onAdd={onAdd}
                            />
                        </CardContent>
                    </div>
                </Card>
            </TabsContent>

            {/* Notes Tab - New Feature */}
            <TabsContent value="notes">
                <Card>
                    <CardHeader>
                        <CardTitle>Shop Notes</CardTitle>
                        <CardDescription>Keep track of important information and reminders</CardDescription>
                    </CardHeader>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                        <CardContent>
                            <CustomerNotes 
                                notes={notes}
                                onNotesChange={onNotesChange}
                            />
                        </CardContent>
                    </div>
                </Card>
            </TabsContent>

            {/* Calculators Tab - New Feature */}
            <TabsContent value="calculators">
                <Card>
                    <CardHeader>
                        <CardTitle>Shop Calculators</CardTitle>
                        <CardDescription>Useful calculators for your business</CardDescription>
                    </CardHeader>
                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                        <CardContent>
                            <ShopCalculators />
                        </CardContent>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default CustomerTabs;

// // src/components/customers/CustomerTabs.tsx
// import React from 'react';
// import CustomerList from './CustomerList';
// import CustomerDetails from './CustomerDetails';
// import AddCustomerForm from './AddCustomerForm';
// import NotesTab from './CustomerNotes';
// import { Customer, NewCustomer } from '../../types/customer';
// import { FaList, FaUser, FaPlus, FaClipboard } from 'react-icons/fa';

// interface CustomerTabsProps {
//     activeTab: string;
//     setActiveTab: (tab: string) => void;
//     customers: Customer[];
//     loading: boolean;
//     searchTerm: string;
//     selectedCustomer: Customer | null;
//     editedCustomer: Partial<Customer>;
//     newCustomer: NewCustomer;
//     notes: string;
//     onNotesChange: (value: string) => void;
//     onSelectCustomer: (customer: Customer) => void;
//     onDeleteCustomer: (id: number) => void;
//     onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onNewCustomerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onCancel: () => void;
//     onSave: () => void;
//     onAdd: () => void;
//     isMobile?: boolean;
// }

// const CustomerTabs: React.FC<CustomerTabsProps> = ({
//     activeTab,
//     setActiveTab,
//     customers,
//     loading,
//     searchTerm,
//     selectedCustomer,
//     editedCustomer,
//     newCustomer,
//     notes,
//     onNotesChange,
//     onSelectCustomer,
//     onDeleteCustomer,
//     onEditChange,
//     onNewCustomerChange,
//     onCancel,
//     onSave,
//     onAdd,
//     isMobile = false
// }) => {
//     // Filter customers based on search term
//     const filteredCustomers = customers.filter(customer => 
//         customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         customer.phone.includes(searchTerm)
//     );

//     const renderTabContent = () => {
//         switch (activeTab) {
//             case 'list':
//                 return (
//                     <CustomerList
//                         customers={filteredCustomers}
//                         loading={loading}
//                         onSelectCustomer={onSelectCustomer}
//                         onDeleteCustomer={onDeleteCustomer}
//                         isMobile={isMobile}
//                     />
//                 );
//             case 'details':
//                 return (
//                     <CustomerDetails
//                         customer={selectedCustomer}
//                         editedCustomer={editedCustomer}
//                         onEditChange={onEditChange}
//                         onCancel={onCancel}
//                         onSave={onSave}
//                         isMobile={isMobile}
//                     />
//                 );
//             case 'add':
//                 return (
//                     <AddCustomerForm
//                         newCustomer={newCustomer}
//                         onChange={onNewCustomerChange}
//                         onCancel={onCancel}
//                         onAdd={onAdd}
//                         isMobile={isMobile}
//                     />
//                 );
//             case 'notes':
//                 return (
//                     <NotesTab
//                         notes={notes}
//                         onChange={onNotesChange}
//                         isMobile={isMobile}
//                     />
//                 );
//             default:
//                 return null;
//         }
//     };

//     const tabClass = (tab: string) =>
//         `flex items-center px-4 py-3 font-medium border-b-2 cursor-pointer ${
//             activeTab === tab
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent hover:border-gray-300'
//         }`;

//     return (
//         <div className="h-full flex flex-col">
//             {/* Tab navigation */}
//             <div className={`border-b ${isMobile ? 'overflow-x-auto' : ''}`}>
//                 <div className={`flex ${isMobile ? 'w-max' : ''}`}>
//                     <div
//                         className={tabClass('list')}
//                         onClick={() => setActiveTab('list')}
//                     >
//                         <FaList className="mr-2" />
//                         {!isMobile && 'Customer List'}
//                     </div>
//                     {selectedCustomer && (
//                         <div
//                             className={tabClass('details')}
//                             onClick={() => setActiveTab('details')}
//                         >
//                             <FaUser className="mr-2" />
//                             {!isMobile && `${selectedCustomer.name}`}
//                             {isMobile && 'Details'}
//                         </div>
//                     )}
//                     <div
//                         className={tabClass('add')}
//                         onClick={() => setActiveTab('add')}
//                     >
//                         <FaPlus className="mr-2" />
//                         {!isMobile && 'Add Customer'}
//                     </div>
//                     <div
//                         className={tabClass('notes')}
//                         onClick={() => setActiveTab('notes')}
//                     >
//                         <FaClipboard className="mr-2" />
//                         {!isMobile && 'Notes'}
//                     </div>
//                 </div>
//             </div>

//             {/* Tab content */}
//             <div className="flex-1 overflow-auto p-4">
//                 {renderTabContent()}
//             </div>
//         </div>
//     );
// };

// export default CustomerTabs;