import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
        // Reset form or show success message
        alert('Message sent successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Contact Our Team
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're here to help. Reach out to us with any questions or inquiries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-600" />
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Phone</p>
                                    <p className="text-gray-600 text-sm">(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-600" />
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Email</p>
                                    <p className="text-gray-600 text-sm">support@customermanagement.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-orange-600" />
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">Address</p>
                                    <p className="text-gray-600 text-sm">123 Customer St, Business Park, CA 90210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-1 text-sm">
                                    Phone Number
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="(optional) Your Phone Number"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-1 text-sm">
                                    Your Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-orange-600 text-white py-2 text-sm rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}