import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import StatusBadge from "@/components/ui/status-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Upload } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Status, getInitials, formatDate } from "@/lib/utils";
import { ServiceMaterial } from "@shared/schema";

interface MaterialTableProps {
  onViewItem: (item: ServiceMaterial) => void;
  onUpdateItem: (item: ServiceMaterial) => void;
}

function MaterialTable({ onViewItem, onUpdateItem }: MaterialTableProps) {
  const { data: materials, isLoading } = useQuery<ServiceMaterial[]>({
    queryKey: ["/api/service-materials"],
  });

  if (isLoading) {
    return <div className="py-10 text-center">Loading service materials...</div>;
  }

  if (!materials || materials.length === 0) {
    return (
      <div className="py-10 text-center text-muted-foreground">
        No service materials found. Upload some materials to get started.
      </div>
    );
  }

  return (
    <DataTable
      columns={[
        {
          header: "Service Segments",
          cell: (item) => (
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ),
        },
        {
          header: "Status",
          accessorKey: "status",
          cell: (item) => <StatusBadge status={item.status as Status} />,
        },
        {
          header: "Last Edited",
          cell: (item) => (
            <div className="flex items-center text-sm">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={item.editor.avatarUrl} alt={item.editor.name} />
                <AvatarFallback>{getInitials(item.editor.name)}</AvatarFallback>
              </Avatar>
              <div>
                <div>{item.editor.name}</div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(item.updatedAt)}
                </div>
              </div>
            </div>
          ),
        },
        {
          header: "Actions",
          cell: (item) => (
            <div className="flex justify-end space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewItem(item);
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateItem(item);
                }}
              >
                <Upload className="h-4 w-4 mr-2" />
                Update
              </Button>
            </div>
          ),
          className: "text-right",
        },
      ]}
      data={materials}
      keyExtractor={(item) => item.id}
      onRowClick={onViewItem}
    />
  );
}

export default MaterialTable;
