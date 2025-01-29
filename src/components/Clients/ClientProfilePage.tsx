// src/components/clients/profile/ClientProfilePage.tsx
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { BasicInfo } from "./BasicInfo";
import { ProfileTab } from "./ProfileTab";
import { ClientProfile } from "@/types/client";

interface ClientProfilePageProps {
  clientId: string;
}

export const ClientProfilePage = ({ clientId }: ClientProfilePageProps) => {
  // In a real application, you would fetch the client data based on the clientId
  const client: ClientProfile = {
    id: clientId,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    registrationDate: "2024-01-15",
    subscriptionStatus: "active",
    subscriptionPlan: "Premium",
    subscriptionStartDate: "2024-01-15",
    subscriptionEndDate: "2025-01-15",
    assignedTherapist: "Dr. Michael Johnson",
    notes: "Client prefers evening sessions. Has made excellent progress with anxiety management."
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{client.name}</h1>
          <p className="text-gray-500">Client ID: {client.id}</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Edit2 className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-1">
          <BasicInfo client={client} />
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2">
          <ProfileTab client={client} />
        </div>
      </div>
    </div>
  );
};