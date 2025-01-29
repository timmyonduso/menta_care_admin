// src/components/clients/profile/NotesTab.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClientProfile } from "@/types/client";

interface NotesTabProps {
  client: ClientProfile;
}

export const NotesTab = ({ client }: NotesTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Administrative Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 whitespace-pre-wrap">{client.notes}</p>
      </CardContent>
    </Card>
  );
};