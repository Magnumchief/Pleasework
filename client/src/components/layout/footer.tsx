import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* Digital Influence Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-primary font-bold text-lg mr-3">
                DI
              </div>
              <span className="font-semibold text-xl">Digital Influence</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
              Using media tools and platforms to support the church's mission of worship, community, and outreach.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.instagram.com/ceyc_waterfront/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@ceyc479" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center mb-8">
            <h3 className="font-semibold text-xl mb-6">Contact</h3>
            <div className="space-y-6 text-primary-foreground/70">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <p className="leading-relaxed">
                  Christ Embassy Youth Church<br />
                  3 Port road waterfront<br />
                  Cape Town, South Africa
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                </div>
                <a href="tel:+27684438735" className="hover:text-primary-foreground">
                  +27 68 443 8735
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                </div>
                <a href="mailto:weareceyc@gmail.com" className="hover:text-primary-foreground">
                  weareceyc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            &copy; 2025 Digital Influence Media Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
