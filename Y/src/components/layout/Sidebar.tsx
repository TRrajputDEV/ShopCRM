// src/components/layout/Sidebar.tsx
import React from 'react';
import { Database, UserPlus, CreditCard } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 bg-gray-900 text-white">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">Shop Manager</h1>
                <nav className="space-y-2">
                    <a href="#" className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md">
                        <Database size={18} />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
                        <UserPlus size={18} />
                        <span>About us</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-800">
                        <CreditCard size={18} />
                        <span>Transactions</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;