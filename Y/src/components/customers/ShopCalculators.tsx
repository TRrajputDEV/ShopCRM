// src/components/customers/ShopCalculators.tsx
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, ShoppingBag, Receipt } from 'lucide-react';

const ProfitCalculator: React.FC = () => {
    const [sellingPrice, setSellingPrice] = useState<number>(0);
    const [costPrice, setCostPrice] = useState<number>(0);
    const [profit, setProfit] = useState<number | null>(null);
    const [margin, setMargin] = useState<number | null>(null);

    const calculateProfit = () => {
        const calculatedProfit = sellingPrice - costPrice;
        const calculatedMargin = (calculatedProfit / sellingPrice) * 100;
        
        setProfit(calculatedProfit);
        setMargin(calculatedMargin);
    };

    return (
        <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-orange-800 text-sm">
                    Calculate your profit and profit margin by entering the selling price and cost price.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="sellingPrice">Selling Price ($)</Label>
                    <Input
                        id="sellingPrice"
                        type="number"
                        min="0"
                        step="0.01"
                        value={sellingPrice || ''}
                        onChange={(e) => setSellingPrice(parseFloat(e.target.value) || 0)}
                    />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="costPrice">Cost Price ($)</Label>
                    <Input
                        id="costPrice"
                        type="number"
                        min="0"
                        step="0.01"
                        value={costPrice || ''}
                        onChange={(e) => setCostPrice(parseFloat(e.target.value) || 0)}
                    />
                </div>
            </div>
            
            <div className="flex justify-center">
                <Button 
                    onClick={calculateProfit}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Profit
                </Button>
            </div>
            
            {profit !== null && (
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-500 text-sm">Profit</p>
                            <p className="text-2xl font-bold text-gray-900">${profit.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Profit Margin</p>
                            <p className="text-2xl font-bold text-gray-900">{margin?.toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const InventoryCalculator: React.FC = () => {
    const [unitCost, setUnitCost] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [holdingCost, setHoldingCost] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number | null>(null);
    const [annualHoldingCost, setAnnualHoldingCost] = useState<number | null>(null);

    const calculate = () => {
        const calculated = unitCost * quantity;
        const calculatedHolding = (calculated * (holdingCost / 100));
        
        setTotalValue(calculated);
        setAnnualHoldingCost(calculatedHolding);
    };

    return (
        <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-orange-800 text-sm">
                    Calculate your inventory value and estimated annual holding cost.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="unitCost">Unit Cost ($)</Label>
                    <Input
                        id="unitCost"
                        type="number"
                        min="0"
                        step="0.01"
                        value={unitCost || ''}
                        onChange={(e) => setUnitCost(parseFloat(e.target.value) || 0)}
                    />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                        id="quantity"
                        type="number"
                        min="0"
                        step="1"
                        value={quantity || ''}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="holdingCost">Annual Holding Cost (%)</Label>
                    <Input
                        id="holdingCost"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={holdingCost || ''}
                        onChange={(e) => setHoldingCost(parseFloat(e.target.value) || 0)}
                    />
                </div>
            </div>
            
            <div className="flex justify-center">
                <Button 
                    onClick={calculate}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Calculate Inventory
                </Button>
            </div>
            
            {totalValue !== null && (
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-500 text-sm">Total Inventory Value</p>
                            <p className="text-2xl font-bold text-gray-900">${totalValue.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Annual Holding Cost</p>
                            <p className="text-2xl font-bold text-gray-900">${annualHoldingCost?.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const SalesTaxCalculator: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [taxRate, setTaxRate] = useState<number>(0);
    const [includeTax, setIncludeTax] = useState<boolean>(false);
    const [result, setResult] = useState<{amount: number, tax: number, total: number} | null>(null);

    const calculate = () => {
        let calculatedAmount: number;
        let calculatedTax: number;
        let calculatedTotal: number;
        
        if (includeTax) {
            // If tax is included in amount, we need to work backwards
            calculatedTotal = amount;
            calculatedAmount = amount / (1 + (taxRate / 100));
            calculatedTax = calculatedTotal - calculatedAmount;
        } else {
            // If tax is not included in amount
            calculatedAmount = amount;
            calculatedTax = amount * (taxRate / 100);
            calculatedTotal = calculatedAmount + calculatedTax;
        }
        
        setResult({
            amount: calculatedAmount,
            tax: calculatedTax,
            total: calculatedTotal
        });
    };

    return (
        <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-orange-800 text-sm">
                    Calculate sales tax for transactions. Toggle whether the entered amount includes tax or not.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input
                        id="amount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount || ''}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                        id="taxRate"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={taxRate || ''}
                        onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                    />
                </div>
            </div>
            
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="includeTax"
                    checked={includeTax}
                    onChange={(e) => setIncludeTax(e.target.checked)}
                    className="rounded text-orange-600 focus:ring-orange-500"
                />
                <Label htmlFor="includeTax">Amount includes tax</Label>
            </div>
            
            <div className="flex justify-center">
                <Button 
                    onClick={calculate}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                    <Receipt className="mr-2 h-4 w-4" />
                    Calculate Tax
                </Button>
            </div>
            
            {result && (
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-gray-500 text-sm">Amount (Before Tax)</p>
                            <p className="text-2xl font-bold text-gray-900">${result.amount.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Tax Amount</p>
                            <p className="text-2xl font-bold text-gray-900">${result.tax.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total (With Tax)</p>
                            <p className="text-2xl font-bold text-gray-900">${result.total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ShopCalculators: React.FC = () => {
    return (
        <div>
            <Tabs defaultValue="profit">
                <TabsList className="mb-4">
                    <TabsTrigger value="profit">Profit</TabsTrigger>
                    <TabsTrigger value="inventory">Inventory</TabsTrigger>
                    <TabsTrigger value="tax">Sales Tax</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profit">
                    <ProfitCalculator />
                </TabsContent>
                
                <TabsContent value="inventory">
                    <InventoryCalculator />
                </TabsContent>
                
                <TabsContent value="tax">
                    <SalesTaxCalculator />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ShopCalculators;