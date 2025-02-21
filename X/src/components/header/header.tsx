// Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full py-6 px-4 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                <div className="animate-fadeIn">
                    <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Doer
                    </h1>
                </div>
                <nav className="flex gap-8">
                    <a href="#" className="text-xl font-semibold text-gray-300 hover:text-white transition-colors duration-300 relative group">
                        About us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="text-xl font-semibold text-gray-300 hover:text-white transition-colors duration-300 relative group">
                        Contact Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;