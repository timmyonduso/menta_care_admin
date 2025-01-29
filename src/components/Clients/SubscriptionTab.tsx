// src/components/clients/profile/SubscriptionTab.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClientProfile } from "@/types/client";

interface SubscriptionTabProps {
  client: ClientProfile;
}

export const SubscriptionTab = ({ client }: SubscriptionTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <div
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                ${
                  client.subscriptionStatus === "active"
                    ? "bg-green-100 text-green-800"
                    : client.subscriptionStatus === "inactive"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
            >
              {client.subscriptionStatus}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Plan</p>
            <p className="font-medium">{client.subscriptionPlan}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Start Date</p>
            <p className="font-medium">
              {client.subscriptionStartDate &&
                new Date(client.subscriptionStartDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">End Date</p>
            <p className="font-medium">
              {client.subscriptionEndDate &&
                new Date(client.subscriptionEndDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};