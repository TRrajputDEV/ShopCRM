import React, { ChangeEvent } from 'react';
import { X, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewCustomer } from '@/types/customer';

interface AddCustomerFormProps {
  newCustomer: NewCustomer;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onAdd: () => void;
}

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({
  newCustomer,
  onChange,
  onCancel,
  onAdd
}) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Name</label>
            <Input 
              name="name" 
              value={newCustomer.name} 
              onChange={onChange}
              placeholder="Customer name"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <Input 
              name="email" 
              value={newCustomer.email} 
              onChange={onChange}
              placeholder="customer@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Phone</label>
            <Input 
              name="phone" 
              value={newCustomer.phone} 
              onChange={onChange}
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Initial Balance</label>
            <Input 
              name="balance" 
              type="number" 
              value={newCustomer.balance.toString()} 
              onChange={onChange}
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onCancel}>
          <X size={16} className="mr-2" />
          Cancel
        </Button>
        <Button onClick={onAdd}>
          <UserPlus size={16} className="mr-2" />
          Add Customer
        </Button>
      </div>
    </div>
  );
};

export default AddCustomerForm;