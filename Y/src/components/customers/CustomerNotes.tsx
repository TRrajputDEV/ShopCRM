// src/components/customers/CustomerNotes.tsx
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface CustomerNotesProps {
    notes: string;
    onNotesChange: (value: string) => void;
}

const CustomerNotes: React.FC<CustomerNotesProps> = ({ notes, onNotesChange }) => {
    const [isSaved, setIsSaved] = React.useState(false);

    const handleSave = () => {
        // In a real app, you might save this to local storage or a database
        localStorage.setItem('shopNotes', notes);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    return (
        <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                    Use this space to jot down important notes, reminders, or ideas for your shop.
                    Notes are saved automatically when you click the save button.
                </p>
            </div>

            <div className="space-y-2">
                <Textarea
                    placeholder="Type your notes here..."
                    className="min-h-[300px] resize-y"
                    value={notes}
                    onChange={(e) => onNotesChange(e.target.value)}
                />
                
                <div className="flex justify-end">
                    <Button 
                        variant="default" 
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                        onClick={handleSave}
                    >
                        <Save className="mr-2 h-4 w-4" />
                        {isSaved ? "Saved!" : "Save Notes"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CustomerNotes;

// import React, { useEffect, useState } from 'react';

// interface NotesTabProps {
//     notes: string;
//     onChange: (value: string) => void;
//     isMobile?: boolean;
// }

// const NotesTab: React.FC<NotesTabProps> = ({
//     notes,
//     onChange,
//     isMobile = false
// }) => {
//     const [localNotes, setLocalNotes] = useState(notes);
//     const [isSaving, setIsSaving] = useState(false);

//     // Update local state when prop changes
//     useEffect(() => {
//         setLocalNotes(notes);
//     }, [notes]);

//     // Auto-save functionality
//     const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         const newValue = e.target.value;
//         setLocalNotes(newValue);
        
//         // Update parent state
//         onChange(newValue);
        
//         // Show saving indicator
//         setIsSaving(true);
//         setTimeout(() => setIsSaving(false), 1000);
//     };

//     // Save to localStorage when notes change
//     useEffect(() => {
//         const saveToLocalStorage = () => {
//             localStorage.setItem('shopNotes', localNotes);
//         };

//         // Debounce to prevent excessive localStorage writes
//         const timeoutId = setTimeout(saveToLocalStorage, 500);
//         return () => clearTimeout(timeoutId);
//     }, [localNotes]);

//     return (
//         <div className="notes-container">
//             <div className="flex flex-col w-full h-full max-w-4xl mx-auto p-4">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Shop Notes</h2>
//                     <div className="text-sm text-gray-500">
//                         {isSaving ? 'Saving...' : 'All changes saved'}
//                     </div>
//                 </div>
                
//                 <div className="relative flex-grow">
//                     <textarea
//                         value={localNotes}
//                         onChange={handleChange}
//                         placeholder="Add your shop notes here..."
//                         className={`w-full h-64 md:h-96 p-3 border rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                             isMobile ? 'text-base' : 'text-sm'
//                         }`}
//                     />
//                 </div>
                
//                 <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
//                     <div className="text-sm text-gray-500 mb-2 sm:mb-0">
//                         Notes are automatically saved
//                     </div>
//                     <div className="flex space-x-2">
//                         <button
//                             className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             onClick={() => setLocalNotes('')}
//                         >
//                             Clear
//                         </button>
//                         <button
//                             className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             onClick={() => onChange(localNotes)}
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NotesTab;