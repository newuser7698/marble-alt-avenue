
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";

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
              <CartList 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                onClearCart={() => setCartItems([])}
              />
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
