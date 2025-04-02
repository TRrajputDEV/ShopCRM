// src/components/landing/TestimonialsSection.tsx


export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            business: "Fresh Finds Market",
            image: "/api/placeholder/80/80",
            quote: "This system has transformed how I manage my grocery store. I can now track customer preferences and send targeted promotions that actually work!"
        },
        {
            name: "Michael Chen",
            business: "Tech Haven",
            image: "/api/placeholder/80/80",
            quote: "The balance tracking feature has helped me reduce overdue accounts by 45%. My cash flow has never been better, and my customers appreciate the professional approach."
        },
        {
            name: "Elena Rodriguez",
            business: "Bloom Boutique",
            image: "/api/placeholder/80/80",
            quote: "Since implementing this CRM, our repeat business has increased by 30%. The customer insights help us stock exactly what our clients want."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Shop Owners Are Saying</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from fellow business owners who have transformed their customer management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-orange-50 rounded-xl p-8 shadow-md">
                            <div className="flex items-center mb-6">
                                <div className="mr-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.business}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
