import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import GlobalBackground from '@/components/common/GlobalBackground';
import { ArrowUp } from 'lucide-react'; // Import the arrow icon

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // For the scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };
        
        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Function to scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 relative">
            {/* Global Background rendered behind all content */}
            <GlobalBackground />
            
            {/* Header */}
            <Header
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                onAddCustomer={onAddCustomer}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />
            
            {/* Content */}
            <div className="pt-16 flex-grow relative z-10">
                {/* This padding-top ensures content starts below the fixed header */}
                <main className="max-w-7xl mx-auto p-4 md:p-6">
                    {children}
                </main>
            </div>
            
            {/* Footer Section */}
            <footer className="bg-white border-t border-gray-200 relative z-10">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} ShopCRM. All rights reserved.
                </div>
            </footer>
            
            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default MainLayout;
// src/components/layout/MainLayout.tsx
// import React, { useState } from 'react';
// import { FaBars, FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

// interface MainLayoutProps {
//     children: React.ReactNode;
//     searchTerm: string;
//     onSearchChange: (term: string) => void;
//     onAddCustomer: () => void;
//     isMobile?: boolean;
// }

// const MainLayout: React.FC<MainLayoutProps> = ({
//     children,
//     searchTerm,
//     onSearchChange,
//     onAddCustomer,
//     isMobile = false
// }) => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [searchVisible, setSearchVisible] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const toggleSearch = () => {
//         setSearchVisible(!searchVisible);
//     };

//     return (
//         <div className="flex flex-col h-screen bg-gray-100">
//             {/* Header */}
//             <header className="bg-blue-600 text-white py-2 px-4 flex items-center justify-between shadow-md">
//                 <div className="flex items-center">
//                     {isMobile && (
//                         <button 
//                             onClick={toggleSidebar}
//                             className="mr-3 text-xl focus:outline-none"
//                         >
//                             <FaBars />
//                         </button>
//                     )}
//                     <h1 className="text-xl font-bold">Customer Manager</h1>
//                 </div>
                
//                 <div className="flex items-center space-x-2">
//                     {isMobile ? (
//                         <>
//                             <button 
//                                 onClick={toggleSearch}
//                                 className="p-2 focus:outline-none"
//                             >
//                                 <FaSearch />
//                             </button>
//                             <button 
//                                 onClick={onAddCustomer}
//                                 className="p-2 focus:outline-none"
//                             >
//                                 <FaPlus />
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     placeholder="Search customers..."
//                                     value={searchTerm}
//                                     onChange={(e) => onSearchChange(e.target.value)}
//                                     className="px-4 py-2 rounded-lg w-64 text-black focus:outline-none"
//                                 />
//                                 <FaSearch className="absolute right-3 top-3 text-gray-400" />
//                             </div>
//                             <button
//                                 onClick={onAddCustomer}
//                                 className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg flex items-center"
//                             >
//                                 <FaPlus className="mr-2" /> Add Customer
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </header>

//             {/* Mobile search overlay */}
//             {isMobile && searchVisible && (
//                 <div className="w-full bg-white p-2 shadow-md flex items-center">
//                     <input
//                         type="text"
//                         placeholder="Search customers..."
//                         value={searchTerm}
//                         onChange={(e) => onSearchChange(e.target.value)}
//                         className="flex-1 px-4 py-2 border rounded-lg text-black focus:outline-none"
//                         autoFocus
//                     />
//                     <button 
//                         onClick={toggleSearch}
//                         className="ml-2 p-2 text-gray-500 focus:outline-none"
//                     >
//                         <FaTimes />
//                     </button>
//                 </div>
//             )}

//             {/* Main content area */}
//             <div className="flex flex-1 overflow-hidden">
//                 {/* Sidebar - hidden on mobile unless toggled */}
//                 {(!isMobile || sidebarOpen) && (
//                     <div 
//                         className={`${
//                             isMobile ? 'fixed inset-0 z-50 bg-black bg-opacity-50' : ''
//                         }`}
//                         onClick={isMobile ? toggleSidebar : undefined}
//                     >
//                         <aside 
//                             className={`${
//                                 isMobile ? 'w-64 fixed top-0 left-0 h-full z-50' : 'w-64'
//                             } bg-gray-800 text-white p-4 flex flex-col`}
//                             onClick={(e) => isMobile && e.stopPropagation()}
//                         >
//                             {isMobile && (
//                                 <div className="flex justify-end mb-4">
//                                     <button 
//                                         onClick={toggleSidebar}
//                                         className="text-white focus:outline-none"
//                                     >
//                                         <FaTimes />
//                                     </button>
//                                 </div>
//                             )}
//                             <h2 className="text-xl font-bold mb-4">Menu</h2>
//                             <nav>
//                                 <ul className="space-y-2">
//                                     <li className="px-4 py-2 rounded bg-blue-700 cursor-pointer hover:bg-blue-600">
//                                         Customers
//                                     </li>
//                                     <li className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700">
//                                         Products
//                                     </li>
//                                     <li className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700">
//                                         Orders
//                                     </li>
//                                     <li className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700">
//                                         Settings
//                                     </li>
//                                 </ul>
//                             </nav>
//                         </aside>
//                     </div>
//                 )}

//                 {/* Main content */}
//                 <main className={`flex-1 p-4 overflow-auto ${isMobile ? 'w-full' : ''}`}>
//                     {children}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default MainLayout;