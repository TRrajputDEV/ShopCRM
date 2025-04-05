import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Tag } from 'lucide-react';
import Navigation from '@/components/landing/PageNavigation';
import Footer from '@/components/landing/Footer';

// Sample blog data - in a real app, this would come from your API/CMS
const blogPosts = [
    {
        id: 1,
        title: 'How Data Analytics Can Transform Your Retail Business',
        excerpt: 'Learn how leveraging customer data can increase sales by up to 30% and improve customer retention.',
        content: `
            <h2>The Power of Customer Insights</h2>
            <p>Modern retail businesses collect vast amounts of data through various touchpoints:</p>
            <ul>
            <li>Point-of-sale transactions</li>
            <li>Online shopping behavior</li>
            <li>Loyalty programs</li>
            <li>Customer service interactions</li>
            <li>Social media engagement</li>
            </ul>
            <p>When properly analyzed, this data reveals patterns and insights that can transform your business strategy.</p>
            
            <h2>Key Benefits of Data-Driven Retail</h2>
            <p>When you understand your customers' preferences and behaviors, you can create highly personalized experiences that resonate with them.</p>
            
            <h3>Optimized Inventory Management</h3>
            <p>Data analytics helps retailers maintain optimal inventory levels by predicting seasonal demand fluctuations and identifying slow-moving items before they become costly.</p>
            
            <h3>Strategic Pricing Decisions</h3>
            <p>With the right data, retailers can implement dynamic pricing strategies that maximize profits while remaining competitive.</p>
            
            <h2>Getting Started with Retail Analytics</h2>
            <p>The journey to becoming a data-driven retailer doesn't have to be overwhelming. Start by identifying your key business questions and auditing your current data collection.</p>
        `,
        category: 'Data Trends',
        author: 'Sarah Johnson',
        authorTitle: 'Head of Data Analytics',
        date: 'April 1, 2025',
        image: '/images/blog/data-analytics.jpg',
        tags: ['Analytics', 'Retail', 'Growth'],
        relatedPosts: [2, 3]
    },
    {
        id: 2,
        title: 'Top 5 CRM Features Every Small Business Needs',
        excerpt: 'Discover the essential CRM features that will help your small business compete with larger enterprises.',
        content: `
            <h2>Why Small Businesses Need CRM</h2>
            <p>Customer Relationship Management systems are no longer just for large enterprises. Small businesses can benefit greatly from the right CRM implementation.</p>
            
            <h2>Essential CRM Features</h2>
            <h3>1. Contact Management</h3>
            <p>Centralized storage of customer information is the foundation of any good CRM system.</p>
            
            <h3>2. Sales Pipeline Management</h3>
            <p>Visualize and manage your sales process from lead to close with customizable pipeline views.</p>
            
            <h3>3. Email Integration</h3>
            <p>Connect your email accounts to track all communications with customers in one place.</p>
            
            <h3>4. Reporting and Analytics</h3>
            <p>Make data-driven decisions with insights into your sales, customer engagement, and team performance.</p>
            
            <h3>5. Mobile Access</h3>
            <p>Access your CRM on the go with mobile apps that keep you connected to your business from anywhere.</p>
        `,
        category: 'Success Stories',
        author: 'Michael Chen',
        authorTitle: 'Small Business Consultant',
        date: 'March 28, 2025',
        image: '/images/blog/crm-features.jpg',
        tags: ['Small Business', 'CRM', 'Tools'],
        relatedPosts: [1, 3]
    },
    {
        id: 3,
        title: 'Case Study: How PrettyBoutique Increased Sales by 45%',
        excerpt: 'See how a small clothing retailer leveraged ShopCRM to dramatically improve their bottom line.',
        content: `
            <h2>PrettyBoutique's Challenge</h2>
            <p>PrettyBoutique, a small clothing retailer with two physical locations, was struggling to compete with larger chains and online retailers.</p>
            
            <h2>The Solution</h2>
            <p>After implementing ShopCRM, PrettyBoutique was able to:</p>
            <ul>
              <li>Track customer preferences and purchase history</li>
              <li>Create targeted marketing campaigns</li>
              <li>Optimize inventory management</li>
              <li>Improve customer service</li>
            </ul>
            
            <h2>The Results</h2>
            <p>Within six months of implementation, PrettyBoutique saw:</p>
            <ul>
              <li>45% increase in overall sales</li>
              <li>28% improvement in repeat customer rate</li>
              <li>32% reduction in inventory costs</li>
              <li>67% increase in email marketing ROI</li>
            </ul>
            
            <h2>Key Takeaways</h2>
            <p>PrettyBoutique's success demonstrates how small retailers can leverage technology to compete effectively in today's market.</p>
        `,
        category: 'Success Stories',
        author: 'James Wilson',
        authorTitle: 'Customer Success Manager',
        date: 'March 25, 2025',
        image: '/images/blog/case-study.jpg',
        tags: ['Case Study', 'Retail', 'Success'],
        relatedPosts: [1, 2]
    }
];

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find the current post
    const post = blogPosts.find(post => post.id === Number(id));

    // Find related posts
    const relatedPosts = post?.relatedPosts
        ? blogPosts.filter(p => post.relatedPosts.includes(p.id))
        : [];

    if (!post && id) {
        return (
            <>
                <Navigation title={''} />
                <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
                    <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/blog')}
                        className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <ArrowLeft className="inline mr-2 h-4 w-4" /> Back to Blog
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navigation title={post.title} />
            <main className="pt-16 pb-16">
                {/* Header navigation */}
                <div className="max-w-4xl mx-auto px-4 pt-6">
                    <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                    </Link>
                </div>

                {/* Article header */}
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
                    <p className="mt-3 text-lg text-gray-600">{post.excerpt}</p>

                    <div className="mt-6 flex items-center border-b border-gray-200 pb-6">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <User className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <div className="text-sm text-gray-500">
                                <p>{post.authorTitle} • {post.date}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-4xl mx-auto px-4 mb-8">
                    <img
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                        src={post.image || "/api/placeholder/800/400"}
                        alt={post.title}
                    />
                </div>

                {/* Article content */}
                <div className="max-w-3xl mx-auto px-4">
                    <article className="prose lg:prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Link to={`/blog?tag=${tag}`} key={tag}>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                                    <Tag className="mr-1 h-3 w-3" /> {tag}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                                        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                                            <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt.substring(0, 100)}...</p>
                                            <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">Read More →</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogPost;