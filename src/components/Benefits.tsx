
import { Shield, Package, Truck, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const benefitItems = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: t("benefits.warranty"),
      description: t("benefits.warrantyDescription")
    },
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: t("benefits.samples"),
      description: t("benefits.samplesDescription")
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: t("benefits.shipping"),
      description: t("benefits.shippingDescription")
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: t("benefits.support"),
      description: t("benefits.supportDescription")
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">{t("benefits.title")}</h2>
          <p className="text-marble-600 max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{benefit.title}</h3>
              <p className="text-marble-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
