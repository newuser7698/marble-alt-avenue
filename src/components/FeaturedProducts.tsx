
import { Product } from "./ProductCard";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Carrara White Marble Alternative",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "Marble Alternative",
    isNew: true
  },
  {
    id: "2",
    name: "Classic SPC Marble Effect",
    price: 3.79,
    image: "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "SPC",
    isPopular: true
  },
  {
    id: "3",
    name: "Premium PVC Wall Panel",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "PVC"
  },
  {
    id: "4",
    name: "Calacatta Gold Pattern Roll",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "Rolls"
  },
  {
    id: "5",
    name: "Black Marble Alternative Tile",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "Marble Alternative"
  },
  {
    id: "6",
    name: "Herringbone SPC Flooring",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1592928038511-20202bdad1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "SPC",
    isNew: true
  },
  {
    id: "7",
    name: "Modern Travertine Look PVC",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1600566752355-35d678999f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "PVC"
  },
  {
    id: "8",
    name: "Emperador Dark Roll",
    price: 4.79,
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    category: "Rolls",
    isPopular: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Featured Products</h2>
            <p className="text-marble-600 max-w-2xl">
              Our best-selling marble alternatives chosen for their exceptional quality and timeless design
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
