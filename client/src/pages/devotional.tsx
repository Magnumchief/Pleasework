import { Helmet } from "react-helmet";

function DevotionalPage() {
  return (
    <>
      <Helmet>
        <title>Devotional | Digital Influence Media Portal</title>
        <meta name="description" content="Daily devotionals and spiritual content" />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-6xl py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Daily Devotional</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Daily spiritual content to enrich your walk with God.
            </p>
          </div>
          
          {/* Add devotional content here */}
          <div className="space-y-8">
            {/* Devotional content will go here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DevotionalPage; 