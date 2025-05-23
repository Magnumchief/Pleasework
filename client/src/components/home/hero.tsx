import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const heroImages = [
  "https://i.postimg.cc/zv9rCJH4/0Z4A9752.jpg", // Existing image
  "https://i.postimg.cc/yxJK3JxF/JPEG-image-478-B-8-B47-CE-0.jpg", // Placeholder 1: Concert/Event
  "https://i.postimg.cc/mZqBfSpV/JPEG-image-4568-9742-46-0.jpg", // Placeholder 2: Community Gathering
  "https://i.postimg.cc/sgCz1grh/JPEG-image-44-FD-B6-EF-E4-0.jpg", // Placeholder 3: Worship Setting
  "https://i.postimg.cc/9FJSHXf2/0-Z4-A9835-2.jpg", // Placeholder 4: People Connecting
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useScrollAnimation<HTMLElement>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-primary text-primary-foreground overflow-hidden animate-on-scroll"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1 text-sm font-medium bg-yellow-400 text-primary rounded-full mb-4">
              Media Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Welcome to the Digital Influence Media Portal
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              Use media tools and platforms to support the church's mission of worship, community, and outreach, while fostering a welcoming and spiritually enriching environment for all.
            </p>
            <div className="relative pl-6 border-l-2 border-yellow-400 mb-8">
              <p className="italic text-lg text-white">
                "For we were all baptized by one Spirit so as to form one body"
              </p>
              <span className="text-sm text-yellow-400 font-medium">1 Corinthians 12.13</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="text-foreground bg-white hover:bg-white/90 border-0">
                <a href="#platforms" className="font-medium">Our Platforms</a>
              </Button>
              <Button asChild size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-500 border-0">
                <Link href="/visuals">Departments</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-[500px]"> 
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Church service with modern media production"
                className="absolute inset-0 rounded-xl shadow-md object-cover w-full h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
