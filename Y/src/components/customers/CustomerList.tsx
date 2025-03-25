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