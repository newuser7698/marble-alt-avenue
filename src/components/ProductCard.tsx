import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

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
  
  const formatPrice = (price: number) => {
    if (i18n.language === 'ar') {
      return price.toFixed(2).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) + t('prices.perSqFt');
    }
    return `$${price.toFixed(2)} ${t('prices.perSqFt')}`;
  };

  return (
    <Card className="overflow-hidden border-0 shadow-sm h-full bg-white product-hover">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80";
            }}
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground">
                {i18n.language === 'ar' ? 'جديد' : 'New'}
              </Badge>
            )}
            {product.isPopular && (
              <Badge className="bg-accent text-accent-foreground">
                {i18n.language === 'ar' ? 'الأكثر مبيعاً' : 'Popular'}
              </Badge>
            )}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-1 hover:underline">{product.name}</h3>
        </Link>
        <p className="text-marble-600 text-sm mb-2">{product.category}</p>
        <p className="font-medium text-lg">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <button className="text-primary hover:underline text-sm">
          {t("product.quickView")}
        </button>
        <button className="text-primary hover:underline text-sm">
          {t("product.addToCart")}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
