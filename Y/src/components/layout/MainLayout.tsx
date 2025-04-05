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