import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Devotional() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-primary text-primary-foreground relative overflow-hidden animate-on-scroll"
      id="devotional"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at center, var(--accent) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Today's Rhapsody
          </h2>
        </div>
        
        <div className="bg-white text-primary rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto p-8">
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Rhapsody of Realities is a daily devotional guide designed to enhance your spiritual growth and development.
            </p>
            
            <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-500 border-0" asChild>
              <a href="https://read.rhapsodyofrealities.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Read Full Devotional
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devotional;
