// src/pages/AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, Target } from 'lucide-react';
import PageNavigation from '@/components/landing/PageNavigation';
import Footer from '@/components/landing/Footer';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

interface TimelineEvent {
    year: string;
    event: string;
}

const AboutUs: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Tushar Tanwar',
            role: 'CEO & Founder',
            image: 'profile-pic (8).png',
            bio: 'Tushar Tanwar founded Shop CRM with a vision to make customer relationship management accessible to businesses of all sizes.'
        },
        {
            name: 'Harmeet Singh',
            role: 'CTO',
            image: 'HarmeetPIC.jpg',
            bio: 'Harmeet brings 15 years of software development experience, focusing on building scalable and intuitive CRM solutions.'
        },
        {
            name: 'Abhay Rana',
            role: 'Head of Customer Success',
            image: 'Abhay Ranaaa.png',
            bio: 'Abhay Rana ensures our customers get the most out of Shop CRM, leading our dedicated customer success team.'
        },
        {
            name: 'Deepanshu Negi',
            role: 'Lead Designer',
            image: 'deepanshuuu.jpg',
            bio: 'Deepanshu Negi is passionate about creating beautiful, user-friendly interfaces that make customer management a breeze.'
        }
    ];

    const timeline: TimelineEvent[] = [
        { year: 'Week 1', event: 'Kick-off: Requirement analysis and project planning.' },
        { year: 'Week 2', event: 'Design phase: Create wireframes, plan UI/UX, and design the database schema.' },
        { year: 'Week 3', event: 'Setup: Configure development environment, version control, and project scaffolding.' },
        { year: 'Week 4', event: 'Development: Implement core functionalities (customer management basics).' },
        { year: 'Week 5', event: 'Feature integration: Add inventory management and basic customer analytics.' },
        { year: 'Week 6', event: 'Testing: Conduct user testing, refine features, and fix bugs.' },
        { year: 'Week 7', event: 'Deployment: Final touches, documentation, and project wrap-up.' }
    ];
    

    const breadcrumbs = [
        { label: 'About Us', path: '/about' }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <PageNavigation title="About Us" breadcrumbs={breadcrumbs} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Shop CRM was born from a simple idea: customer relationship management should be accessible,
                                intuitive, and powerful for businesses of all sizes.
                            </p>
                            <Link
                                to="/getintouch"
                                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Mission & Values</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Users className="text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-First</h3>
                                <p className="text-gray-700">
                                    We believe in putting our customers' needs at the center of everything we do.
                                    Their success is our success.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Target className="text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
                                <p className="text-gray-700">
                                    We strive to make complex processes simple and intuitive, saving our users time and frustration.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Award className="text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                                <p className="text-gray-700">
                                    We are committed to quality in every aspect of our product and service, constantly pushing ourselves to improve.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Calendar className="text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                                <p className="text-gray-700">
                                    We embrace change and continuously explore new ways to solve customer management challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Team */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-orange-600 text-center mb-4">{member.role}</p>
                                    <p className="text-gray-700 text-center">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our History */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>

                        <div className="max-w-3xl mx-auto">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex mb-8 last:mb-0">
                                    <div className="mr-4">
                                        <div className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <div className={`w-0.5 bg-orange-200 h-full mx-auto ${index === timeline.length - 1 ? 'hidden' : ''}`}></div>
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.year}</h3>
                                        <p className="text-gray-700">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-orange-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your customer relationships?</h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of businesses already using Shop CRM to streamline their customer management and boost sales.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                to="/CustomerManagement"
                                className="inline-block bg-white text-orange-600 hover:bg-orange-100 font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                Try Shop CRM
                            </Link>
                            <Link
                                to="/contactSales"
                                className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
