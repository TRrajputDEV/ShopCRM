// src/pages/BlogPost.tsx
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    User,
    Tag,
    Share2,
    Bookmark,
    MessageCircle
} from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

// Sample blog data - in a real app, this would come from your API/CMS
const blogPosts = [
    {
        id: 1,
        title: 'How Data Analytics Can Transform Your Retail Business',
        excerpt: 'Learn how leveraging customer data can increase sales by up to 30% and improve customer retention.',
        content: `
<h1>How Data Analytics Can Transform Your Retail Business</h1>
<p>In today's competitive retail landscape, data is the new currency. Retailers who effectively leverage their customer data are seeing remarkable results, with increases in sales of up to 30% and significant improvements in customer retention rates.</p>
<h2>The Power of Customer Insights</h2>
<p>Modern retail businesses collect vast amounts of data through various touchpoints:</p>
<ul>
  <li>Point-of-sale transactions</li>
  <li>Online shopping behavior</li>
  <li>Loyalty programs</li>
  <li>Customer service interactions</li>
  <li>Social media engagement</li>
</ul>
<p>When properly analyzed, this data reveals patterns and insights that can transform your business strategy. For example, detailed purchase history analysis might reveal that customers who buy a specific product are highly likely to return for a related item within 45 days—creating a perfect opportunity for targeted marketing.</p>
<h2>Key Benefits of Data-Driven Retail</h2>
<h3>1. Personalized Customer Experiences</h3>
<p>When you understand your customers' preferences and behaviors, you can create highly personalized experiences that resonate with them. This might include:</p>
<ul>
  <li>Customized product recommendations</li>
  <li>Personalized email marketing campaigns</li>
  <li>Individualized promotions and discounts</li>
  <li>Tailored in-store experiences</li>
</ul>
<h3>2. Optimized Inventory Management</h3>
<p>Data analytics helps retailers maintain optimal inventory levels by:</p>
<ul>
  <li>Predicting seasonal demand fluctuations</li>
  <li>Identifying slow-moving items before they become costly</li>
  <li>Highlighting best-selling products that need consistent stocking</li>
  <li>Optimizing supply chain efficiency</li>
</ul>
<h3>3. Strategic Pricing Decisions</h3>
<p>With the right data, retailers can implement dynamic pricing strategies that maximize profits while remaining competitive:</p>
<ul>
  <li>Price elasticity analysis to understand how price changes affect demand</li>
  <li>Competitive pricing intelligence</li>
  <li>Optimal discount timing and depth</li>
  <li>Bundle pricing opportunities</li>
</ul>
<h2>Getting Started with Retail Analytics</h2>
<p>The journey to becoming a data-driven retailer doesn't have to be overwhelming. Start by:</p>
<ol>
  <li><strong>Identifying your key business questions.</strong> What specific insights would most impact your business decisions?</li>
  <li><strong>Auditing your current data collection.</strong> What data do you already have access to, and what are you missing?</li>
  <li><strong>Implementing the right tools.</strong> Modern CRM systems like ShopCRM provide built-in analytics capabilities.</li>
  <li><strong>Training your team.</strong> Ensure your staff understands how to interpret and act on data insights.</li>
</ol>
<h2>Real-World Success Story</h2>
<p>Fashion retailer StyleHouse implemented a comprehensive data analytics strategy using ShopCRM and saw remarkable results within just six months:</p>
<ul>
  <li>28% increase in average transaction value</li>
  <li>15% reduction in inventory costs</li>
  <li>34% improvement in customer retention</li>
  <li>22% growth in overall revenue</li>
</ul>
<p>By analyzing their customer purchase patterns, StyleHouse was able to redesign their store layout, optimize their product mix, and create targeted marketing campaigns that resonated with their core customer segments.</p>
<h2>Conclusion</h2>
<p>In today's retail environment, data analytics isn't just a competitive advantage—it's becoming a necessity for survival. Retailers who embrace data-driven decision making can create better customer experiences, optimize operations, and ultimately drive stronger business results.</p>
<p>Ready to transform your retail business with data? Contact our team to learn how ShopCRM can help you unlock the power of your customer data.</p>
    `,
        category: 'Data Trends',
        author: 'Sarah Johnson',
        authorTitle: 'Head of Data Analytics',
        authorBio: 'Sarah has over 10 years of experience in retail analytics and has helped dozens of businesses implement data-driven strategies.',
        date: '2025-04-01',
        image: '/images/blog/data-analytics.jpg',
        featured: true,
        tags: ['Analytics', 'Retail', 'Growth'],
        relatedPosts: [2, 6]
    },
    // Additional blog posts would be defined here...
];

export default function BlogPost() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Find the current post
    const post = blogPosts.find(post => post.id === Number(id));

    // Find related posts
    const relatedPosts = post?.relatedPosts
        ? blogPosts.filter(p => post.relatedPosts.includes(p.id))
        : [];

    if (!post && id) {
        return (
            <>
                <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
                    <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                    <button onClick={() => navigate('/blog')} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
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
            <Helmet>
                <title>{post.title} | ShopCRM Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>
            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            <main className="pt-16">
                {/* Hero section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-8">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link to="/blog">
                            <span className="flex items-center text-sm font-medium text-primary hover:text-primary-dark mb-4">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                            </span>
                        </Link>

                        <div>
                            <span className="inline-block bg-primary-light px-3 py-1 text-xs font-medium text-primary rounded-full">
                                {post.category}
                            </span>
                            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                {post.title}
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">{post.excerpt}</p>

                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="sr-only">{post.author}</span>
                                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        <User className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <p>{post.authorTitle}</p>
                                        <span aria-hidden="true">&middot;</span>
                                        <time dateTime={post.date}>{post.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden shadow-lg rounded-lg">
                            <img
                                className="object-cover w-full h-full"
                                src={post.image || "/api/placeholder/1200/675"}
                                alt={post.title}
                            />
                        </div>
                    </div>
                </div>

                {/* Article content */}
                <div className="relative py-16 bg-white overflow-hidden">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                            <svg
                                className="absolute top-12 left-full transform translate-x-32"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                            </svg>
                            <svg
                                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            {/* Social share buttons */}
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                                <div className="flex space-x-2">
                                    {post.tags.map((tag) => (
                                        <Link to={`/blog?tag=${tag}`} key={tag}>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
                                                <Tag className="mr-1 h-3 w-3" /> {tag}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <button className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Share</span>
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Bookmark</span>
                                        <Bookmark className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Comment</span>
                                        <MessageCircle className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Blog content rendered as HTML */}
                            <article className="prose prose-lg prose-indigo mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="mt-16">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Posts</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                                                <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                                                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                                                    <span className="text-orange-600 hover:text-orange-800 font-medium">Read More &rarr;</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
