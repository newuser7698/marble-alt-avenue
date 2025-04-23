
import { Shield, Package, Truck, Star } from "lucide-react";

const Benefits = () => {
  const benefitItems = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "10-Year Warranty",
      description: "All our marble alternative products come with an industry-leading warranty for peace of mind."
    },
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: "Free Samples",
      description: "Test our products in your space before making a purchase decision."
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Fast Shipping",
      description: "Enjoy quick delivery with our efficient logistics and shipping partners."
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: "Expert Support",
      description: "Get personalized advice from our team of interior design specialists."
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Why Choose MarbleAlt</h2>
          <p className="text-marble-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality marble alternatives with exceptional service
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
