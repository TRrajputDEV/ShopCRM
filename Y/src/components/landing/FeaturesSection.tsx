// src/components/landing/FeaturesSection.tsx

import { BarChart, Users, History, Settings, Wallet, Bell } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-orange-600" />,
            title: "Customer Profiles",
            description: "Create detailed customer profiles with contact information, preferences, and notes to personalize your service."
        },
        {
            icon: <Wallet className="w-8 h-8 text-orange-600" />,
            title: "Balance Tracking",
            description: "Easily track customer balances, pending payments, and credit limits to maintain healthy cash flow."
        },
        {
            icon: <History className="w-8 h-8 text-orange-600" />,
            title: "Purchase History",
            description: "Access comprehensive purchase records to understand customer buying patterns and preferences."
        },
        {
            icon: <BarChart className="w-8 h-8 text-orange-600" />,
            title: "Real-time Analytics",
            description: "Gain valuable insights with interactive dashboards showing sales trends, customer growth, and more."
        },
        {
            icon: <Bell className="w-8 h-8 text-orange-600" />,
            title: "Smart Notifications",
            description: "Receive timely alerts for payment reminders, customer birthdays, and important milestones."
        },
        {
            icon: <Settings className="w-8 h-8 text-orange-600" />,
            title: "Customizable Tools",
            description: "Tailor the system to your specific business needs with flexible settings and integrations."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Shop Owners</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our comprehensive toolkit is designed specifically for shop owners who want to build stronger customer relationships.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-orange-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
                            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
