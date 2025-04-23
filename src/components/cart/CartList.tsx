
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartListProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onClearCart: () => void;
}

const CartList = ({ items, onUpdateQuantity, onRemove, onClearCart }: CartListProps) => {
  return (
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
        
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
        <Button onClick={onClearCart}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default CartList;
