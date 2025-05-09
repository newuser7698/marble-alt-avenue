import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
import { useTranslation } from "react-i18next";

// Better quality product images
const productImages = {
  "marble-alternative": [
    "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1594831131030-92aaa5ca4a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1618219877887-6aad10cc315d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1591159555913-6c43ebd6e353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1598547011114-46370daebd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ],
  "rolls": [
    "https://images.unsplash.com/photo-1620641618154-ad578321bd72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1615704828103-bdc14d775fea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1621313005099-cf4fe4c0c058?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ],
  "spc": [
    "https://images.unsplash.com/photo-1600566752022-ae82c41994d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1600607687101-98c4af19e9df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ],
  "pvc": [
    "https://images.unsplash.com/photo-1594042945033-c01d275ea67a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1616627981347-2296d3ea8ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ]
};

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

// Update the mock product data to use better images
const allProducts: Record<string, Product[]> = {
  "marble-alternative": [
    {
      id: "ma1",
      name: "Classic White Marble Alternative",
      price: 130, // Price in SAR
      image: productImages["marble-alternative"][0],
      category: "Marble Alternative",
      isNew: true
    },
    {
      id: "ma2",
      name: "Calacatta Gold Marble Alternative",
      price: 180, 
      image: productImages["marble-alternative"][1],
      category: "Marble Alternative",
      isPopular: true
    },
    {
      id: "ma3",
      name: "Statuario Marble Alternative",
      price: 150,
      image: productImages["marble-alternative"][2],
      category: "Marble Alternative"
    },
    {
      id: "ma4",
      name: "Black Marquina Marble Alternative",
      price: 190,
      image: productImages["marble-alternative"][3],
      category: "Marble Alternative"
    },
    {
      id: "ma5",
      name: "Emperador Brown Marble Alternative",
      price: 160,
      image: productImages["marble-alternative"][4],
      category: "Marble Alternative"
    },
    {
      id: "ma6",
      name: "Arabescato Marble Alternative",
      price: 170,
      image: productImages["marble-alternative"][5],
      category: "Marble Alternative",
      isNew: true
    }
  ],
  "rolls": [
    {
      id: "r1",
      name: "Classic Marble Pattern Roll",
      price: 110,
      image: productImages["rolls"][0],
      category: "Rolls"
    },
    {
      id: "r2",
      name: "White Carrara Pattern Roll",
      price: 120,
      image: productImages["rolls"][1],
      category: "Rolls",
      isPopular: true
    },
    {
      id: "r3",
      name: "Black Marble Effect Roll",
      price: 130,
      image: productImages["rolls"][2],
      category: "Rolls"
    },
    {
      id: "r4",
      name: "Gold Veined White Roll",
      price: 150,
      image: productImages["rolls"][3],
      category: "Rolls",
      isNew: true
    }
  ],
  "spc": [
    {
      id: "s1",
      name: "Premium White Marble SPC",
      price: 100,
      image: productImages["spc"][0],
      category: "SPC",
      isPopular: true
    },
    {
      id: "s2",
      name: "Herringbone SPC Tile",
      price: 110,
      image: productImages["spc"][1],
      category: "SPC"
    },
    {
      id: "s3",
      name: "Classic Grey Veined SPC",
      price: 120,
      image: productImages["spc"][2],
      category: "SPC",
      isNew: true
    },
    {
      id: "s4",
      name: "Waterproof Beige SPC",
      price: 115,
      image: productImages["spc"][3],
      category: "SPC"
    }
  ],
  "pvc": [
    {
      id: "p1",
      name: "Modern White PVC Panel",
      price: 80,
      image: productImages["pvc"][0],
      category: "PVC"
    },
    {
      id: "p2",
      name: "Calacatta Gold Pattern PVC",
      price: 90,
      image: productImages["pvc"][1],
      category: "PVC",
      isPopular: true
    },
    {
      id: "p3",
      name: "Black Dramatic PVC Panel",
      price: 85,
      image: productImages["pvc"][2],
      category: "PVC",
      isNew: true
    }
  ]
};

// Interface to track filter states
interface FilterState {
  [key: string]: {
    [value: string]: boolean;
  };
}

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]); // Updated price range for SAR
  const [filterState, setFilterState] = useState<FilterState>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { t, i18n } = useTranslation();
  
  // Default to first category if categoryId is invalid
  const safeCategory = categoryId && categories[categoryId as keyof typeof categories] 
    ? categoryId as keyof typeof categories 
    : "marble-alternative";
  
  const category = categories[safeCategory];
  const products = allProducts[safeCategory] || [];

  // Initialize filter state
  useEffect(() => {
    const initialFilterState: FilterState = {};
    
    // Initialize all filter options as unchecked
    Object.entries(category.filters).forEach(([filterType, values]) => {
      initialFilterState[filterType] = {};
      (values as string[]).forEach(value => {
        initialFilterState[filterType][value] = false;
      });
    });
    
    setFilterState(initialFilterState);
    
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [safeCategory]);

  // Apply filters whenever filter state or price range changes
  useEffect(() => {
    filterProducts();
  }, [filterState, priceRange, safeCategory]);

  // Filter products based on selected filters and price range
  const filterProducts = () => {
    // Start with all products in the category
    let result = [...products];
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && 
      product.price <= priceRange[1]
    );
    
    // Check if any filters are active
    const hasActiveFilters = Object.values(filterState).some(
      filterGroup => Object.values(filterGroup).some(isSelected => isSelected)
    );
    
    // If filters are active, apply them
    if (hasActiveFilters) {
      Object.entries(filterState).forEach(([filterType, values]) => {
        const activeValues = Object.entries(values)
          .filter(([_, isSelected]) => isSelected)
          .map(([value]) => value);
        
        // If there are active values for this filter type, filter the products
        if (activeValues.length > 0) {
          // For simplicity in this mock, we'll filter using the product name
          // In a real app, products would have proper attributes for filtering
          result = result.filter(product => {
            return activeValues.some(value => 
              product.name.toLowerCase().includes(value.toLowerCase())
            );
          });
        }
      });
    }
    
    setFilteredProducts(result);
  };

  // Toggle a filter option
  const toggleFilter = (filterType: string, value: string) => {
    setFilterState(prev => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        [value]: !prev[filterType][value]
      }
    }));
  };

  // Apply filters button handler
  const applyFilters = () => {
    filterProducts();
    // On mobile, hide the filters panel after applying
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    const resetState: FilterState = {};
    
    Object.entries(category.filters).forEach(([filterType, values]) => {
      resetState[filterType] = {};
      (values as string[]).forEach(value => {
        resetState[filterType][value] = false;
      });
    });
    
    setFilterState(resetState);
    setPriceRange([0, 200]);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Page change handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Format price according to current language
  const formatPrice = (price: number) => {
    if (i18n.language === 'ar') {
      return price.toFixed(0).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    return price.toFixed(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container">
          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-medium mb-4">{t(`categories.${safeCategory}.name`, category.name)}</h1>
            <p className="text-marble-700 max-w-4xl">{t(`categories.${safeCategory}.description`, category.description)}</p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-marble-600">
                {filteredProducts.length} {t('categories.products')}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              {t('categories.filters')}
            </Button>
          </div>
          
          {/* Products Grid with Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters - Hidden on mobile unless toggled */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="font-medium text-lg mb-4">{t('categories.filters')}</h3>
                
                <Accordion type="single" collapsible className="w-full" defaultValue="price">
                  {/* Price Range */}
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-base font-medium">
                      {t('categories.priceRange')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="py-4 px-1">
                        <Slider 
                          defaultValue={[0, 200]} 
                          max={200} 
                          step={10}
                          value={priceRange}
                          onValueChange={(value) => setPriceRange(value)}
                        />
                        <div className="flex justify-between mt-2">
                          <span>{t('prices.sar')} {formatPrice(priceRange[0])}</span>
                          <span>{t('prices.sar')} {formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Dynamic Filters based on category */}
                  {Object.entries(category.filters).map(([filterName, values]) => (
                    <AccordionItem key={filterName} value={filterName}>
                      <AccordionTrigger className="text-base font-medium capitalize">
                        {t(`categories.${filterName.toLowerCase()}`)}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 py-2">
                          {(values as string[]).map((value: string) => (
                            <div key={value} className="flex items-center space-x-2 rtl:space-x-reverse">
                              <Checkbox 
                                id={`${filterName}-${value}`} 
                                checked={filterState[filterName]?.[value] || false}
                                onCheckedChange={() => toggleFilter(filterName, value)}
                              />
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
                
                {/* Apply and Reset Filters Buttons */}
                <div className="flex flex-col space-y-2">
                  <Button className="w-full" onClick={applyFilters}>{t('categories.apply')}</Button>
                  <Button variant="outline" className="w-full" onClick={resetFilters}>{t('categories.reset')}</Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="col-span-1 md:col-span-3">
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-marble-600">{t('categories.noProducts')}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={resetFilters}
                  >
                    {t('categories.clearFilters')}
                  </Button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredProducts.length > productsPerPage && (
                <div className="mt-12 flex justify-center">
                  <Button 
                    variant="outline" 
                    className="mx-1"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    {t('pagination.previous')}
                  </Button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <Button 
                      key={i} 
                      className={`mx-1 ${currentPage === i + 1 ? 'bg-primary' : 'variant-outline'}`}
                      variant={currentPage === i + 1 ? 'default' : 'outline'}
                      onClick={() => goToPage(i + 1)}
                    >
                      {i18n.language === 'ar' 
                        ? (i + 1).toString().replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d])
                        : i + 1
                      }
                    </Button>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="mx-1"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                  >
                    {t('pagination.next')}
                  </Button>
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
