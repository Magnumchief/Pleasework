import { useState } from "react";
import { TabView, defaultTabs } from "@/components/ui/tab-view";
import MaterialTable from "@/components/service-material/material-table";
import UploadCard from "@/components/service-material/upload-card";
import ContactCard from "@/components/service-material/contact-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ServiceMaterial as ServiceMaterialType } from "@shared/schema";
import { Helmet } from "react-helmet";

function ServiceMaterialPage() {
  const [activeTab, setActiveTab] = useState("table");
  const [viewItem, setViewItem] = useState<ServiceMaterialType | null>(null);
  const [updateItem, setUpdateItem] = useState<ServiceMaterialType | null>(null);

  const handleViewItem = (item: ServiceMaterialType) => {
    setViewItem(item);
  };

  const handleUpdateItem = (item: ServiceMaterialType) => {
    setUpdateItem(item);
  };

  return (
    <>
      <Helmet>
        <title>Service Material | Digital Influence Media Portal</title>
        <meta name="description" content="Manage and upload service materials for your church services including banners, videos, song lists, and more." />
        <meta property="og:title" content="Service Material | Digital Influence Media Portal" />
        <meta property="og:description" content="Manage and upload service materials for your church services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Service Material
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Materials for Upcoming Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This section has for purpose to gather all the elements such as videos, oos, etc. that will be required by media for service.
            </p>
          </div>
          
          <TabView 
            tabs={defaultTabs} 
            defaultValue="table" 
            onChange={setActiveTab}
            className="mb-12 animate-on-scroll"
          >
            {activeTab === "table" && (
              <MaterialTable 
                onViewItem={handleViewItem} 
                onUpdateItem={handleUpdateItem} 
              />
            )}
            {activeTab === "board" && (
              <div className="h-64 flex items-center justify-center border border-dashed rounded-md">
                <p className="text-muted-foreground">Board view coming soon</p>
              </div>
            )}
            {activeTab === "gallery" && (
              <div className="h-64 flex items-center justify-center border border-dashed rounded-md">
                <p className="text-muted-foreground">Gallery view coming soon</p>
              </div>
            )}
          </TabView>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            <UploadCard />
            <ContactCard />
          </div>
          
          {/* View Item Dialog */}
          <Dialog open={!!viewItem} onOpenChange={(open) => !open && setViewItem(null)}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>{viewItem?.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">{viewItem?.description}</p>
                {/* Display file preview, details, etc. here */}
                <div className="rounded-md border p-4 bg-muted/50">
                  <p className="text-sm font-medium">Current file:</p>
                  <p className="text-sm text-muted-foreground mt-1">{viewItem?.fileName || "No file uploaded yet"}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Update Item Dialog would be similar but with form fields for updating */}
        </div>
      </section>
    </>
  );
}

export default ServiceMaterialPage;
