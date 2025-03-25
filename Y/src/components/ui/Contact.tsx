import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '65b8721c-14ec-42b1-b106-04943eb4853f',
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden">
                {/* Left Side - Contact Form */}
                <div className="p-10 bg-white flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                        <hr className="border-t-2 border-orange-500 w-16" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                            />
                        </div>
                        <div>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                            />
                        </div>
                        <div>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                            ></textarea>
                        </div>
                        
                        {submitSuccess && (
                            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center">
                                Message sent successfully!
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </form>
                </div>

                {/* Right Side - Contact Illustration */}
                <div className="hidden md:flex items-center justify-center bg-orange-50 p-8">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 400 300" 
                        className="w-full max-h-[500px] text-orange-600"
                    >
                        {/* Background */}
                        <rect width="400" height="300" fill="none" />

                        {/* Message Envelope */}
                        <path 
                            d="M100 100 L200 180 L300 100 Z" 
                            fill="#f97316" 
                            fillOpacity="0.3" 
                        />
                        <path 
                            d="M100 100 L200 180 L300 100" 
                            fill="none" 
                            stroke="#f97316" 
                            strokeWidth="3" 
                        />

                        {/* Envelope Body */}
                        <rect 
                            x="50" 
                            y="100" 
                            width="300" 
                            height="150" 
                            rx="10" 
                            ry="10" 
                            fill="#fff" 
                            stroke="#f97316" 
                            strokeWidth="3" 
                        />

                        {/* Communication Icons */}
                        <circle 
                            cx="100" 
                            cy="200" 
                            r="20" 
                            fill="#f97316" 
                            fillOpacity="0.2" 
                        />
                        <path 
                            d="M90 200 L110 180 L110 220 Z" 
                            fill="#f97316" 
                        />

                        <circle 
                            cx="300" 
                            cy="200" 
                            r="20" 
                            fill="#f97316" 
                            fillOpacity="0.2" 
                        />
                        <path 
                            d="M290 200 L310 180 L310 220 Z" 
                            fill="#f97316" 
                        />

                        {/* Connection Lines */}
                        <path 
                            d="M120 200 L280 200" 
                            stroke="#f97316" 
                            strokeWidth="2" 
                            strokeDasharray="5,5" 
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}