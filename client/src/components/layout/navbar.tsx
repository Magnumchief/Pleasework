import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, Sun, Moon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
}

const NavLink = ({ href, label, currentPath }: NavLinkProps) => {
  const isActive = currentPath === href;
  
  return (
    <Link href={href}>
      <span
        className={cn(
          "px-1 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer",
          isActive 
            ? "border-primary text-primary" 
            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
        )}
      >
        {label}
      </span>
    </Link>
  );
};

function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl flex h-16 items-center justify-between">
        {/* Logo and main nav */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="flex items-center gap-2 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md text-white font-bold text-lg">
                DI
              </div>
              <span className="font-semibold text-lg">Digital Influence</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" label="Media Portal" currentPath={location} />
            <NavLink href="/visuals" label="Departments(ISD)" currentPath={location} />
          </nav>
        </div>
        
        {/* Secondary nav */}
        <div className="flex items-center space-x-4">
          {/* Dark mode button removed as requested */}
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/#platforms" className="text-sm font-medium hover:text-primary transition-colors">
              Platforms
            </a>
            <a href="/#devotional" className="text-sm font-medium hover:text-primary transition-colors">
              Devotional
            </a>
          </div>
          
          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Digital Influence</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/">
                  <span className="py-2 hover:text-primary cursor-pointer block" onClick={() => setMobileMenuOpen(false)}>
                    Media Portal
                  </span>
                </Link>
                <Link href="/service-material">
                  <span className="py-2 hover:text-primary cursor-pointer block" onClick={() => setMobileMenuOpen(false)}>
                    Service Material
                  </span>
                </Link>
                <Link href="/visuals">
                  <span className="py-2 hover:text-primary cursor-pointer block" onClick={() => setMobileMenuOpen(false)}>
                    Departments
                  </span>
                </Link>
                <a href="/#platforms" className="py-2 hover:text-primary cursor-pointer block" onClick={() => setMobileMenuOpen(false)}>
                  Platforms
                </a>
                <a href="/#devotional" className="py-2 hover:text-primary cursor-pointer block" onClick={() => setMobileMenuOpen(false)}>
                  Devotional
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
