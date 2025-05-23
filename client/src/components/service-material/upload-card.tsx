import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FileUpload from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

function UploadCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await apiRequest("POST", "/api/service-materials/upload", formData);
      return response.json();
    },
    onSuccess: () => {
      // Reset form
      setName("");
      setDescription("");
      setCategory("");
      setSelectedFiles([]);
      
      // Invalidate query to refresh data
      queryClient.invalidateQueries({ queryKey: ["/api/service-materials"] });
      
      // Show success message
      toast({
        title: "Upload Successful",
        description: "Your materials have been uploaded and are ready to use.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Upload Failed",
        description: error.message || "There was a problem uploading your materials.",
        variant: "destructive",
      });
    }
  });

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !category || selectedFiles.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields and select at least one file.",
        variant: "destructive",
      });
      return;
    }
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    
    selectedFiles.forEach(file => {
      formData.append("files", file);
    });
    
    uploadMutation.mutate(formData);
  };
  
  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="material-name">Material Name</Label>
              <Input 
                id="material-name" 
                placeholder="e.g. Service Banner, Song List, etc."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="material-description">Description (Optional)</Label>
              <Textarea
                id="material-description"
                placeholder="Brief description of the material"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="material-category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="material-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">Service Banner</SelectItem>
                  <SelectItem value="worship">Worship Materials</SelectItem>
                  <SelectItem value="video">Videos & Media</SelectItem>
                  <SelectItem value="announcement">Announcements</SelectItem>
                  <SelectItem value="sermon">Sermon Notes</SelectItem>
                  <SelectItem value="order">Order of Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Upload Files</Label>
              <FileUpload 
                onFilesSelected={handleFilesSelected}
                acceptedFileTypes="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                maxSizeInMB={20}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Uploading..." : "Upload Material"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default UploadCard;
