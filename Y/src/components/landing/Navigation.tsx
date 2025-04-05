// src/components/landing/Navigation.tsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Navigation({ isMenuOpen, toggleMenu }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog', hasDropdown: true },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const blogLinks = [
    { name: 'Latest News', href: '/blog' },
    { name: 'Data Trends', href: '/blog' },
    { name: 'Success Stories', href: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Premium Tagline */}
          <div className="flex items-center">
            <a href="/">
              <div className="flex flex-col">
                <span className="text-primary text-xl font-bold">ShopCRM</span>
                <span className="text-gray-500 text-xs">Empowering Your Business</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div>  
                    <button 
                      className="text-gray-700 hover:text-primary flex items-center"
                      onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {blogDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        {blogLinks.map((blogLink) => (
                          <a 
                            href={blogLink.href} 
                            key={blogLink.name}
                          >
                            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">
                              {blogLink.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={link.href}>
                    <span className="text-gray-700 hover:text-primary">
                      {link.name}
                    </span>
                  </a>
                )}
              </div>
            ))}
            
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition duration-200">
              Buy Premium
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button 
                      className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md flex justify-between items-center"
                      onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {blogDropdownOpen && (
                      <div className="pl-6 space-y-1">
                        {blogLinks.map((blogLink) => (
                          <a 
                            href={blogLink.href} 
                            key={blogLink.name}
                          >
                            <span className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md">
                              {blogLink.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={link.href}>
                    <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md">
                      {link.name}
                    </span>
                  </a>
                )}
              </div>
            ))}
            
            <button className="w-full mt-3 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition duration-200 ">
              Buy Premium
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}