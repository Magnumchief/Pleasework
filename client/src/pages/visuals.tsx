import { Helmet } from "react-helmet";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Laptop, Calendar, Users, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function VisualsPage() {
  const pageRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Helmet>
        <title>Visuals Department | Digital Influence Media Portal</title>
        <meta name="description" content="Visuals Department - Creative team responsible for photography, videography, and visual content for church services and events." />
        <meta property="og:title" content="Visuals Department | Digital Influence Media Portal" />
        <meta property="og:description" content="Creative team responsible for photography, videography, and visual content for church services and events." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div 
        ref={pageRef} 
        className="container mx-auto px-4 max-w-6xl py-10 animate-on-scroll"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">In Service Departments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated teams working together to enhance worship and outreach through various media forms.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="schedule">Service Materials</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center mb-2">
                      <Camera className="mb-2 h-6 w-6 text-primary" />
                      <CardTitle>Photography Team</CardTitle>
                    </div>
                    <CardDescription>
                      Capturing the essence of services and special events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Our photography team ensures that all significant moments during services and events are captured beautifully. From worship to testimonies, we document these experiences for church archives and digital platforms.</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs" asChild>
                      <a href="mailto:magloirenumbi3@gmail.com?subject=Interest%20in%20Joining%20Photography%20Team&body=Hello%2C%0A%0AI'm%20interested%20in%20joining%20the%20Photography%20Team.%20Please%20let%20me%20know%20what%20skills%20are%20needed%20and%20how%20I%20can%20contribute.%0A%0AThank%20you%2C%0A">
                        Contact Team Lead
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center mb-2">
                      <Video className="mb-2 h-6 w-6 text-primary" />
                      <CardTitle>Livestream Team</CardTitle>
                    </div>
                    <CardDescription>
                      Creating compelling content for services and outreach
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>The Livestream team handles live service broadcasting, testimony recordings, event soundtracks, and promotional content. They ensure high-quality broadcast experience across all church media.</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs" asChild>
                      <a href="mailto:orvclxmoitsiwa@gmail.com?subject=Interest%20in%20Joining%20Livestream%20Team&body=Hello%2C%0A%0AI'm%20interested%20in%20joining%20the%20Livestream%20Team.%20Please%20let%20me%20know%20what%20skills%20are%20needed%20and%20how%20I%20can%20contribute.%0A%0AThank%20you%2C%0A">
                        Contact Team Lead
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center mb-2">
                      <Laptop className="mb-2 h-6 w-6 text-primary" />
                      <CardTitle>Visual Team</CardTitle>
                    </div>
                    <CardDescription>
                      Working with visual elements and presentations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Our visual team works with presentations, graphics, and visual elements that complement our services. They create engaging visuals that enhance the worship experience and help communicate messages clearly.</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs" asChild>
                      <a href="mailto:sisrue12@gmail.com?subject=Interest%20in%20Joining%20Visual%20Team&body=Hello%2C%0A%0AI'm%20interested%20in%20joining%20the%20Visual%20Team.%20Please%20let%20me%20know%20what%20skills%20are%20needed%20and%20how%20I%20can%20contribute.%0A%0AThank%20you%2C%0A">
                        Contact Team Lead
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center mb-2">
                      <Users className="mb-2 h-6 w-6 text-primary" />
                      <CardTitle>Social Media Team</CardTitle>
                    </div>
                    <CardDescription>
                    Social media moves fast—and so do we.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>That's why we invest in constant training to stay ahead of the curve. From mastering the latest trends to leveling up our production skills, our mission is simple: create content that connects, inspires, and makes an impact.
Because great content starts with a team that's always growing.</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="w-full max-w-xs" asChild>
                      <a href="mailto:qhamani.mfabana@icloud.com?subject=Interest%20in%20Social%20Media&body=Hello%2C%0A%0AI'm%20interested%20in%20joining%20the%20Social%20Media%20department.%20Please%20let%20me%20know%20when%20the%20next%20training%20session%20will%20be%20held.%0A%0AThank%20you%2C%0A">
                        Contact Training Lead
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <div className="space-y-6">
                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle>Equipment Guidelines</CardTitle>
                    <CardDescription>
                      Standards and procedures for handling department equipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="space-y-4 max-w-lg">
                      <p className="text-center">All equipment must be checked out through the department system</p>
                      <p className="text-center">Return all gear within 24 hours of event completion</p>
                      <p className="text-center">Report any damage or technical issues immediately</p>
                      <p className="text-center">Clean lenses and sensors before returning cameras</p>
                      <p className="text-center">Format memory cards after backing up footage</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="max-w-xs" asChild>
                      <a href="https://www.notion.so/Equipments-Guidelines-1fb2c7b38038807bb1ccc0695240ec68?pvs=4" target="_blank" rel="noopener noreferrer">
                        View Complete Guidelines
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="text-center">
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle>Equipment Checklist</CardTitle>
                    <CardDescription>
                      Essential equipment for various media projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <p className="mb-4 text-center">Make sure you have the right equipment for your media project. The following checklist will help you prepare:</p>
                    <div className="space-y-4 max-w-lg">
                      <p className="text-center">Cameras and lenses for your specific needs</p>
                      <p className="text-center">Audio recording equipment for quality sound</p>
                      <p className="text-center">Lighting equipment for professional results</p>
                      <p className="text-center">Memory cards and storage solutions</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="max-w-xs" asChild>
                      <a href="https://www.notion.so/Future-Equipment-Checklist-1fa2c7b380388038afa7c8ce1f328fb2?pvs=4" target="_blank" rel="noopener noreferrer">
                        View Equipment Checklist
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-6">
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>Service Materials</CardTitle>
                  <CardDescription>
                    Access all assets and files for service preparation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                      <h3 className="font-medium text-xl mb-3 text-center">All Assets & Resources</h3>
                      <p className="text-muted-foreground mb-4 text-center max-w-2xl mx-auto">
                        Find all the materials you need for service preparation, including banners, order of service documents, song lists, prayers, videos, and other content used in church services.
                      </p>
                      <div className="flex justify-center">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
                          <a href="https://www.notion.so/Service-Material-5a29ba456be048eab7a6174514c1acf8?pvs=4" target="_blank" rel="noopener noreferrer">
                            Open Service Materials
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tasks" className="mt-6">
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle>Department Tasks</CardTitle>
                  <CardDescription>
                    View and manage tasks for the visual department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                      <h3 className="font-medium text-xl mb-3 text-center">Task Management</h3>
                      <p className="text-muted-foreground mb-4 text-center max-w-2xl mx-auto">
                        Access the department task list, manage your assignments, track progress, and collaborate with team members on current and upcoming projects.
                      </p>
                      <div className="flex justify-center">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
                          <a href="https://www.notion.so/VISUAL-DEPARTMENT-1f82c7b38038801eb1d9fa401534c149?pvs=4" target="_blank" rel="noopener noreferrer">
                            Open Tasks
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Removed "Join the Visuals Department" section as requested */}
        </div>
      </div>
    </>
  );
}

export default VisualsPage;