
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GooeyNav from "@/components/ui/gooey-nav";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Expertise", href: "/expertise" },
    { label: "Projets", href: "/projets" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Impresum", href: "/impresum" },
  ];

  return (
    <nav className="bg-white/98 backdrop-blur-xl border-b border-blue-100/60 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <Link to="/" className="flex items-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:scale-105">
                DjanguiCore
              </div>
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-80 animate-pulse"></div>
            </Link>
          </div>

          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-2 shadow-lg border border-blue-100/50">
              <GooeyNav
                items={navItems}
                particleCount={15}
                particleDistances={[70, 12]}
                particleR={90}
                initialActiveIndex={0}
                animationTime={400}
                timeVariance={150}
                colors={[1, 2, 3, 4]}
              />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Se connecter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Consultation gratuite</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 p-3 rounded-xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90 relative z-10" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180 relative z-10" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out transform ${
          isMenuOpen 
            ? "max-h-96 opacity-100 visible translate-y-0" 
            : "max-h-0 opacity-0 invisible -translate-y-4 overflow-hidden"
        }`}>
          <div className="py-6 space-y-1 border-t border-blue-100/60 bg-gradient-to-b from-white/80 to-blue-50/40 backdrop-blur-md rounded-b-2xl mx-2 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105 relative overflow-hidden group ${
                  isMenuOpen ? 'animate-slide-in' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            <div className="pt-6 pb-2 border-t border-blue-100/60 mt-4 mx-4">
              <div className="flex flex-col space-y-4 px-2">
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 justify-start font-medium py-4 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Se connecter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Consultation gratuite</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
