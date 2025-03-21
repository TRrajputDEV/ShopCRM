// src/components/customers/CustomerDetails.tsx
import React, { ChangeEvent } from 'react';
import { X, Save } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Customer } from '../../types/customer';

interface CustomerDetailsProps {
    selectedCustomer: Customer | null;
    editedCustomer: Partial<Customer>;
    onEditChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onCancel: () => void;
    onSave: () => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
    selectedCustomer,
    editedCustomer,
    onEditChange,
    onCancel,
    onSave
}) => {
    if (!selectedCustomer) {
        return (
            <div className="text-center py-8 text-gray-500">
                Select a customer to edit details
            </div>
        );
    }

    return (
        <div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-1 block">Name</label>
                        <Input
                            name="name"
                            value={editedCustomer.name || ''}
                            onChange={onEditChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <Input
                            name="email"
                            value={editedCustomer.email || ''}
                            onChange={onEditChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Phone</label>
                        <Input
                            name="phone"
                            value={editedCustomer.phone || ''}
                            onChange={onEditChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Balance</label>
                        <Input
                            name="balance"
                            type="number"
                            value={editedCustomer.balance?.toString() || '0'}
                            onChange={onEditChange}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={onCancel}>
                    <X size={16} className="mr-2" />
                    Cancel
                </Button>
                <Button onClick={onSave}>
                    <Save size={16} className="mr-2" />
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default CustomerDetails;