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
            <div className="text-center py-8 text-orange-600">
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

// src/components/customers/CustomerDetails.tsx
// import React from 'react';
// import { Customer } from '../../types/customer';

// interface CustomerDetailsProps {
//     customer: Customer | null;
//     editedCustomer: Partial<Customer>;
//     onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onCancel: () => void;
//     onSave: () => void;
//     isMobile?: boolean;
// }

// const CustomerDetails: React.FC<CustomerDetailsProps> = ({
//     customer,
//     editedCustomer,
//     onEditChange,
//     onCancel,
//     onSave,
//     isMobile = false
// }) => {
//     if (!customer) {
//         return <div>No customer selected</div>;
//     }

//     const formFieldClass = `mb-4 ${isMobile ? '' : 'grid grid-cols-3 gap-4 items-center'}`;
//     const labelClass = `${isMobile ? 'block mb-2 font-medium' : 'col-span-1 text-right font-medium'}`;
//     const inputContainerClass = `${isMobile ? '' : 'col-span-2'}`;
//     const inputClass = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

//     return (
//         <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-bold mb-6 border-b pb-2">Edit Customer</h2>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Name:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="text"
//                         name="name"
//                         value={editedCustomer.name || ''}
//                         onChange={onEditChange}
//                         className={inputClass}
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Email:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="email"
//                         name="email"
//                         value={editedCustomer.email || ''}
//                         onChange={onEditChange}
//                         className={inputClass}
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Phone:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={editedCustomer.phone || ''}
//                         onChange={onEditChange}
//                         className={inputClass}
//                     />
//                 </div>
//             </div>
            
//             <div className={formFieldClass}>
//                 <label className={labelClass}>Balance:</label>
//                 <div className={inputContainerClass}>
//                     <input
//                         type="number"
//                         name="balance"
//                         value={editedCustomer.balance || 0}
//                         onChange={onEditChange}
//                         className={inputClass}
//                         step="0.01"
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
//                     onClick={onSave}
//                     className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${isMobile ? 'w-full' : ''}`}
//                 >
//                     Save Changes
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CustomerDetails;