
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Eye, Heart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const formatPrice = (price: number) => {
    // Convert price to SAR (assuming the prices are stored in USD)
    const sarPrice = price * 3.75; // 1 USD ≈ 3.75 SAR
    
    if (i18n.language === 'ar') {
      // Format for Arabic
      const arabicPrice = sarPrice.toFixed(2).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
      return `${t('prices.sar')} ${arabicPrice} ${t('prices.perSqFt')}`;
    }
    // Format for English
    return `${t('prices.sar')} ${sarPrice.toFixed(2)} ${t('prices.perSqFt')}`;
  };

  // Enhanced image error handling with better fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    ];
    e.currentTarget.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    e.currentTarget.onerror = null; // Prevent infinite error loop
  };
  
  return (
    <Card className="overflow-hidden border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md h-full bg-white group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground">
                {t('product.new')}
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="bg-accent text-accent-foreground">
                {t('product.popular')}
              </Badge>
            )}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-marble-600 text-sm mb-2">{product.category}</p>
        <p className="font-medium text-lg">{formatPrice(product.price)}</p>
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
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
