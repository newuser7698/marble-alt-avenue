
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedCategories = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      id: "marble-alternative",
      name: t("header.marbleAlternative"),
      description: t("categories.filters"),
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: "rolls",
      name: t("header.rolls"),
      description: t("categories.filters"),
      image: "https://images.unsplash.com/photo-1615529151169-7b1d7d7c5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: "spc",
      name: t("header.spc"),
      description: t("categories.filters"),
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: "pvc",
      name: t("header.pvc"),
      description: t("categories.filters"),
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];
  
  // Image error handling
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">{t("home.categories.title")}</h2>
          <p className="text-marble-600 max-w-2xl mx-auto">
            {t("home.categories.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] block shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 group-hover:from-black/95 transition-all duration-300">
                <h3 className="text-white text-xl font-serif font-medium mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">{category.description}</p>
                <span className="text-white/90 text-sm flex items-center transition-all transform translate-x-0 group-hover:translate-x-2">
                  {t("home.categories.explore")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
