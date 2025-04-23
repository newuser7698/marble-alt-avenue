
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { toast } = useToast();
  
  const formatPrice = (price: number) => {
    const sarPrice = price * 3.75;
    if (i18n.language === 'ar') {
      const arabicPrice = sarPrice.toFixed(2).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
      return `${t('prices.sar')} ${arabicPrice} ${t('prices.perSqFt')}`;
    }
    return `${t('prices.sar')} ${sarPrice.toFixed(2)} ${t('prices.perSqFt')}`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    ];
    e.currentTarget.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    e.currentTarget.onerror = null;
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    toast({
      title: t('cart.addedToCart'),
      description: product.name,
      duration: 2000,
    });

    // Trigger a custom event to update cart count in header
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };
  
  return (
    <Card className="overflow-hidden border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md h-full bg-white group relative">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <div className={`absolute inset-0 bg-gray-100 animate-pulse ${isImageLoading ? 'block' : 'hidden'}`} />
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onError={handleImageError}
            onLoad={() => setIsImageLoading(false)}
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground animate-fade-in">
                {t('product.new')}
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="bg-accent text-accent-foreground animate-fade-in">
                {t('product.popular')}
              </Badge>
            )}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        <p className="text-marble-600 text-sm mb-2">{product.category}</p>
        <p className="font-medium text-lg">{formatPrice(product.price)}</p>
        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0 items-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="flex items-center text-primary hover:underline text-sm transition-colors group-hover:text-primary/80">
              <Eye className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
              {t("product.quickView")}
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 p-0">
            <div className="p-4">
              <h4 className="font-medium mb-2">{product.name}</h4>
              <p className="text-sm text-marble-600 mb-3">{t("product.quickPreview")}</p>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded-md mb-2"
                onError={handleImageError}
              />
              <p className="font-medium">{formatPrice(product.price)}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="flex items-center gap-2">
          <button 
            className={`flex items-center transition-colors ${isFavorite ? 'text-red-500' : 'text-marble-400'} hover:text-red-500`}
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label={t("product.addToFavorites")}
          >
            <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleAddToCart}
            className="hover:bg-primary/10"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
