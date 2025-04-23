
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <Card className="overflow-hidden border-0 shadow-sm h-full bg-white product-hover">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground">New</Badge>
            )}
            {product.isPopular && (
              <Badge className="bg-accent text-accent-foreground">Popular</Badge>
            )}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-1 hover:underline">{product.name}</h3>
        </Link>
        <p className="text-marble-600 text-sm mb-2">{product.category}</p>
        <p className="font-medium text-lg">${product.price.toFixed(2)} / sq ft</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <button className="text-primary hover:underline text-sm">Quick View</button>
        <button className="text-primary hover:underline text-sm">Add to Cart</button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
