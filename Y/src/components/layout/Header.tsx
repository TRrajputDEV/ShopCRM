import { useState } from "react";
import { Menu, X, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onAddCustomer: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onAddCustomer }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm p-4 border-b-2 border-gray-200 w-full">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h2 className="text-2xl font-bold text-slate-950">ShopCRM</h2>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {/* <a href="#" className="text-gray-700 hover:text-orange-600">Dashboard</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Customers</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Analytics</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Settings</a> */}
                </nav>

                {/* Search and Add Button */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <Input
                            className="pl-10 w-64 text-orange-500"
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                    <Button onClick={onAddCustomer} className="bg-orange-600 hover:bg-orange-800">
                        <Plus size={16} className="mr-2" />
                        Add Customer
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden flex flex-col gap-4 mt-4">
                    {/* <a href="#" className="text-gray-700 hover:text-orange-600">Dashboard</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Customers</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Analytics</a>
                    <a href="#" className="text-gray-700 hover:text-orange-600">Settings</a> */}
                    <div className="flex flex-col gap-2 mt-4">
                        <Input
                            className="pl-10 w-full text-orange-500"
                            placeholder="Search customers..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                        <Button onClick={onAddCustomer} className="bg-orange-600 hover:bg-orange-800">
                            <Plus size={16} className="mr-2" />
                            Add Customer
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
