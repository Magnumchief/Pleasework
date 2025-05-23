import React from 'react';
import { Youtube, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // For utility functions like cn
import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Import the hook

const platformData = [
  {
    name: "CEYC WATERFRONT",
    type: "YouTube Channel",
    platformIcon: <Youtube className="w-7 h-7" />,
    href: "https://www.youtube.com/@ceycwaterfront",
    description:
      "We are Christ Embassy Youth Church Waterfront. Stay tuned for all things Godly, fun, entertaining, youthful, and captivating.",
    stats: [
      { value: "8.2K", label: "views" },
      { value: "480", label: "subscribers" },
    ],
    buttonText: "Watch on YouTube",
    coverGradient: "bg-gradient-to-br from-red-500 to-red-700",
    iconColor: "text-red-100",
    buttonClasses: "bg-white/90 hover:bg-white text-red-600 group-hover:text-red-700 shadow-lg hover:shadow-xl",
    iconBg: "bg-white/20",
    logoUrl: "https://i.postimg.cc/Pq2NmwXc/Youth-Logo-No-Background-01.jpg"
  },
  {
    name: "@ceyc_waterfront",
    type: "Instagram Profile",
    platformIcon: <Instagram className="w-7 h-7" />,
    href: "https://www.instagram.com/ceyc_waterfront",
    description:
      "Follow us on Instagram for daily inspiration, behind-the-scenes content, and updates on upcoming events and services.",
    stats: [
      { value: "3.5K", label: "followers" },
      { value: "245", label: "posts" },
    ],
    buttonText: "Follow on Instagram",
    coverGradient: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    iconColor: "text-purple-100",
    buttonClasses: "bg-white/90 hover:bg-white text-purple-600 group-hover:text-pink-700 shadow-lg hover:shadow-xl",
    iconBg: "bg-white/20",
    logoUrl: "https://i.postimg.cc/Pq2NmwXc/Youth-Logo-No-Background-01.jpg"
  },
];

function Platforms() {
  const sectionRef = useScrollAnimation<HTMLElement>(); // Initialize the hook

  return (
    <section 
      ref={sectionRef} // Apply the ref
      className="py-20 bg-background animate-on-scroll" // Add animate-on-scroll
      id="platforms"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Our Platforms
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Connect With Us Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest sermons, events, and community news through our various online platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platformData.map((platform) => (
            <div 
              key={platform.name} 
              className="group bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden border border-border/20"
            >
              {/* Platform Cover Section */}
              <div className={cn("relative p-6 h-48 flex flex-col justify-between items-start", platform.coverGradient)}>
                <div className={cn("p-3 rounded-lg backdrop-blur-sm", platform.iconBg)}>
                  {React.cloneElement(platform.platformIcon, { className: cn("w-8 h-8", platform.iconColor) })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{platform.name}</h3>
                  <p className="text-sm text-white/80">{platform.type}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-5 h-20 leading-relaxed">
                  {platform.description}
                </p>
                <div className="flex justify-between items-center mb-5 text-xs text-muted-foreground">
                  <div className="text-center">
                    <span className="font-semibold text-base text-foreground">{platform.stats[0].value}</span>
                    <p>{platform.stats[0].label.toUpperCase()}</p>
                  </div>
                  {platform.logoUrl && (
                    <img src={platform.logoUrl} alt="Platform Logo" className="h-10 w-auto mx-4" />
                  )}
                  <div className="text-center">
                    <span className="font-semibold text-base text-foreground">{platform.stats[1].value}</span>
                    <p>{platform.stats[1].label.toUpperCase()}</p>
                  </div>
                </div>
                <Button asChild className={cn("w-full font-semibold py-3 text-sm transition-all duration-300 transform group-hover:scale-105", platform.buttonClasses)}>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer">
                    {platform.buttonText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Need to ensure React is in scope for React.cloneElement if not already globally available
// Depending on the setup, you might need: import React from 'react';

export default Platforms;
