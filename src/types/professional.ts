// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Professional = {
    id: string
    name: string;
    email: string
    applicationDate: string;
    status: "pending" | "processing" | "approved" | "denied"
}

// src/types/professional.ts
export interface ProfessionalApplication {
    userId: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    email: string;
    resume: string;
    description: string;
    idFront: string;
    idBack: string;
    applicationDate?: string;
    status?: 'pending' | 'approved' | 'denied';
  }
  