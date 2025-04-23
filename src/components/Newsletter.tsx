
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">
            {t("newsletter.title")}
          </h2>
          <p className="text-marble-300 mb-8 max-w-2xl mx-auto">
            {t("newsletter.subtitle")}
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder={t("newsletter.placeholder")}
              className="flex-grow px-4 py-3 rounded-md focus:outline-none"
            />
            <Button className="bg-accent text-primary hover:bg-accent/90">
              {t("newsletter.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
