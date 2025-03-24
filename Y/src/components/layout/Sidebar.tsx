// src/components/layout/Sidebar.tsx
import React from 'react';
import { Database, UserPlus, CreditCard } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-22 bg-gray-900 text-white">
            <div className="p-4">
                <nav className="space-y-2">
                    <a href="#" className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md">
                        <Database size={18} />
                    </a>
                    <a href="/" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
                        <UserPlus size={18} />
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
                        <CreditCard size={18} />
                    </a>
                </nav>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Sidebar;