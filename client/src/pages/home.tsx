import { useEffect, useRef } from "react";
import Hero from "@/components/home/hero";
import Mission from "@/components/home/mission";
import Gallery from "@/components/home/gallery";
import Platforms from "@/components/home/platforms";
import Devotional from "@/components/home/devotional";
import { Helmet } from "react-helmet";

function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });
      }
      
      elements.forEach(element => {
        observerRef.current?.observe(element);
      });
    };
    
    animateOnScroll();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Influence Media Portal | Church Media Excellence</title>
        <meta name="description" content="Digital Influence Media Portal - Supporting the church's mission through creative media, worship enhancement, and outreach through digital platforms." />
        <meta property="og:title" content="Digital Influence Media Portal" />
        <meta property="og:description" content="Supporting the church's mission through creative media, worship enhancement, and outreach through digital platforms." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <Mission />
      <Gallery />
      <Platforms />
      <Devotional />
    </>
  );
}

export default Home;
