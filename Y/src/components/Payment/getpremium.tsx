import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

// Import QR Code library (ensure this is installed via npm)
// npm install qrcode.react
import { QRCodeSVG } from 'qrcode.react';

const PremiumPage = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState<"select" | "payment">("select");

    // Just like in your payment.html
    const upiID = "6306987501@jupiteraxis";

    const plans = [
        {
            id: "basic",
            name: "Basic",
            price: billingCycle === "monthly" ? 0 : 0,
            description: "Essential tools for small businesses",
            features: [
                "10 Users",
                "10GB Bandwidth",
                "Custom Domain",
                "24/7 Support"
            ],
            highlighted: false
        },
        {
            id: "standard",
            name: "Standard",
            price: billingCycle === "monthly" ? 100 : 1000,
            description: "Everything you need to grow your business",
            features: [
                "100 Users",
                "50GB Bandwidth",
                "Custom Domain",
                "Priority Support"
            ],
            highlighted: true
        },
        {
            id: "premium",
            name: "Premium",
            price: billingCycle === "monthly" ? 500 : 5000,
            description: "Professional tools for expanding businesses",
            features: [
                "Unlimited Users",
                "Unlimited Bandwidth",
                "Custom Domain",
                "Dedicated Support"
            ],
            highlighted: false
        }
    ];

    const expandAndSelect = (planId: string) => {
        if (!isExpanded) {
            setIsExpanded(true);
        }
        setSelectedPlan(planId);
    };

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
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back button */}
                <Button
                    variant="ghost"
                    className="mb-6 text-gray-600 hover:text-orange-600"
                    onClick={() => window.history.back()}
                >
                    <ChevronLeft size={16} className="mr-2" />
                    Back to Dashboard
                </Button>

                {/* Page Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select the plan that works best for your business needs. All plans include core features.
                    </p>
                </div>

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

                {/* Plan Bundle - Similar to your index.html structure */}
                <div className={`mx-auto ${isExpanded ? 'flex gap-6 w-full max-w-4xl' : 'relative w-80 h-60'}`}>
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`
                bg-white rounded-lg p-5 shadow-lg
                ${!isExpanded ? 'absolute top-0 left-0 w-full cursor-pointer' : 'flex-1'}
                ${!isExpanded && index === 0 ? 'z-3 transform rotate-[-2deg]' : ''}
                ${!isExpanded && index === 1 ? 'z-2 transform translate-y-[20px] translate-x-[20px] rotate-[2deg]' : ''}
                ${!isExpanded && index === 2 ? 'z-1 transform translate-y-[40px] translate-x-[40px] rotate-[-1deg]' : ''}
                ${selectedPlan === plan.id ? 'ring-2 ring-orange-600' : ''}
                transition-all duration-500
              `}
                            onClick={() => expandAndSelect(plan.id)}
                        >
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            {plan.features.map((feature, i) => (
                                <p key={i} className="text-gray-700 text-sm my-1">{feature}</p>
                            ))}
                            <Button
                                className={`w-full mt-4 ${plan.id === 'basic' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-orange-600 hover:bg-orange-700 text-white'}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    selectPlan(plan.id);
                                }}
                            >
                                {plan.price === 0 ? 'Free' : `${plan.price}rs /${billingCycle === "monthly" ? "month" : "year"}`}
                            </Button>
                        </div>
                    ))}
                </div>

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

                {/* Back to Home Button (from your HTML) */}
                <Button
                    className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    onClick={() => window.location.href = '/'}
                >
                    ← Back to Home
                </Button>
            </div>
        </div>
    );
};

export default PremiumPage;