
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon, Heart, Share } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProductInfoProps {
  name: string;
  price: number;
  stock: number;
  description: string;
  rating: number;
  reviews: number;
}

const ProductInfo = ({ name, price, stock, description, rating, reviews }: ProductInfoProps) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const incrementQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-medium mb-2">{name}</h1>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="text-marble-600 text-sm">({reviews} {t("product.reviews")})</span>
          <span className="mx-2 text-marble-400">|</span>
          <span className="text-sm">
            {stock > 0 ? (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {t("product.inStock")}
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                {t("product.outOfStock")}
              </Badge>
            )}
          </span>
        </div>
      </div>
      
      <p className="text-2xl font-medium mb-6">${price.toFixed(2)} <span className="text-marble-600 text-sm">/ {t("prices.perSqFt")}</span></p>
      
      <div className="mb-6">
        <p className="text-marble-700">{description}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-8 rtl:mr-0 rtl:ml-8">
            <label htmlFor="quantity" className="block text-sm font-medium text-marble-700 mb-1">
              {t("product.quantity")} ({t("prices.perSqFt")})
            </label>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 rounded-l-md border border-r-0 border-marble-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={decrementQuantity}
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value > 0) {
                    setQuantity(value);
                  }
                }}
                className="w-16 h-10 border-y border-marble-300 text-center"
              />
              <button 
                className="w-10 h-10 rounded-r-md border border-l-0 border-marble-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={incrementQuantity}
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-marble-700 mb-1">
              {t("product.totalPrice")}
            </label>
            <p className="text-xl font-medium">${(price * quantity).toFixed(2)}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 sticky bottom-0 bg-white py-4 z-10 md:relative md:py-0">
          <Button size="lg" className="flex-1 md:flex-none md:min-w-[200px] hover:bg-primary/90 transition-colors">
            {t("product.addToCart")}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`group transition-all ${isWishlisted ? 'bg-pink-50 border-pink-200' : ''}`}
          >
            <Heart 
              className={`h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0 transition-colors ${isWishlisted ? 'text-red-500' : 'text-marble-500 group-hover:text-red-500'}`} 
              fill={isWishlisted ? "currentColor" : "none"}
            />
            {t("product.wishlist")}
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-gray-50 transition-colors">
            <Share className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
