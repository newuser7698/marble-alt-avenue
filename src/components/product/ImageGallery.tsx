
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1600607686527-dada3e0c318a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    ];
    e.currentTarget.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    e.currentTarget.onerror = null;
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <img 
          src={images[selectedImage]} 
          alt={productName}
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button 
            key={index}
            className={`relative aspect-square w-24 rounded-md overflow-hidden flex-shrink-0 transition-all ${
              selectedImage === index 
                ? 'ring-2 ring-primary scale-105' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`${productName} view ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
