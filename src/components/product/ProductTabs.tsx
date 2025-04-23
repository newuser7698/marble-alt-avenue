
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

interface ProductTabsProps {
  description: string;
  features: string[];
  specifications: Record<string, string>;
  activeTab: string;
  onTabChange: (value: string) => void;
}

const ProductTabs = ({ description, features, specifications, activeTab, onTabChange }: ProductTabsProps) => {
  const { t } = useTranslation();

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={onTabChange} 
      className="border rounded-md p-1 bg-gray-50"
    >
      <TabsList className="w-full bg-transparent gap-1">
        <TabsTrigger 
          value="details" 
          className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
        >
          {t("product.tabs.details")}
        </TabsTrigger>
        <TabsTrigger 
          value="features"
          className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
        >
          {t("product.tabs.features")}
        </TabsTrigger>
        <TabsTrigger 
          value="specifications"
          className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
        >
          {t("product.tabs.specifications")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="pt-4 px-3">
        <p className="text-marble-700">
          {description}
        </p>
      </TabsContent>
      <TabsContent value="features" className="pt-4 px-3">
        <ul className="list-disc pl-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-marble-700">{feature}</li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="specifications" className="pt-4 px-3">
        <div className="grid grid-cols-2 gap-y-4">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key}>
              <span className="font-medium">{key}:</span> {value}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
