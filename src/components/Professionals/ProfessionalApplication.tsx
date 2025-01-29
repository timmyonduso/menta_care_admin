  // src/components/professionals/application/ApplicationView.tsx
  import { useState } from 'react';
  import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Badge } from "@/components/ui/badge";
  import { 
    User, 
    Mail, 
    Calendar, 
    FileText, 
    CheckCircle, 
    XCircle 
  } from "lucide-react";
import { ProfessionalApplication } from '@/types/professional';
  
  interface ApplicationViewProps {
    application: ProfessionalApplication;
    onApprove: (userId: string) => void;
    onDeny: (userId: string) => void;
  }
  
  export const ApplicationView = ({ 
    application,
    onApprove,
    onDeny
  }: ApplicationViewProps) => {
    const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  
    const getStatusColor = (status?: string) => {
      switch (status) {
        case 'approved':
          return 'bg-green-100 text-green-800';
        case 'denied':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-yellow-100 text-yellow-800';
      }
    };
  
    const DocumentPreview = ({ url, title }: { url: string; title: string }) => (
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full h-32 relative group"
            onClick={() => setSelectedDocument(url)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <FileText className="w-8 h-8 text-gray-500 group-hover:text-gray-700" />
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-sm">
              {title}
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 w-full h-full">
            <iframe 
              src={url} 
              className="w-full h-full border-0"
              title={title}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  
    return (
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Professional Application</h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500">Application Status:</p>
              <Badge className={getStatusColor(application.status)}>
                {application.status || 'Pending'}
              </Badge>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => onDeny(application.userId)}
            >
              <XCircle className="h-4 w-4" />
              Deny Application
            </Button>
            <Button
              className="flex items-center gap-2"
              onClick={() => onApprove(application.userId)}
            >
              <CheckCircle className="h-4 w-4" />
              Approve Application
            </Button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Applicant Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={application.imageUrl}
                  alt={`${application.firstName} ${application.lastName}`}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{`${application.firstName} ${application.lastName}`}</h3>
                  <p className="text-sm text-gray-500">{application.email}</p>
                </div>
              </div>
  
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-2">Application Description</p>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {application.description}
                </p>
              </div>
  
              {application.applicationDate && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Applied on: {new Date(application.applicationDate).toLocaleDateString()}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
  
          {/* Documents */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Submitted Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DocumentPreview 
                  url={application.resume} 
                  title="Professional Resume"
                />
                <DocumentPreview 
                  url={application.idFront} 
                  title="ID Front"
                />
                <DocumentPreview 
                  url={application.idBack} 
                  title="ID Back"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };