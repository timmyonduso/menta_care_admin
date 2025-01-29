import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, Calendar } from "lucide-react";
import { ClientProfile } from "@/types/client";

interface BasicInfoProps {
  client: ClientProfile;
}

export const BasicInfo = ({ client }: BasicInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{client.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{client.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{client.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Registration Date</p>
            <p className="font-medium">
              {new Date(client.registrationDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};