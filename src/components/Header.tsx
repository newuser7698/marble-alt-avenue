
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showArabicPrices, setShowArabicPrices] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    // Change document dir attribute for RTL/LTR support
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-tight">MarbleAlt</h1>
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
                className="text-marble-700 hover:text-marble-900 transition-colors"
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
              className="relative"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-bold">
                {i18n.language === 'en' ? 'AR' : 'EN'}
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">{t("header.cart")}</span>
              </Button>
            </Link>
            <Button variant="outline" className="hidden md:flex">
              {t("header.login")}
            </Button>
            <Button className="hidden md:flex">
              {t("header.signup")}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
