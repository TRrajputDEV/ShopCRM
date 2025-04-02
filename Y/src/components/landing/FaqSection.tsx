// src/components/landing/FaqSection.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
    const faqs = [
        {
            question: "How easy is it to get started?",
            answer: "Getting started is simple. After signing up, you can import your existing customer data or start adding customers manually. Our intuitive interface will guide you through the setup process, and you can have your system up and running in less than an hour."
        },
        {
            question: "Can I access the system from my mobile device?",
            answer: "Yes! Our platform is fully responsive and works on any device—desktop, tablet, or mobile phone. This allows you to manage your customers on the go, whether you're on the sales floor or away from your shop."
        },
        {
            question: "Is my customer data secure?",
            answer: "Absolutely. We use industry-standard encryption and security practices to protect your data. Our system is compliant with data protection regulations, and we never share your customer information with third parties."
        },
        {
            question: "Can I customize the system for my specific business needs?",
            answer: "Yes, our system is highly customizable. You can create custom fields for customer profiles, set up tailored notification preferences, and configure the dashboard to display the metrics that matter most to your business."
        },
        {
            question: "Do you offer customer support?",
            answer: "We provide comprehensive support including detailed documentation, video tutorials, and a dedicated support team available via email and live chat. We're committed to ensuring your success with our platform."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-white to-orange-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about our customer management system.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
