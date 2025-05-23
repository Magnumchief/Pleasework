import { Helmet } from "react-helmet";

function PlatformsPage() {
  return (
    <>
      <Helmet>
        <title>Platforms | Digital Influence Media Portal</title>
        <meta name="description" content="Digital platforms and tools used for church media production" />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-6xl py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Platforms</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the digital tools and platforms we use to create and share content.
            </p>
          </div>
          
          {/* Add platform content here */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Platform cards will go here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformsPage; 