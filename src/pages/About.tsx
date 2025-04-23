
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">About Us</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">Redefining Marble Alternatives Since 2015</h1>
                <p className="text-lg text-marble-700 mb-6">
                  At MarbleAlt, we're passionate about bringing the timeless beauty of marble to more homes and businesses through innovative alternative materials that don't compromise on aesthetics or quality.
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-full h-full bg-accent rounded-tl-3xl rounded-br-3xl -z-10 transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80" 
                  alt="Our showroom" 
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Our Story</h2>
              <p className="text-lg text-marble-700">
                Founded by a team of interior designers and materials engineers, MarbleAlt was born from a simple observation: 
                too many people were compromising their design dreams due to the cost and maintenance of natural marble. 
                We set out to change that.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-medium">1</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">The Beginning</h3>
                <p className="text-marble-700">
                  We started in a small workshop in 2015, experimenting with materials that could replicate the beauty of natural marble.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-medium">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Innovation</h3>
                <p className="text-marble-700">
                  After years of research and development, we perfected our proprietary processes to create marble alternatives indistinguishable from the real thing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl font-medium">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">Today</h3>
                <p className="text-marble-700">
                  Now we're a leading provider of premium marble alternatives, with products in thousands of homes and businesses across the country.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="font-serif text-xl font-medium mb-4">Quality Without Compromise</h3>
                <p className="text-marble-700">
                  We believe that alternative materials shouldn't mean compromised quality. Every product we create undergoes rigorous testing to ensure it meets our exacting standards for appearance, durability, and performance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="font-serif text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-marble-700">
                  Our manufacturing processes are designed to minimize environmental impact. By offering alternatives to quarried stone, we help reduce the demand for resource-intensive extraction while still delivering beautiful products.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="font-serif text-xl font-medium mb-4">Innovation</h3>
                <p className="text-marble-700">
                  We're constantly researching and developing new materials and techniques to improve our products. Innovation is in our DNA, driving us to create better solutions for our customers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="font-serif text-xl font-medium mb-4">Customer-Centric</h3>
                <p className="text-marble-700">
                  From free samples to expert installation advice, everything we do is focused on ensuring our customers have an exceptional experience and achieve their design vision.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Product Design",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                },
                {
                  name: "Sarah Johnson",
                  role: "Materials Specialist",
                  image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                },
                {
                  name: "David Kim",
                  role: "Customer Experience",
                  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 overflow-hidden rounded-full mx-auto w-48 h-48">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-marble-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
