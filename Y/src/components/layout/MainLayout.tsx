// src/components/layout/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import GlobalBackground from '@/components/common/GlobalBackground'; // Adjust the path if necessary

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
    onAddCustomer,
}) => {
    return (
        <>
            {/* Global Background rendered behind all content */}
            <GlobalBackground />
            <div className="flex flex-row-reverse h-screen bg-gray-100 relative">
                {/* <Sidebar /> */}
                <div className="flex-1 overflow-auto relative z-10">
                    <Header
                        searchTerm={searchTerm}
                        onSearchChange={onSearchChange}
                        onAddCustomer={onAddCustomer}
                    />
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
