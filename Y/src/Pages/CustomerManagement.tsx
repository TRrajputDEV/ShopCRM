// src/pages/CustomerManagement.tsx
import React, { useState, ChangeEvent, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import CustomerTabs from '../components/customers/CustomerTabs';
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
    const [notes, setNotes] = useState<string>('');

    // Load notes from localStorage on component mount
    useEffect(() => {
        const savedNotes = localStorage.getItem('shopNotes');
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

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

    const handleNotesChange = (value: string) => {
        setNotes(value);
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

            <CustomerTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                customers={customers}
                loading={loading}
                searchTerm={searchTerm}
                selectedCustomer={selectedCustomer}
                editedCustomer={editedCustomer}
                newCustomer={newCustomer}
                notes={notes}
                onNotesChange={handleNotesChange}
                onSelectCustomer={handleSelectCustomer}
                onDeleteCustomer={handleDeleteCustomer}
                onEditChange={handleEditChange}
                onNewCustomerChange={handleNewCustomerChange}
                onCancel={handleCancel}
                onSave={handleUpdateCustomer}
                onAdd={handleAddCustomer}
            />
        </MainLayout>
    );
};

export default CustomerManagement;

// // src/pages/CustomerManagement.tsx
// import React, { useState, ChangeEvent, useEffect } from 'react';
// import MainLayout from '../components/layout/MainLayout';
// import CustomerTabs from '../components/customers/CustomerTabs';
// import ErrorAlert from '../components/common/ErrorAlert';
// import { useCustomerAPI } from '../hooks/useCustomerAPI';
// import { Customer, NewCustomer } from '../types/customer';

// const CustomerManagement: React.FC = () => {
//     // API state and functions
//     const {
//         customers,
//         loading,
//         error,
//         addCustomer,
//         updateCustomer,
//         deleteCustomer
//     } = useCustomerAPI();

//     // Local state
//     const [searchTerm, setSearchTerm] = useState('');
//     const [activeTab, setActiveTab] = useState('list');
//     const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
//     const [newCustomer, setNewCustomer] = useState<NewCustomer>({
//         name: '',
//         email: '',
//         phone: '',
//         balance: 0,
//     });
//     const [editedCustomer, setEditedCustomer] = useState<Partial<Customer>>({
//         name: '',
//         email: '',
//         phone: '',
//         balance: 0,
//     });
//     const [notes, setNotes] = useState<string>('');
//     const [isMobile, setIsMobile] = useState<boolean>(false);

//     // Check if the screen is mobile on mount and when the window is resized
//     useEffect(() => {
//         const checkIsMobile = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         // Initial check
//         checkIsMobile();

//         // Set up resize listener
//         window.addEventListener('resize', checkIsMobile);

//         // Clean up
//         return () => {
//             window.removeEventListener('resize', checkIsMobile);
//         };
//     }, []);

//     // Load notes from localStorage on component mount
//     useEffect(() => {
//         const savedNotes = localStorage.getItem('shopNotes');
//         if (savedNotes) {
//             setNotes(savedNotes);
//         }
//     }, []);

//     // Handlers
//     const handleSelectCustomer = (customer: Customer) => {
//         setSelectedCustomer(customer);
//         setEditedCustomer({ ...customer });
//         setActiveTab('details');
//     };

//     const handleNewCustomerChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setNewCustomer(prev => ({
//             ...prev,
//             [name]: name === 'balance' ? parseFloat(value) || 0 : value,
//         }));
//     };

//     const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setEditedCustomer(prev => ({
//             ...prev,
//             [name]: name === 'balance' ? parseFloat(value) || 0 : value,
//         }));
//     };

//     const handleNotesChange = (value: string) => {
//         setNotes(value);
//         // Save notes to localStorage
//         localStorage.setItem('shopNotes', value);
//     };

//     const showAddCustomerForm = () => {
//         setSelectedCustomer(null);
//         setActiveTab('add');
//     };

//     const handleAddCustomer = async () => {
//         const success = await addCustomer(newCustomer);
//         if (success) {
//             setNewCustomer({ name: '', email: '', phone: '', balance: 0 });
//             setActiveTab('list');
//         }
//     };

//     const handleUpdateCustomer = async () => {
//         const success = await updateCustomer(editedCustomer);
//         if (success) {
//             setActiveTab('list');
//             setSelectedCustomer(null);
//         }
//     };

//     const handleDeleteCustomer = async (id: number) => {
//         if (window.confirm('Are you sure you want to delete this customer?')) {
//             const success = await deleteCustomer(id);
//             if (success && selectedCustomer && selectedCustomer.id === id) {
//                 setSelectedCustomer(null);
//                 setActiveTab('list');
//             }
//         }
//     };

//     const handleCancel = () => {
//         setActiveTab('list');
//         if (activeTab === 'details') {
//             setSelectedCustomer(null);
//         }
//     };

//     return (
//         <MainLayout
//             searchTerm={searchTerm}
//             onSearchChange={setSearchTerm}
//             onAddCustomer={showAddCustomerForm}
//             isMobile={isMobile}
//         >
//             <ErrorAlert message={error} />

//             <CustomerTabs
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//                 customers={customers}
//                 loading={loading}
//                 searchTerm={searchTerm}
//                 selectedCustomer={selectedCustomer}
//                 editedCustomer={editedCustomer}
//                 newCustomer={newCustomer}
//                 notes={notes}
//                 onNotesChange={handleNotesChange}
//                 onSelectCustomer={handleSelectCustomer}
//                 onDeleteCustomer={handleDeleteCustomer}
//                 onEditChange={handleEditChange}
//                 onNewCustomerChange={handleNewCustomerChange}
//                 onCancel={handleCancel}
//                 onSave={handleUpdateCustomer}
//                 onAdd={handleAddCustomer}
//                 isMobile={isMobile}
//             />
//         </MainLayout>
//     );
// };

// export default CustomerManagement;