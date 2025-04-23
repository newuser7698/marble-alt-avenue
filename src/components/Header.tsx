import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showArabicPrices, setShowArabicPrices] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <h1 className="text-2xl font-serif font-bold tracking-tight group-hover:text-primary transition-colors">MarbleAlt</h1>
          </Link>

          <nav className="hidden md:flex gap-6">
            {[
              { path: "/categories/marble-alternative", label: t("header.marbleAlternative") },
              { path: "/categories/rolls", label: t("header.rolls") },
              { path: "/categories/spc", label: t("header.spc") },
              { path: "/categories/pvc", label: t("header.pvc") },
              { path: "/about", label: t("header.about") },
              { path: "/contact", label: t("header.contact") }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-marble-700 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onMouseEnter={() => setShowArabicPrices(true)}
                onMouseLeave={() => setShowArabicPrices(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage} 
              className="relative hover:bg-gray-100 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-bold bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
                {i18n.language === 'en' ? 'ع' : 'E'}
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="relative group">
              <Button variant="ghost" size="icon" className="group-hover:bg-gray-100 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">{t("header.cart")}</span>
              </Button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button variant="outline" className="hidden md:flex hover:bg-gray-100 transition-colors">
              {t("header.login")}
            </Button>
            <Button className="hidden md:flex hover:bg-primary/90 transition-colors">
              {t("header.signup")}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100 transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
