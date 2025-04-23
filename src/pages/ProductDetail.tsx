
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";

// Mock product data (in a real app, this would come from an API)
const getProductData = (t: any) => ({
  id: "1",
  name: t("products.carrara.name") || "Carrara White Marble Alternative",
  price: 4.99,
  images: [
    "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ],
  category: t("header.marbleAlternative"),
  stock: 25,
  description: t("products.carrara.description") || "Our premium Carrara White Marble Alternative offers the classic elegance of Italian Carrara marble without the maintenance concerns or high cost. Perfect for countertops, backsplashes, and feature walls.",
  features: [
    t("products.carrara.features.stainResistant") || "Stain-resistant surface",
    t("products.carrara.features.heatResistant") || "Heat-resistant up to 180°C",
    t("products.carrara.features.scratchResistant") || "Scratch-resistant",
    t("products.carrara.features.easyClean") || "Easy to clean",
    t("products.carrara.features.noSealing") || "No sealing required"
  ],
  specifications: {
    [t("products.specifications.material") || "Material"]: t("products.carrara.specifications.material") || "High-grade PVC composite",
    [t("products.specifications.thickness") || "Thickness"]: t("products.carrara.specifications.thickness") || "12mm",
    [t("products.specifications.size") || "Size"]: t("products.carrara.specifications.size") || "120cm x 240cm",
    [t("products.specifications.weight") || "Weight"]: t("products.carrara.specifications.weight") || "22kg per sheet",
    [t("products.specifications.installation") || "Installation"]: t("products.carrara.specifications.installation") || "Adhesive mounting",
    [t("products.specifications.finish") || "Finish"]: t("products.carrara.specifications.finish") || "Matte"
  },
  reviews: 24,
  rating: 4.7
});

const ProductDetail = () => {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const { t } = useTranslation();
  const [productData, setProductData] = useState(() => getProductData(t));

  // Update product data when language changes
  useEffect(() => {
    setProductData(getProductData(t));
  }, [t]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ImageGallery images={productData.images} productName={productData.name} />
            
            <div>
              <ProductInfo 
                name={productData.name}
                price={productData.price}
                stock={productData.stock}
                description={productData.description}
                rating={productData.rating}
                reviews={productData.reviews}
              />
              
              <ProductTabs 
                description={productData.description}
                features={productData.features}
                specifications={productData.specifications}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
