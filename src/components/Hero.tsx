
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-marble-100 overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg text-marble-700 mb-8 max-w-lg">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/categories/marble-alternative">
                  {t("home.hero.shopCollection")} <ArrowRight className="rtl:rotate-180 ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">{t("home.hero.learnMore")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute top-0 right-0 w-80 h-96 bg-accent rounded-tl-3xl rounded-br-3xl -z-10 transform translate-x-8 translate-y-8"></div>
            <img 
              src="https://images.unsplash.com/photo-1610115799042-4a858909c6cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&q=80" 
              alt={t("home.hero.title")}
              className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-tr-2xl rounded-bl-2xl shadow-lg max-w-xs">
              <p className="font-serif font-medium text-lg mb-2">{t("home.hero.premiumQuality")}</p>
              <p className="text-marble-600 text-sm">{t("home.hero.qualityDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
