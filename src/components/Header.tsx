
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold tracking-tight">MarbleAlt</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/categories/marble-alternative" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              Marble Alternative
            </Link>
            <Link 
              to="/categories/rolls" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              Rolls
            </Link>
            <Link 
              to="/categories/spc" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              SPC
            </Link>
            <Link 
              to="/categories/pvc" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              PVC
            </Link>
            <Link 
              to="/about" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-marble-700 hover:text-marble-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button className="hidden md:flex">
              Sign Up
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
