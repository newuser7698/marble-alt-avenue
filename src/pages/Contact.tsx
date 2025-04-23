
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif font-medium mb-4">Contact Us</h1>
            <p className="text-lg text-marble-700">
              Have questions about our products or need assistance? We're here to help. 
              Reach out to our team using any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    rows={6} 
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email Us</h3>
                    <p className="text-marble-700 mb-1">For general inquiries:</p>
                    <a href="mailto:info@marblealt.com" className="text-primary hover:underline">
                      info@marblealt.com
                    </a>
                    <p className="text-marble-700 mt-2 mb-1">For customer support:</p>
                    <a href="mailto:support@marblealt.com" className="text-primary hover:underline">
                      support@marblealt.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <p className="text-marble-700 mb-1">Customer Service:</p>
                    <a href="tel:+18005551234" className="text-primary hover:underline">
                      (800) 555-1234
                    </a>
                    <p className="text-marble-700 mt-2 mb-1">Sales Team:</p>
                    <a href="tel:+18005555678" className="text-primary hover:underline">
                      (800) 555-5678
                    </a>
                    <p className="text-sm text-marble-600 mt-2">
                      Monday-Friday: 9am-6pm EST<br />
                      Saturday: 10am-4pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                    <p className="text-marble-700 mb-1">Main Showroom:</p>
                    <address className="not-italic">
                      123 Stone Avenue<br />
                      Marble City, MC 12345<br />
                      United States
                    </address>
                    <p className="text-sm text-marble-600 mt-2">
                      Monday-Saturday: 10am-7pm<br />
                      Sunday: 12pm-5pm
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {["Facebook", "Instagram", "Pinterest", "LinkedIn"].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="bg-secondary hover:bg-accent transition-colors px-4 py-2 rounded-md text-sm"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-medium mb-6">Our Location</h2>
            <div className="aspect-[16/9] w-full bg-marble-200 rounded-lg">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-marble-600">Map placeholder - would integrate Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
