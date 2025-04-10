import { useState } from "react";
import { ChevronLeft, Check, CreditCard, Clock, Smartphone, Shield, Headphones, Users, Database, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Import QR Code library (ensure this is installed via npm)
// npm install qrcode.react
import { QRCodeSVG } from 'qrcode.react';

const PremiumPage = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState<"select" | "payment">("select");
    const [activeTab, setActiveTab] = useState("plans");

    // Just like in your payment.html
    const upiID = "6306987501@jupiteraxis";

    const plans = [
        {
            id: "basic",
            name: "Basic",
            price: billingCycle === "monthly" ? 0 : 0,
            description: "Essential tools for small businesses",
            features: [
                { name: "10 Users", icon: <Users size={16} /> },
                { name: "10GB Bandwidth", icon: <Database size={16} /> },
                { name: "Custom Domain", icon: <Globe size={16} /> },
                { name: "24/7 Support", icon: <Headphones size={16} /> },
                { name: "Basic Analytics", icon: <Zap size={16} /> },
                { name: "Email Support", icon: <Shield size={16} /> }
            ],
            highlighted: false
        },
        {
            id: "standard",
            name: "Standard",
            price: billingCycle === "monthly" ? 100 : 1000,
            description: "Everything you need to grow your business",
            features: [
                { name: "100 Users", icon: <Users size={16} /> },
                { name: "50GB Bandwidth", icon: <Database size={16} /> },
                { name: "Custom Domain", icon: <Globe size={16} /> },
                { name: "Priority Support", icon: <Headphones size={16} /> },
                { name: "Advanced Analytics", icon: <Zap size={16} /> },
                { name: "Phone Support", icon: <Shield size={16} /> },
                { name: "API Access", icon: <CreditCard size={16} /> },
                { name: "Multiple Admin", icon: <Users size={16} /> }
            ],
            highlighted: true
        },
        {
            id: "premium",
            name: "Premium",
            price: billingCycle === "monthly" ? 500 : 5000,
            description: "Professional tools for expanding businesses",
            features: [
                { name: "Unlimited Users", icon: <Users size={16} /> },
                { name: "Unlimited Bandwidth", icon: <Database size={16} /> },
                { name: "Custom Domain", icon: <Globe size={16} /> },
                { name: "Dedicated Support", icon: <Headphones size={16} /> },
                { name: "Enterprise Analytics", icon: <Zap size={16} /> },
                { name: "24/7 Phone Support", icon: <Shield size={16} /> },
                { name: "Advanced API Access", icon: <CreditCard size={16} /> },
                { name: "Team Management", icon: <Users size={16} /> },
                { name: "SLA Guarantee", icon: <Clock size={16} /> },
                { name: "Custom Integration", icon: <Smartphone size={16} /> }
            ],
            highlighted: false
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechStart Solutions",
            text: "The premium plan has transformed how we manage our inventory. The unlimited bandwidth and dedicated support have been game-changers for our growing team.",
            plan: "Premium",
            avatar: "S"
        },
        {
            name: "Michael Chen",
            company: "Global Retail Inc.",
            text: "We started with the basic plan and upgraded to standard as we grew. The transition was seamless and the additional features were exactly what we needed.",
            plan: "Standard",
            avatar: "M"
        },
        {
            name: "Priya Sharma",
            company: "Innovate Digital",
            text: "The customer support team is incredible. Any time we've had an issue, they've resolved it within hours. Worth every rupee of our premium subscription.",
            plan: "Premium",
            avatar: "P"
        }
    ];

    const faqs = [
        {
            question: "Can I change plans later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major UPI payment methods including Google Pay, PhonePe, Paytm, and bank UPI apps."
        },
        {
            question: "Is there a trial period?",
            answer: "Yes, all paid plans come with a 14-day free trial. No payment required during the trial period."
        },
        {
            question: "How do I cancel my subscription?",
            answer: "You can cancel your subscription anytime from your account settings. You'll continue to have access until the end of your current billing period."
        },
        {
            question: "What happens to my data if I downgrade?",
            answer: "Your data remains intact when downgrading, but you may lose access to certain features. We recommend exporting any plan-specific data before downgrading."
        }
    ];

    const selectPlan = (planId: string) => {
        setSelectedPlan(planId);
        setPaymentDialogOpen(true);
    };

    const closePaymentDialog = () => {
        setPaymentDialogOpen(false);
    };

    const confirmSelection = () => {
        setCurrentStep("payment");
    };

    const goBack = () => {
        if (currentStep === "payment") {
            setCurrentStep("select");
        } else {
            setPaymentDialogOpen(false);
        }
    };

    // Generate UPI Payment URL for QR code
    const getUpiUrl = () => {
        if (!selectedPlan) return "";

        const plan = plans.find(p => p.id === selectedPlan);
        if (!plan) return "";

        const amount = plan.price.toString();
        return `upi://pay?pa=${upiID}&pn=ShopCRM&am=${amount}&cu=INR&tn=Payment%20for%20${plan.name}%20Plan`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back button */}
                <Button
                    variant="ghost"
                    className="mb-6 text-gray-600 hover:text-orange-600"
                    onClick={() => window.history.back()}
                >
                    <ChevronLeft size={16} className="mr-2" />
                    Back to Dashboard
                </Button>

                {/* Hero Section */}
                <div className="text-center mb-10 bg-gradient-to-r from-orange-50 to-orange-100 p-10 rounded-2xl border border-orange-200">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Upgrade Your Business Experience</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        Choose the perfect plan to scale your business operations, enhance productivity, and drive growth. All plans include our core features with enhanced capabilities as you move up.
                    </p>
                    <div className="flex items-center justify-center">
                        <Badge className="bg-orange-600 text-white">Limited Time Offer</Badge>
                        <span className="mx-2 text-gray-700">Get 2 months free with annual billing</span>
                    </div>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="plans" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                        <TabsTrigger value="plans">Plans</TabsTrigger>
                        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>

                    {/* Plans Tab Content */}
                    <TabsContent value="plans" className="space-y-8">
                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center mb-8">
                            <Label htmlFor="billing-toggle" className={`mr-3 ${billingCycle === "monthly" ? "font-medium" : "text-gray-500"}`}>
                                Monthly
                            </Label>
                            <Switch
                                id="billing-toggle"
                                checked={billingCycle === "yearly"}
                                onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
                            />
                            <Label htmlFor="billing-toggle" className={`ml-3 ${billingCycle === "yearly" ? "font-medium" : "text-gray-500"}`}>
                                Yearly
                                <Badge className="ml-2 bg-orange-100 text-orange-600 hover:bg-orange-100">Save 16%</Badge>
                            </Label>
                        </div>

                        {/* Plans Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {plans.map((plan) => (
                                <Card key={plan.id} className={`${plan.highlighted ? "border-orange-400 shadow-lg" : "border-gray-200"} transition-all hover:shadow-md`}>
                                    {plan.highlighted && (
                                        <div className="bg-orange-600 text-white text-center py-1 text-sm font-medium">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center">
                                            <span>{plan.name}</span>
                                            {plan.price === 0 ? (
                                                <Badge className="bg-gray-200 text-gray-800">Free</Badge>
                                            ) : (
                                                <Badge className="bg-orange-100 text-orange-800">
                                                    {plan.price}rs/{billingCycle === "monthly" ? "mo" : "yr"}
                                                </Badge>
                                            )}
                                        </CardTitle>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm">
                                                    <span className="mr-2 text-green-600">
                                                        {feature.icon}
                                                    </span>
                                                    {feature.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button 
                                            className={`w-full ${plan.id === 'basic' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-orange-600 hover:bg-orange-700 text-white'}`}
                                            onClick={() => selectPlan(plan.id)}
                                        >
                                            {plan.id === 'basic' ? 'Start Free' : 'Select Plan'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {/* Feature Comparison Table */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-center mb-8">Detailed Feature Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border p-4 text-left">Feature</th>
                                            <th className="border p-4 text-center">Basic</th>
                                            <th className="border p-4 text-center bg-orange-50">Standard</th>
                                            <th className="border p-4 text-center">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border p-4 font-medium">Users</td>
                                            <td className="border p-4 text-center">10</td>
                                            <td className="border p-4 text-center bg-orange-50">100</td>
                                            <td className="border p-4 text-center">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4 font-medium">Bandwidth</td>
                                            <td className="border p-4 text-center">10GB</td>
                                            <td className="border p-4 text-center bg-orange-50">50GB</td>
                                            <td className="border p-4 text-center">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4 font-medium">Custom Domain</td>
                                            <td className="border p-4 text-center"><Check size={16} className="mx-auto text-green-600" /></td>
                                            <td className="border p-4 text-center bg-orange-50"><Check size={16} className="mx-auto text-green-600" /></td>
                                            <td className="border p-4 text-center"><Check size={16} className="mx-auto text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4 font-medium">API Access</td>
                                            <td className="border p-4 text-center">-</td>
                                            <td className="border p-4 text-center bg-orange-50"><Check size={16} className="mx-auto text-green-600" /></td>
                                            <td className="border p-4 text-center"><Check size={16} className="mx-auto text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4 font-medium">SLA Guarantee</td>
                                            <td className="border p-4 text-center">-</td>
                                            <td className="border p-4 text-center bg-orange-50">-</td>
                                            <td className="border p-4 text-center"><Check size={16} className="mx-auto text-green-600" /></td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4 font-medium">Support Level</td>
                                            <td className="border p-4 text-center">Basic</td>
                                            <td className="border p-4 text-center bg-orange-50">Priority</td>
                                            <td className="border p-4 text-center">Dedicated</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Why Upgrade Section */}
                        <div className="my-16 bg-white p-8 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold text-center mb-8">Why Upgrade Your Plan?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap size={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Increased Productivity</h3>
                                    <p className="text-gray-600">Access advanced features designed to streamline your workflow and boost efficiency.</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users size={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Team Collaboration</h3>
                                    <p className="text-gray-600">Enable your entire team to work together seamlessly with expanded user limits.</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield size={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold mb-2">Premium Support</h3>
                                    <p className="text-gray-600">Get priority access to our support team and resolve issues faster.</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Testimonials Tab Content */}
                    <TabsContent value="testimonials">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {testimonials.map((testimonial, index) => (
                                    <Card key={index} className="border-gray-200">
                                        <CardHeader>
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-medium mr-3">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                                    <CardDescription>{testimonial.company}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700">{testimonial.text}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Badge className={testimonial.plan === "Premium" ? "bg-orange-600" : "bg-orange-200 text-orange-800"}>
                                                {testimonial.plan} Plan
                                            </Badge>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            {/* Success Stories */}
                            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
                                <h2 className="text-xl font-bold mb-6">Success Stories</h2>
                                <div className="border-l-4 border-orange-400 pl-6 mb-8">
                                    <h3 className="font-bold mb-2">TechStart Solutions</h3>
                                    <p className="text-gray-700 mb-3">
                                        "After upgrading to the Premium plan, we saw a 45% increase in customer engagement and reduced response times by 60%."
                                    </p>
                                    <p className="text-sm text-gray-500">- Case study available upon request</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-6">
                                    <h3 className="font-bold mb-2">Global Retail Inc.</h3>
                                    <p className="text-gray-700 mb-3">
                                        "The Standard plan's advanced analytics helped us identify key growth opportunities, resulting in a 28% increase in quarterly revenue."
                                    </p>
                                    <p className="text-sm text-gray-500">- Featured in our annual report</p>
                                </div>
                            </div>

                            {/* Customer Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                                <div className="bg-orange-50 p-6 rounded-lg text-center">
                                    <h3 className="text-3xl font-bold text-orange-600 mb-2">94%</h3>
                                    <p className="text-gray-700">Customer satisfaction rate</p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg text-center">
                                    <h3 className="text-3xl font-bold text-orange-600 mb-2">1500+</h3>
                                    <p className="text-gray-700">Active premium users</p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg text-center">
                                    <h3 className="text-3xl font-bold text-orange-600 mb-2">30%</h3>
                                    <p className="text-gray-700">Average productivity boost</p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg text-center">
                                    <h3 className="text-3xl font-bold text-orange-600 mb-2">3.5x</h3>
                                    <p className="text-gray-700">ROI for premium users</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* FAQ Tab Content */}
                    <TabsContent value="faq">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            {/* Contact Section */}
                            <div className="mt-12 bg-orange-50 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                                <p className="text-gray-700 mb-4">Our support team is ready to help you find the perfect plan for your needs.</p>
                                <Button className="bg-orange-600 hover:bg-orange-700">Contact Support</Button>
                            </div>

                            {/* Security Notice */}
                            <div className="mt-8 border border-gray-200 p-4 rounded-lg flex items-start">
                                <Shield size={20} className="text-green-600 mr-3 mt-1" />
                                <div>
                                    <h4 className="font-medium">Secure Payments</h4>
                                    <p className="text-sm text-gray-600">All transactions are processed securely through UPI and your data is encrypted.</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                
                {/* Payment Dialog */}
                <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            {currentStep === "select" ? (
                                <>
                                    <DialogTitle>Confirm Plan Selection</DialogTitle>
                                    <DialogDescription>
                                        {selectedPlan && (
                                            <div className="mt-2">
                                                You selected the <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.name}</span> plan
                                                <div className="text-lg font-bold mt-1">
                                                    {plans.find(p => p.id === selectedPlan)?.price}rs/{billingCycle === "monthly" ? "month" : "year"}
                                                </div>
                                            </div>
                                        )}
                                    </DialogDescription>
                                </>
                            ) : (
                                <>
                                    <DialogTitle>Scan QR Code to Pay</DialogTitle>
                                    <DialogDescription>
                                        Use any UPI app to scan and complete your payment
                                    </DialogDescription>
                                </>
                            )}
                        </DialogHeader>

                        {currentStep === "payment" && (
                            <div className="flex flex-col items-center justify-center py-4">
                                <div className="bg-white p-4 rounded-lg shadow-inner">
                                    <QRCodeSVG value={getUpiUrl()} size={200} />
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    Payment for {plans.find(p => p.id === selectedPlan)?.name} Plan
                                </p>
                            </div>
                        )}

                        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
                            <Button type="button" variant="outline" onClick={goBack}>
                                {currentStep === "select" ? "Cancel" : "Back"}
                            </Button>

                            {currentStep === "select" ? (
                                <Button type="button" className="bg-orange-600 hover:bg-orange-700 text-white" onClick={confirmSelection}>
                                    Proceed to Payment
                                </Button>
                            ) : (
                                <div className="flex gap-2">
                                    <Button type="button" variant="outline" className="text-green-600" onClick={closePaymentDialog}>
                                        I've Completed Payment
                                    </Button>
                                </div>
                            )}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-gray-500">© 2025 ShopCRM. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Home Button */}
            <Button
                className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                onClick={() => window.location.href = '/'}
            >
                ← Back to Home
            </Button>
        </div>
    );
};

export default PremiumPage;