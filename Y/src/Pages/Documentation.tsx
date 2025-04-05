// src/pages/Documentation.tsx
import React, { useState, ChangeEvent, JSX } from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, Users, Settings, ShoppingBag, BarChart, HelpCircle, Coffee } from 'lucide-react';
import PageNavigation from '../components/landing/PageNavigation';
// import Footer from '../components/landing/Footer';

interface Category {
  id: string;
  label: string;
  icon: JSX.Element;
}

interface Doc {
  title: string;
  description: string;
}

const Documentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('getting-started');

  const categories: Category[] = [
    { id: 'getting-started', label: 'Getting Started', icon: <Book size={20} /> },
    { id: 'customer-management', label: 'Customer Management', icon: <Users size={20} /> },
    { id: 'inventory', label: 'Inventory', icon: <ShoppingBag size={20} /> },
    { id: 'analytics', label: 'Analytics & Reports', icon: <BarChart size={20} /> },
    { id: 'settings', label: 'Account Settings', icon: <Settings size={20} /> },
    { id: 'faq', label: 'FAQs', icon: <HelpCircle size={20} /> },
    { id: 'api', label: 'API Documentation', icon: <Coffee size={20} /> },
  ];

  const docs: Record<string, Doc[]> = {
    'getting-started': [
      { title: 'Quick Start Guide', description: 'Get up and running with Shop CRM in minutes' },
      { title: 'Dashboard Overview', description: 'Learn about the main dashboard interface' },
      { title: 'Import Your Data', description: 'How to import existing customer data into Shop CRM' },
      { title: 'Setting Up Your First Campaign', description: 'Creating your first customer outreach campaign' },
      { title: 'Mobile App Setup', description: 'Install and configure the Shop CRM mobile app' },
    ],
    'customer-management': [
      { title: 'Adding New Customers', description: 'Learn how to add and manage customer profiles' },
      { title: 'Customer Segmentation', description: 'Create effective customer segments for targeted marketing' },
      { title: 'Managing Customer Communications', description: 'Track and organize all customer interactions' },
      { title: 'Customer Tags & Categories', description: 'Organize customers with custom tags and categories' },
      { title: 'Customer Notes & History', description: 'Document customer interactions and view history' },
    ],
    'inventory': [
      { title: 'Adding Products', description: 'Set up your product catalog' },
      { title: 'Inventory Management', description: 'Track stock levels and manage inventory' },
      { title: 'Product Categories', description: 'Organize products with custom categories' },
      { title: 'Price Management', description: 'Set and update product pricing' },
      { title: 'Low Stock Alerts', description: 'Configure alerts for low inventory items' },
    ],
    'analytics': [
      { title: 'Sales Reports', description: 'Generate and interpret sales reports' },
      { title: 'Customer Growth Metrics', description: 'Track your customer acquisition and retention' },
      { title: 'Custom Report Builder', description: 'Create personalized reports for your business needs' },
      { title: 'Exporting Data', description: 'Export your data to CSV, Excel, or PDF formats' },
      { title: 'Dashboard Customization', description: 'Personalize your analytics dashboard' },
    ],
    'settings': [
      { title: 'User Management', description: 'Add and manage user accounts and permissions' },
      { title: 'Account Settings', description: 'Configure your Shop CRM account settings' },
      { title: 'Integration Setup', description: 'Connect Shop CRM with other business tools' },
      { title: 'Email Configuration', description: 'Set up email notifications and templates' },
      { title: 'Security Settings', description: 'Manage security and privacy settings' },
    ],
    'faq': [
      { title: 'Billing & Subscription', description: 'Answers to common billing questions' },
      { title: 'Data Security', description: 'How we keep your data safe and secure' },
      { title: 'Troubleshooting', description: 'Common issues and how to resolve them' },
      { title: 'Feature Requests', description: 'How to suggest new features and improvements' },
      { title: 'Account Recovery', description: 'Recover access to your account' },
    ],
    'api': [
      { title: 'API Overview', description: 'Introduction to the Shop CRM API' },
      { title: 'Authentication', description: 'How to authenticate with the API' },
      { title: 'Customer Endpoints', description: 'API endpoints for customer management' },
      { title: 'Order Endpoints', description: 'API endpoints for order management' },
      { title: 'Rate Limits', description: 'Understanding API rate limits and quotas' },
    ],
  };

  const breadcrumbs = [
    { label: 'Documentation', path: '/documentation' }
  ];

  const filteredDocs = docs[activeCategory].filter((doc) => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <PageNavigation title="Documentation" breadcrumbs={breadcrumbs} />
      
      <main className="flex-grow flex">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 bg-gray-50 p-6 border-r border-gray-200">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          
          <nav>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="mr-3 text-orange-600">{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        <div className="flex-grow p-6 bg-white">
          {/* Content goes here */}
        </div>
        
        {/* Mobile Sidebar */}
        <div className="md:hidden mb-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          <select 
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {categories.find(c => c.id === activeCategory)?.label}
          </h1>
          <p className="text-gray-600">
            {activeCategory === 'getting-started'
              ? 'Everything you need to get started with Shop CRM.'
              : activeCategory === 'customer-management'
              ? 'Learn how to effectively manage your customers.'
              : activeCategory === 'inventory'
              ? 'Manage your product inventory efficiently.'
              : activeCategory === 'analytics'
              ? 'Get insights from your data with powerful analytics.'
              : activeCategory === 'settings'
              ? 'Configure Shop CRM to suit your business needs.'
              : activeCategory === 'faq'
              ? 'Find answers to frequently asked questions.'
              : 'Access the Shop CRM API to build custom integrations.'
            }
          </p>
        </div>
        
        <div className="mb-8">
          {searchTerm && (
            <p className="mb-4 text-gray-600">
              Showing results for "{searchTerm}" in {categories.find(c => c.id === activeCategory)?.label}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <Link 
                    to={`/documentation/${activeCategory}/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-8">
                <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">
                  We couldn't find any documentation matching "{searchTerm}" in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Documentation;
