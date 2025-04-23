
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
        {/* Product */}
        <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
          <div className="w-20 h-20 flex-shrink-0 bg-marble-100 rounded overflow-hidden mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <button 
              onClick={() => onRemove(id)}
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
          <span>${price.toFixed(2)} / sq ft</span>
        </div>
        
        {/* Quantity */}
        <div className="md:col-span-2 md:text-center mb-2 md:mb-0">
          <span className="md:hidden font-medium text-sm">Quantity: </span>
          <div className="flex items-center justify-center md:justify-center">
            <button 
              className="w-8 h-8 border border-marble-300 rounded-l-md flex items-center justify-center"
              onClick={() => onUpdateQuantity(id, quantity - 1)}
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value > 0) {
                  onUpdateQuantity(id, value);
                }
              }}
              className="w-12 h-8 border-y border-marble-300 text-center text-sm"
            />
            <button 
              className="w-8 h-8 border border-marble-300 rounded-r-md flex items-center justify-center"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          <span className="text-xs text-marble-600">sq ft</span>
        </div>
        
        {/* Subtotal */}
        <div className="md:col-span-2 md:text-center">
          <span className="md:hidden font-medium text-sm">Subtotal: </span>
          <span className="font-medium">${(price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
