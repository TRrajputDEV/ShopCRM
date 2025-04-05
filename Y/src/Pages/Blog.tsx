import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User } from 'lucide-react';
import Navigation from '@/components/landing/PageNavigation';
import Footer from '@/components/landing/Footer';

// Sample blog data - in a real app, this would come from your API/CMS
const blogPosts = [
    {
        id: 1,
        title: 'How Data Analytics Can Transform Your Retail Business',
        excerpt: 'Learn how leveraging customer data can increase sales by up to 30% and improve customer retention.',
        category: 'Data Trends',
        author: 'Sarah Johnson',
        date: 'April 1, 2025',
        image: '/images/blog/data-analytics.jpg',
        tags: ['Analytics', 'Retail', 'Growth']
    },
    {
        id: 2,
        title: 'Top 5 CRM Features Every Small Business Needs',
        excerpt: 'Discover the essential CRM features that will help your small business compete with larger enterprises.',
        category: 'Success Stories',
        author: 'Michael Chen',
        date: 'March 28, 2025',
        image: '/images/blog/crm-features.jpg',
        tags: ['Small Business', 'CRM', 'Tools']
    },
    {
        id: 3,
        title: 'Case Study: How PrettyBoutique Increased Sales by 45%',
        excerpt: 'See how a small clothing retailer leveraged ShopCRM to dramatically improve their bottom line.',
        category: 'Success Stories',
        author: 'James Wilson',
        date: 'March 25, 2025',
        image: '/images/blog/case-study.jpg',
        tags: ['Case Study', 'Retail', 'Success']
    }
];

const categories = [
    { name: 'All Posts', count: blogPosts.length },
    { name: 'Data Trends', count: blogPosts.filter(post => post.category === 'Data Trends').length },
    { name: 'Success Stories', count: blogPosts.filter(post => post.category === 'Success Stories').length }
];

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Posts');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter posts based on active category and search query
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && (searchQuery === '' || matchesSearch);
    });

    return (
        <>
            <Navigation title="ShopCRM Blog" />
            <main className="pt-16 pb-16">
                {/* Header section */}
                <div className="bg-gray-50 py-8">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            ShopCRM Blog
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Insights, trends, and success stories to help your retail business thrive.
                        </p>

                        {/* Search Bar */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search articles, topics, or tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="md:flex">
                        {/* Sidebar */}
                        <div className="md:w-1/4 mb-6 md:mr-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                            <nav className="space-y-1">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-left ${
                                            activeCategory === category.name
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                        onClick={() => setActiveCategory(category.name)}
                                    >
                                        <span className="truncate">{category.name}</span>
                                        <span className={`ml-auto inline-block py-0.5 px-2 text-xs rounded-full ${
                                            activeCategory === category.name
                                                ? 'bg-white bg-opacity-20 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="md:w-3/4">
                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {searchQuery ? 'Search Results' : activeCategory}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                                </p>
                            </div>

                            {/* Blog Posts List */}
                            {filteredPosts.length > 0 ? (
                                <div className="space-y-8">
                                    {filteredPosts.map((post) => (
                                        <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <img
                                                        className="h-48 w-full object-cover"
                                                        src={post.image || "/api/placeholder/400/300"}
                                                        alt={post.title}
                                                    />
                                                </div>
                                                <div className="p-6 md:w-2/3">
                                                    <div className="flex items-center mb-2">
                                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                            {post.category}
                                                        </span>
                                                        <span className="ml-2 text-xs text-gray-500 flex items-center">
                                                            <Calendar className="h-3 w-3 mr-1" />
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                    <Link to={`/blog/${post.id}`}>
                                                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                                            {post.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
                                                    <div className="mt-4 flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                                <User className="h-4 w-4" />
                                                            </div>
                                                            <span className="ml-2 text-sm font-medium">{post.author}</span>
                                                        </div>
                                                        <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                            Read more →
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-gray-50 rounded-lg">
                                    <p className="text-lg text-gray-500">No articles found matching your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All Posts');
                                        }}
                                        className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        View all articles
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogPage;