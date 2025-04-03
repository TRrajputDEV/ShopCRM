// src/pages/blog/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Navigation from '../../components/landing/Navigation';
import Footer from '../../components/landing/Footer';

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
        featured: true,
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
        featured: false,
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
        featured: true,
        tags: ['Case Study', 'Retail', 'Success']
    },
    {
        id: 4,
        title: 'The Future of E-commerce: AI-Powered Personalization',
        excerpt: 'Explore how artificial intelligence is transforming the online shopping experience through personalization.',
        category: 'Latest News',
        author: 'Elena Rodriguez',
        date: 'March 22, 2025',
        image: '/images/blog/ai-ecommerce.jpg',
        featured: false,
        tags: ['AI', 'E-commerce', 'Trends']
    },
    {
        id: 5,
        title: 'Privacy-First Data Collection: What Retailers Need to Know',
        excerpt: 'Learn about the latest regulations and best practices for customer data collection and management.',
        category: 'Latest News',
        author: 'David Park',
        date: 'March 20, 2025',
        image: '/images/blog/privacy-data.jpg',
        featured: false,
        tags: ['Privacy', 'Compliance', 'Data']
    },
    {
        id: 6,
        title: '7 Ways to Improve Customer Retention with CRM Software',
        excerpt: 'Discover proven strategies to keep customers coming back using modern CRM technology.',
        category: 'Data Trends',
        author: 'Sarah Johnson',
        date: 'March 18, 2025',
        image: '/images/blog/customer-retention.jpg',
        featured: false,
        tags: ['Customer Retention', 'Strategy', 'Growth']
    }
];

const categories = [
    { name: 'All Posts', count: blogPosts.length },
    { name: 'Latest News', count: blogPosts.filter(post => post.category === 'Latest News').length },
    { name: 'Data Trends', count: blogPosts.filter(post => post.category === 'Data Trends').length },
    { name: 'Success Stories', count: blogPosts.filter(post => post.category === 'Success Stories').length }
];

export default function Blog() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All Posts');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Filter posts based on active category and search query
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && (searchQuery === '' || matchesSearch);
    });

    // Get featured posts
    const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2);

    return (
        <>
            <Head>
                <title>Blog | ShopCRM - Latest News and Data Trends</title>
                <meta name="description" content="Stay informed about the latest retail trends, data analytics insights, and success stories from ShopCRM." />
            </Head>

            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            <main className="pt-16">
                {/* Hero section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                                ShopCRM Blog
                            </h1>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                Insights, trends, and success stories to help your retail business thrive.
                            </p>

                            {/* Search Bar */}
                            <div className="mt-8 max-w-xl mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                        placeholder="Search articles, topics, or tags..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Posts */}
                {!searchQuery && activeCategory === 'All Posts' && (
                    <section className="py-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map((post) => (
                                    <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-48 w-full object-cover"
                                                src={post.image || "/api/placeholder/800/400"}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex-1">
                                                <span className="inline-block bg-primary-light px-3 py-1 text-xs font-medium text-primary rounded-full">
                                                    {post.category}
                                                </span>
                                                <Link href={`/blog/${post.id}`}>
                                                    <h3 className="mt-2 text-xl font-semibold text-gray-900 hover:text-primary">
                                                        {post.title}
                                                    </h3>
                                                </Link>
                                                <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="sr-only">{post.author}</span>
                                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                        <User className="h-6 w-6" />
                                                    </div>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.date}>{post.date}</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Blog Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        {/* Sidebar */}
                        <div className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-24">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                                <nav className="space-y-1">
                                    {categories.map((category) => (
                                        <button
                                            key={category.name}
                                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-left ${activeCategory === category.name
                                                    ? 'bg-primary text-white'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                            onClick={() => setActiveCategory(category.name)}
                                        >
                                            <span className="truncate">{category.name}</span>
                                            <span className={`ml-auto inline-block py-0.5 px-2 text-xs rounded-full ${activeCategory === category.name
                                                    ? 'bg-white bg-opacity-20 text-white'
                                                    : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 8).map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => setSearchQuery(tag)}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            >
                                                <Tag className="mr-1 h-3 w-3" /> {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <main className="mt-8 lg:mt-0 lg:col-span-9">
                            {/* Mobile Category Filter */}
                            <div className="block lg:hidden mb-8">
                                <label htmlFor="category" className="sr-only">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    value={activeCategory}
                                    onChange={(e) => setActiveCategory(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category.name} value={category.name}>
                                            {category.name} ({category.count})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {searchQuery ? 'Search Results' : activeCategory}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                                </p>
                            </div>

                            {/* Blog Posts Grid */}
                            {filteredPosts.length > 0 ? (
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredPosts.map((post) => (
                                        <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-48 w-full object-cover"
                                                    src={post.image || "/api/placeholder/800/400"}
                                                    alt={post.title}
                                                />
                                            </div>
                                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="inline-block bg-primary-light px-3 py-1 text-xs font-medium text-primary rounded-full">
                                                            {post.category}
                                                        </span>
                                                        <div className="flex items-center text-xs text-gray-500">
                                                            <Calendar className="h-3 w-3 mr-1" />
                                                            <span>{post.date}</span>
                                                        </div>
                                                    </div>
                                                    <Link href={`/blog/${post.id}`}>
                                                        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary">
                                                            {post.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="mt-3 text-sm text-gray-500">{post.excerpt}</p>
                                                </div>

                                                <div className="mt-6 flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <span className="sr-only">{post.author}</span>
                                                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                                <User className="h-4 w-4" />
                                                            </div>
                                                        </div>
                                                        <div className="ml-2">
                                                            <p className="text-xs font-medium text-gray-900">{post.author}</p>
                                                        </div>
                                                    </div>

                                                    <Link href={`/blog/${post.id}`}>
                                                        <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark">
                                                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-lg text-gray-500">No articles found matching your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All Posts');
                                        }}
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
                                    >
                                        View all articles
                                    </button>
                                </div>
                            )}
                        </main>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <section className="bg-gray-50 py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                    Stay updated with our newsletter
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Get the latest insights, tips, and trends delivered straight to your inbox.
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <form className="sm:flex">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-primary focus:border-primary sm:max-w-xs rounded-md"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-3 text-sm text-gray-500">
                                    We care about your data. Read our{' '}
                                    <Link href="/privacy">
                                        <span className="font-medium text-gray-900 underline hover:text-primary">
                                            Privacy Policy
                                        </span>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}