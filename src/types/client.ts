// src/types/client.ts
export type ClientProfile = {
    id: string;
    name: string;
    email: string;
    phone: string;
    registrationDate: string;
    subscriptionStatus: "active" | "inactive" | "expired";
    subscriptionPlan?: string;
    subscriptionStartDate?: string;
    subscriptionEndDate?: string;
    assignedTherapist?: string;
    notes?: string;
  };