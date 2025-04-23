
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock cart items
const initialCartItems = [
  {
    id: "1",
    name: "Carrara White Marble Alternative",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    quantity: 10, // sq ft
  },
  {
    id: "2",
    name: "Classic SPC Marble Effect",
    price: 3.79,
    image: "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    quantity: 25, // sq ft
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <h1 className="text-3xl font-serif font-medium mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-marble-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link to="/categories/marble-alternative">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-secondary">
                    <div className="col-span-6">
                      <span className="font-medium">Product</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Price</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Quantity</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Subtotal</span>
                    </div>
                  </div>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 border-b last:border-b-0">
                      <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                        {/* Product */}
                        <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
                          <div className="w-20 h-20 flex-shrink-0 bg-marble-100 rounded overflow-hidden mr-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-600 flex items-center mt-1"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
                          <span className="md:hidden font-medium text-sm">Price: </span>
                          <span>${item.price.toFixed(2)} / sq ft</span>
                        </div>
                        
                        {/* Quantity */}
                        <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
                          <span className="md:hidden font-medium text-sm">Quantity: </span>
                          <div className="flex items-center justify-center md:justify-center">
                            <button 
                              className="w-8 h-8 border border-marble-300 rounded-l-md flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value > 0) {
                                  updateQuantity(item.id, value);
                                }
                              }}
                              className="w-12 h-8 border-y border-marble-300 text-center text-sm"
                            />
                            <button 
                              className="w-8 h-8 border border-marble-300 rounded-r-md flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-xs text-marble-600">sq ft</span>
                        </div>
                        
                        {/* Subtotal */}
                        <div className="md:col-span-2 md:text-center">
                          <span className="md:hidden font-medium text-sm">Subtotal: </span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                  <Button onClick={() => setCartItems([])}>Clear Cart</Button>
                </div>
              </div>
              
              {/* Order Summary */}
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
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
