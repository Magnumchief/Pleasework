import { Check } from "lucide-react";

function Mission() {
  return (
    <section className="py-20 bg-background" id="mission">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          <div className="animate-on-scroll max-w-xl mx-auto w-full">
            <img 
              src="https://i.postimg.cc/KzNJ2Q5z/team.jpg" 
              alt="Creative media team at work" 
              className="rounded-xl shadow-md object-cover w-full h-[400px]"
            />
          </div>
          <div className="animate-on-scroll max-w-xl mx-auto w-full">
            <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Elevating worship through media excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe that powerful media creates meaningful connections. Our team leverages modern technology to enhance the worship experience and spread the message beyond our walls.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-foreground">Create immersive worship experiences through audio-visual excellence</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-foreground">Reach beyond our physical walls through digital platforms</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-foreground">Support all church ministries with high-quality media resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
