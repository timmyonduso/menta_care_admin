// src/components/clients/profile/TherapyTab.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClientProfile } from "@/types/client";

interface TherapyTabProps {
  client: ClientProfile;
}

export const TherapyTab = ({ client }: TherapyTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Therapy Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Assigned Therapist</p>
            <p className="font-medium">{client.assignedTherapist}</p>
          </div>
          {/* You can add more therapy-related fields here */}
        </div>
      </CardContent>
    </Card>
  );
};