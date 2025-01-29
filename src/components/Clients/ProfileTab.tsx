// src/components/clients/profile/ProfileTabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientProfile } from "@/types/client";
import { SubscriptionTab } from "./SubscriptionTab";
import { TherapyTab } from "./TherapyTab";
import { NotesTab } from "./NotesTab";

interface ProfileTabsProps {
  client: ClientProfile;
}

export const ProfileTab = ({ client }: ProfileTabsProps) => {
  return (
    <Tabs defaultValue="subscription" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="subscription" className="flex-1">
          Subscription
        </TabsTrigger>
        <TabsTrigger value="therapy" className="flex-1">
          Therapy Details
        </TabsTrigger>
        <TabsTrigger value="notes" className="flex-1">
          Notes
        </TabsTrigger>
      </TabsList>

      <TabsContent value="subscription">
        <SubscriptionTab client={client} />
      </TabsContent>

      <TabsContent value="therapy">
        <TherapyTab client={client} />
      </TabsContent>

      <TabsContent value="notes">
        <NotesTab client={client} />
      </TabsContent>
    </Tabs>
  );
};
