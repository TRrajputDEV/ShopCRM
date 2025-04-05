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

// src/components/customers/AddCustomerForm.tsx
// import React from 'react';
// import { NewCustomer } from '../../types/customer';

// interface AddCustomerFormProps {
//     newCustomer: NewCustomer;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onCancel: () => void;
//     onAdd: () => void;
//     isMobile?: boolean;
// }

// const AddCustomerForm: React.FC<AddCustomerFormProps> = ({
//     newCustomer,
//     onChange,
//     onCancel,
//     onAdd,
//     isMobile = false
// }) => {
//     const formFieldClass = `mb-4 ${isMobile ? '' : 'grid grid-cols-3 gap-4 items-center'}`;
//     const labelClass = `${isMobile ? 'block mb-2 font-medium' : 'col-span-1 text-right font-medium'}`;
//     const inputContainerClass = `${isMobile ? '' : 'col-span-2'}`;
//     const inputClass = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

//     return (
//         <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-bold mb-6 border-b pb-2">Add New Customer</h2>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Name:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="text"
//                         name="name"
//                         value={newCustomer.name}
//                         onChange={onChange}
//                         className={inputClass}
//                         placeholder="Customer name"
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Email:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="email"
//                         name="email"
//                         value={newCustomer.email}
//                         onChange={onChange}
//                         className={inputClass}
//                         placeholder="customer@example.com"
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Phone:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={newCustomer.phone}
//                         onChange={onChange}
//                         className={inputClass}
//                         placeholder="(123) 456-7890"
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Balance:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="number"
//                         name="balance"
//                         value={newCustomer.balance}
//                         onChange={onChange}
//                         className={inputClass}
//                         step="0.01"
//                         placeholder="0.00"
//                     />
//                 </div>
//             </div>
            
//             <div className={`mt-6 ${isMobile ? 'flex flex-col space-y-2' : 'flex justify-end space-x-4'}`}>
//                 <button
//                     onClick={onCancel}
//                     className={`px-4 py-2 border border-gray-300 rounded-lg ${isMobile ? 'w-full' : ''}`}
//                 >
//                     Cancel
//                 </button>
//                 <button
//                     onClick={onAdd}
//                     className={`bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 ${isMobile ? 'w-full' : ''}`}
//                 >
//                     Add Customer
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AddCustomerForm;