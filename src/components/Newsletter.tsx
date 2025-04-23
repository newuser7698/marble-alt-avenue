
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-white">
            Join Our Newsletter
          </h2>
          <p className="text-marble-300 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, design ideas, and exclusive offers. 
            Subscribe to our newsletter for inspiration delivered to your inbox.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none"
            />
            <Button className="bg-accent text-primary hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
