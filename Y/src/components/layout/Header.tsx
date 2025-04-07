import { useState, useEffect } from "react";
import { Menu, X, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onAddCustomer: () => void;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    searchTerm, 
    onSearchChange, 
    onAddCustomer,
    isMenuOpen,
    toggleMenu
}) => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect on navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo with Tagline */}
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <span className="text-orange-600 text-xl font-bold">ShopCRM</span>
                            <span className="text-gray-500 text-xs hidden sm:block">Empowering Your Business</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        <a href="/">
                            <span className="text-gray-700 hover:text-orange-600 transition-colors">Home</span>
                        </a>
                        <a href="/about">
                            <span className="text-gray-700 hover:text-orange-600 transition-colors">About Us</span>
                        </a>
                        
                        {/* Search Box */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <Input
                                className="pl-10 w-48 lg:w-64 border-gray-200 focus-visible:ring-orange-500"
                                placeholder="Search customers..."
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                        
                        {/* Add Customer Button */}
                        <Button onClick={onAddCustomer} className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-3 py-2 lg:px-6 rounded-lg transition-colors whitespace-nowrap">
                            <Plus size={16} className="mr-1 lg:mr-2" />
                            <span className="hidden sm:inline">Add Customer</span>
                            <span className="sm:hidden">Add</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg overflow-hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/">
                            <span className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-orange-600 rounded-md">
                                Home
                            </span>
                        </a>
                        <a href="/about">
                            <span className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-orange-600 rounded-md">
                                About Us
                            </span>
                        </a>
                    </div>
                    
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-4 space-y-3">
                            {/* Mobile Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <Input
                                    className="pl-10 w-full border-gray-200 focus-visible:ring-orange-500"
                                    placeholder="Search customers..."
                                    value={searchTerm}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                />
                            </div>
                            
                            {/* Mobile Add Customer Button */}
                            <Button onClick={onAddCustomer} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                                <Plus size={16} className="mr-2" />
                                Add Customer
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;