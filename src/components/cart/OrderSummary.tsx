
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary = ({ subtotal, shipping, tax, total }: OrderSummaryProps) => {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-medium mb-4">Order Summary</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-marble-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-marble-600">Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-marble-600">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex justify-between font-medium text-lg mb-6">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        {/* Promo Code */}
        <div className="mb-6">
          <label htmlFor="promo" className="text-sm font-medium block mb-2">
            Promo Code
          </label>
          <div className="flex">
            <Input 
              id="promo" 
              value={promoCode} 
              onChange={(e) => setPromoCode(e.target.value)}
              className="rounded-r-none"
            />
            <Button variant="secondary" className="rounded-l-none">
              Apply
            </Button>
          </div>
        </div>
        
        <Button className="w-full" asChild>
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-marble-600">
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
