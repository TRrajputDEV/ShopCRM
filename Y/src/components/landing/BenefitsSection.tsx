// src/components/landing/BenefitsSection.tsx

import { Clock, TrendingUp, Heart, ShieldCheck } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: <Clock className="w-12 h-12 text-orange-600" />,
            title: "Save Time",
            description: "Automate repetitive tasks and access customer information instantly, freeing up your time to focus on growing your business."
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
            title: "Increase Sales",
            description: "Identify upselling opportunities and target promotions based on customer purchase history and preferences."
        },
        {
            icon: <Heart className="w-12 h-12 text-orange-600" />,
            title: "Build Loyalty",
            description: "Strengthen customer relationships with personalized service, timely follow-ups, and loyalty programs."
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-orange-600" />,
            title: "Reduce Risks",
            description: "Make informed decisions with clear visibility of customer payment history and outstanding balances."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Shop Owners Love Our System</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience the difference our customer management system makes for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex-shrink-0">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}