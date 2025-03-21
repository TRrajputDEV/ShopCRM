// src/components/customers/CustomerActions.tsx
import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Customer } from '../../types/customer';

interface CustomerActionsProps {
    customer: Customer;
    onEdit: (customer: Customer) => void;
    onDelete: (id: number) => void;
}

const CustomerActions: React.FC<CustomerActionsProps> = ({ customer, onEdit, onDelete }) => {
    return (
        <div className="flex space-x-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(customer)}
            >
                <Edit size={16} />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(customer.id)}
            >
                <Trash2 size={16} />
            </Button>
        </div>
    );
};

export default CustomerActions;