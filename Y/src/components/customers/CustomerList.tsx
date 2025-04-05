// src/components/customers/CustomerList.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Customer } from '../../types/customer';
import { formatCurrency } from '../../utils/formatters';
import CustomerAvatar from './CustomerAvatar';
import CustomerActions from './CustomerActions';
import LoadingState from '../common/LoadingState';

interface CustomerListProps {
    customers: Customer[];
    loading: boolean;
    searchTerm: string;
    onSelectCustomer: (customer: Customer) => void;
    onDeleteCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
    customers,
    loading,
    searchTerm,
    onSelectCustomer,
    onDeleteCustomer
}) => {
    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    if (loading) {
        return <LoadingState message="Loading customers..." />;
    }

    if (filteredCustomers.length === 0) {
        return (
            <div className="text-center py-8 text-orange-600">
                {searchTerm ? 'No customers match your search' : 'No customers found. Add your first customer!'}
            </div>
        );
    }

    return (
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
                                <CustomerAvatar name={customer.name} />
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
                            <CustomerActions
                                customer={customer}
                                onEdit={onSelectCustomer}
                                onDelete={onDeleteCustomer}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomerList;
// src/components/customers/CustomerList.tsx
// import React from 'react';
// import { Customer } from '../../types/customer';
// import { FaTrash, FaEdit } from 'react-icons/fa';

// interface CustomerListProps {
//     customers: Customer[];
//     loading: boolean;
//     onSelectCustomer: (customer: Customer) => void;
//     onDeleteCustomer: (id: number) => void;
//     isMobile?: boolean;
// }

// const CustomerList: React.FC<CustomerListProps> = ({
//     customers,
//     loading,
//     onSelectCustomer,
//     onDeleteCustomer,
//     isMobile = false
// }) => {
//     if (loading) {
//         return <div className="flex justify-center py-8">Loading customers...</div>;
//     }

//     if (customers.length === 0) {
//         return (
//             <div className="bg-white rounded-lg shadow p-6 text-center">
//                 <p className="text-gray-500">No customers found.</p>
//             </div>
//         );
//     }

//     // Format balance safely
//     const formatBalance = (balance: any): string => {
//         // Ensure balance is treated as a number
//         const numBalance = typeof balance === 'number' ? balance : Number(balance);
//         return isNaN(numBalance) ? '0.00' : numBalance.toFixed(2);
//     };

//     // Mobile view - Card layout
//     if (isMobile) {
//         return (
//             <div className="space-y-4">
//                 {customers.map(customer => (
//                     <div
//                         key={customer.id}
//                         className="bg-white rounded-lg shadow p-4"
//                     >
//                         <div className="flex items-center justify-between mb-2">
//                             <h3 className="font-bold text-lg">{customer.name}</h3>
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={() => onSelectCustomer(customer)}
//                                     className="p-2 text-blue-500 hover:text-blue-700"
//                                 >
//                                     <FaEdit />
//                                 </button>
//                                 <button
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         onDeleteCustomer(customer.id);
//                                     }}
//                                     className="p-2 text-red-500 hover:text-red-700"
//                                 >
//                                     <FaTrash />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="text-sm text-gray-600 mb-1">{customer.email}</div>
//                         <div className="text-sm text-gray-600 mb-2">{customer.phone}</div>
//                         <div className="font-semibold">
//                             Balance: ${formatBalance(customer.balance)}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     // Desktop view - Table layout
//     return (
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                     <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Name
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Email
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Phone
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Balance
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Actions
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                     {customers.map(customer => (
//                         <tr 
//                             key={customer.id}
//                             onClick={() => onSelectCustomer(customer)}
//                             className="hover:bg-gray-50 cursor-pointer"
//                         >
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="font-medium text-gray-900">{customer.name}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-gray-500">{customer.email}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-gray-500">{customer.phone}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-gray-900">${formatBalance(customer.balance)}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-right">
//                                 <button
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         onDeleteCustomer(customer.id);
//                                     }}
//                                     className="text-red-500 hover:text-red-700"
//                                 >
//                                     <FaTrash />
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CustomerList;