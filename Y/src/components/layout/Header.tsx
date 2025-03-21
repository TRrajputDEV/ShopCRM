// src/components/layout/Header.tsx
import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onAddCustomer: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onAddCustomer }) => {
    return (
        <header className="bg-white shadow-sm p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Customer Management</h2>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <Input
                            className="pl-10 w-64"
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                    <Button onClick={onAddCustomer}>
                        <Plus size={16} className="mr-2" />
                        Add Customer
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;