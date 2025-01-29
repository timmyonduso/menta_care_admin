import PageTitle from "@/components/PageTitle"
import { ClientProfile, columns } from "./columns"
import { DataTable } from "./data-table"

const getData = (): ClientProfile[] => {
  return [
      {
          id: "1a2b3c4d",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+1234567890",
          registrationDate: "2025-01-01",
          subscriptionStatus: "active",
          subscriptionPlan: "Premium",
          subscriptionStartDate: "2025-01-01",
          subscriptionEndDate: "2025-12-31",
          assignedTherapist: "Dr. Alice Brown",
          notes: "Attending weekly sessions.",
      },
      {
          id: "2b3c4d5e",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "+1987654321",
          registrationDate: "2025-01-02",
          subscriptionStatus: "inactive",
          subscriptionPlan: "Basic",
          subscriptionStartDate: "2025-01-02",
          subscriptionEndDate: "2025-06-30",
          assignedTherapist: "Dr. Bob Williams",
          notes: "Paused due to personal reasons.",
      },
      {
          id: "3c4d5e6f",
          name: "Michael Brown",
          email: "michael.brown@example.com",
          phone: "+1122334455",
          registrationDate: "2025-01-03",
          subscriptionStatus: "expired",
          subscriptionPlan: "Standard",
          subscriptionStartDate: "2024-01-03",
          subscriptionEndDate: "2024-12-31",
          assignedTherapist: "Dr. Carol White",
          notes: "Needs renewal confirmation.",
      },
      {
          id: "4d5e6f7g",
          name: "Emily Davis",
          email: "emily.davis@example.com",
          phone: "+2233445566",
          registrationDate: "2025-01-04",
          subscriptionStatus: "active",
          subscriptionPlan: "Premium",
          subscriptionStartDate: "2025-01-04",
          subscriptionEndDate: "2025-12-31",
          assignedTherapist: "Dr. David Johnson",
          notes: "Recently upgraded to Premium.",
      },
      {
          id: "5e6f7g8h",
          name: "Chris Wilson",
          email: "chris.wilson@example.com",
          phone: "+3344556677",
          registrationDate: "2025-01-05",
          subscriptionStatus: "inactive",
          subscriptionPlan: "Basic",
          subscriptionStartDate: "2025-01-05",
          subscriptionEndDate: "2025-06-30",
          assignedTherapist: "Dr. Emily Adams",
          notes: "Requested therapist change.",
      },
      {
          id: "6f7g8h9i",
          name: "Sarah Johnson",
          email: "sarah.johnson@example.com",
          phone: "+4455667788",
          registrationDate: "2025-01-06",
          subscriptionStatus: "active",
          subscriptionPlan: "Standard",
          subscriptionStartDate: "2025-01-06",
          subscriptionEndDate: "2025-12-31",
          assignedTherapist: "Dr. Frank Miller",
          notes: "No issues reported.",
      }
  ];
};

  
  
  const ClientsPage = () => {
    const data = getData()
  
    return (
      <>
        <PageTitle title="Clients | Serenity Care Dashboard" />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </>
    )
  }
  
  export default ClientsPage