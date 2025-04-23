
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";

// Mock category data
const categories = {
  "marble-alternative": {
    name: "Marble Alternative",
    description: "Experience the timeless elegance of marble without the maintenance concerns. Our marble alternative products offer the same stunning visual appeal at a fraction of the cost.",
    filters: {
      colors: ["White", "Black", "Beige", "Gray", "Gold-veined"],
      patterns: ["Veined", "Solid", "Speckled"],
      finishes: ["Matte", "Polished", "Honed"]
    }
  },
  "rolls": {
    name: "Rolls",
    description: "Versatile and easy-to-install, our marble-effect rolls are perfect for quick renovations and feature walls. Available in various patterns and widths.",
    filters: {
      widths: ["24 inch", "36 inch", "48 inch"],
      thicknesses: ["0.5mm", "1mm", "1.5mm"],
      backings: ["Adhesive", "Non-adhesive"]
    }
  },
  "spc": {
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring combines the beauty of natural stone with exceptional durability and water resistance, perfect for any room in your home.",
    filters: {
      thicknesses: ["4mm", "5mm", "6mm", "7mm"],
      wearLayers: ["12mil", "20mil", "28mil"],
      edges: ["Beveled", "Micro-beveled", "Square"]
    }
  },
  "pvc": {
    name: "PVC Panels",
    description: "Lightweight and easy to install, our PVC wall panels offer a cost-effective way to achieve a luxury marble look in bathrooms, kitchens, and feature walls.",
    filters: {
      sizes: ["24×24", "24×48", "48×96"],
      thicknesses: ["3mm", "5mm", "8mm"],
      installations: ["Glue-up", "Tongue and groove", "Click-lock"]
    }
  }
};

// Mock product data
const allProducts: Record<string, Product[]> = {
  "marble-alternative": [
    {
      id: "ma1",
      name: "Classic White Marble Alternative",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative",
      isNew: true
    },
    {
      id: "ma2",
      name: "Calacatta Gold Marble Alternative",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative",
      isPopular: true
    },
    {
      id: "ma3",
      name: "Statuario Marble Alternative",
      price: 5.49,
      image: "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative"
    },
    {
      id: "ma4",
      name: "Black Marquina Marble Alternative",
      price: 7.29,
      image: "https://images.unsplash.com/photo-1600566752355-35d678999f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative"
    },
    {
      id: "ma5",
      name: "Emperador Brown Marble Alternative",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative"
    },
    {
      id: "ma6",
      name: "Arabescato Marble Alternative",
      price: 6.49,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Marble Alternative",
      isNew: true
    }
  ],
  "rolls": [
    {
      id: "r1",
      name: "Classic Marble Pattern Roll",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Rolls"
    },
    {
      id: "r2",
      name: "White Carrara Pattern Roll",
      price: 4.29,
      image: "https://images.unsplash.com/photo-1592928038511-20202bdad1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Rolls",
      isPopular: true
    },
    {
      id: "r3",
      name: "Black Marble Effect Roll",
      price: 4.59,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Rolls"
    },
    {
      id: "r4",
      name: "Gold Veined White Roll",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Rolls",
      isNew: true
    }
  ],
  "spc": [
    {
      id: "s1",
      name: "Premium White Marble SPC",
      price: 3.79,
      image: "https://images.unsplash.com/photo-1600566752355-35d678999f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "SPC",
      isPopular: true
    },
    {
      id: "s2",
      name: "Herringbone SPC Tile",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "SPC"
    },
    {
      id: "s3",
      name: "Classic Grey Veined SPC",
      price: 4.29,
      image: "https://images.unsplash.com/photo-1592928038511-20202bdad1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "SPC",
      isNew: true
    },
    {
      id: "s4",
      name: "Waterproof Beige SPC",
      price: 3.89,
      image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "SPC"
    }
  ],
  "pvc": [
    {
      id: "p1",
      name: "Modern White PVC Panel",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "PVC"
    },
    {
      id: "p2",
      name: "Calacatta Gold Pattern PVC",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "PVC",
      isPopular: true
    },
    {
      id: "p3",
      name: "Black Dramatic PVC Panel",
      price: 3.29,
      image: "https://images.unsplash.com/photo-1600566752355-35d678999f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      category: "PVC",
      isNew: true
    }
  ]
};

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10]);
  
  // Default to first category if categoryId is invalid
  const safeCategory = categoryId && categories[categoryId as keyof typeof categories] 
    ? categoryId as keyof typeof categories 
    : "marble-alternative";
  
  const category = categories[safeCategory];
  const products = allProducts[safeCategory] || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container">
          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-medium mb-4">{category.name}</h1>
            <p className="text-marble-700 max-w-4xl">{category.description}</p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-marble-600">{products.length} products</p>
            </div>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Products Grid with Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters - Hidden on mobile unless toggled */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="font-medium text-lg mb-4">Filters</h3>
                
                <Accordion type="single" collapsible className="w-full" defaultValue="price">
                  {/* Price Range */}
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 px-1">
                        <Slider 
                          defaultValue={[0, 10]} 
                          max={10} 
                          step={0.1}
                          value={priceRange}
                          onValueChange={(value) => setPriceRange(value)}
                        />
                        <div className="flex justify-between mt-2">
                          <span>${priceRange[0].toFixed(2)}</span>
                          <span>${priceRange[1].toFixed(2)}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Dynamic Filters based on category */}
                  {Object.entries(category.filters).map(([filterName, values]) => (
                    <AccordionItem key={filterName} value={filterName}>
                      <AccordionTrigger className="text-base font-medium capitalize">{filterName}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 py-2">
                          {values.map((value) => (
                            <div key={value} className="flex items-center space-x-2">
                              <Checkbox id={`${filterName}-${value}`} />
                              <label 
                                htmlFor={`${filterName}-${value}`}
                                className="text-sm text-marble-700 cursor-pointer"
                              >
                                {value}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <Separator className="my-4" />
                
                {/* Apply Filters Button */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="col-span-1 md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Pagination */}
              {products.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="mx-1">Previous</Button>
                  <Button className="mx-1 bg-primary">1</Button>
                  <Button variant="outline" className="mx-1">2</Button>
                  <Button variant="outline" className="mx-1">3</Button>
                  <Button variant="outline" className="mx-1">Next</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryProducts;
