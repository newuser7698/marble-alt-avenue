
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MinusIcon, PlusIcon, Heart, Share } from "lucide-react";

// Mock product data (in a real app, this would come from an API)
const productData = {
  id: "1",
  name: "Carrara White Marble Alternative",
  price: 4.99,
  images: [
    "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ],
  category: "Marble Alternative",
  stock: 25,
  description: "Our premium Carrara White Marble Alternative offers the classic elegance of Italian Carrara marble without the maintenance concerns or high cost. Perfect for countertops, backsplashes, and feature walls.",
  features: [
    "Stain-resistant surface",
    "Heat-resistant up to 180°C",
    "Scratch-resistant",
    "Easy to clean",
    "No sealing required"
  ],
  specifications: {
    Material: "High-grade PVC composite",
    Thickness: "12mm",
    Size: "120cm x 240cm",
    Weight: "22kg per sheet",
    Installation: "Adhesive mounting",
    Finish: "Matte"
  },
  reviews: 24,
  rating: 4.7
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const incrementQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={productData.images[selectedImage]} 
                  alt={productData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {productData.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${productData.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-serif font-medium mb-2">{productData.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(productData.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-marble-600 text-sm">({productData.reviews} reviews)</span>
                  <span className="mx-2 text-marble-400">|</span>
                  <span className="text-sm">
                    {productData.stock > 0 ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        Out of Stock
                      </Badge>
                    )}
                  </span>
                </div>
              </div>
              
              <p className="text-2xl font-medium mb-6">${productData.price.toFixed(2)} <span className="text-marble-600 text-sm">/ sq ft</span></p>
              
              <div className="mb-6">
                <p className="text-marble-700">{productData.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="mr-8">
                    <label htmlFor="quantity" className="block text-sm font-medium text-marble-700 mb-1">
                      Quantity (sq ft)
                    </label>
                    <div className="flex items-center">
                      <button 
                        className="w-10 h-10 rounded-l-md border border-r-0 border-marble-300 flex items-center justify-center"
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
                        className="w-10 h-10 rounded-r-md border border-l-0 border-marble-300 flex items-center justify-center"
                        onClick={incrementQuantity}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-marble-700 mb-1">
                      Total Price
                    </label>
                    <p className="text-xl font-medium">${(productData.price * quantity).toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="flex-1 md:flex-none md:min-w-[200px]">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="details">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                  <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-4">
                  <p className="text-marble-700">
                    {productData.description}
                  </p>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <ul className="list-disc pl-5 space-y-2">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="text-marble-700">{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specifications" className="pt-4">
                  <div className="grid grid-cols-2 gap-y-4">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-medium">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
