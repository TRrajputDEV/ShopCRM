// src/components/layout/MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainLayoutProps {
    children: ReactNode;
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onAddCustomer: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    searchTerm,
    onSearchChange,
    onAddCustomer
}) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 overflow-auto">
                <Header
                    searchTerm={searchTerm}
                    onSearchChange={onSearchChange}
                    onAddCustomer={onAddCustomer}
                />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;