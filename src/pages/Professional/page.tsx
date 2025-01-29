import PageTitle from "@/components/PageTitle"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Professional } from "@/types/professional";

const getData = (): Professional[] => {
    // This would typically be an API call
    return [
      {
        id: "1a2b3c4d",
        name: "John Doe",
        email: "john.doe@example.com",
        applicationDate: "2025-01-01",
        status: "pending",
      },
      {
        id: "2b3c4d5e",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        applicationDate: "2025-01-02",
        status: "approved",
      },
      {
        id: "3c4d5e6f",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        applicationDate: "2025-01-03",
        status: "denied",
      },
      {
        id: "4d5e6f7g",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        applicationDate: "2025-01-04",
        status: "processing",
      },
      {
        id: "5e6f7g8h",
        name: "Chris Wilson",
        email: "chris.wilson@example.com",
        applicationDate: "2025-01-05",
        status: "approved",
      },
      {
        id: "6f7g8h9i",
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        applicationDate: "2025-01-06",
        status: "pending",
      },
      {
        id: "7g8h9i0j",
        name: "David Martinez",
        email: "david.martinez@example.com",
        applicationDate: "2025-01-07",
        status: "processing",
      },
      {
        id: "8h9i0j1k",
        name: "Laura White",
        email: "laura.white@example.com",
        applicationDate: "2025-01-08",
        status: "approved",
      },
      {
        id: "9i0j1k2l",
        name: "Peter Parker",
        email: "peter.parker@example.com",
        applicationDate: "2025-01-09",
        status: "pending",
      },
      {
        id: "0j1k2l3m",
        name: "Clark Kent",
        email: "clark.kent@example.com",
        applicationDate: "2025-01-10",
        status: "approved",
      },
      {
        id: "1k2l3m4n",
        name: "Diana Prince",
        email: "diana.prince@example.com",
        applicationDate: "2025-01-11",
        status: "denied",
      },
      {
        id: "2l3m4n5o",
        name: "Bruce Wayne",
        email: "bruce.wayne@example.com",
        applicationDate: "2025-01-12",
        status: "pending",
      },
      {
        id: "3m4n5o6p",
        name: "Natasha Romanoff",
        email: "natasha.romanoff@example.com",
        applicationDate: "2025-01-13",
        status: "approved",
      },
      {
        id: "4n5o6p7q",
        name: "Tony Stark",
        email: "tony.stark@example.com",
        applicationDate: "2025-01-14",
        status: "denied",
      },
      {
        id: "5o6p7q8r",
        name: "Steve Rogers",
        email: "steve.rogers@example.com",
        applicationDate: "2025-01-15",
        status: "pending",
      },
      {
        id: "6p7q8r9s",
        name: "Wanda Maximoff",
        email: "wanda.maximoff@example.com",
        applicationDate: "2025-01-16",
        status: "approved",
      },
    ];
  };
  
  
  const ProfessionalPage = () => {
    const data = getData()
  
    return (
      <>
        <PageTitle title="Professionals | Serenity Care Dashboard" />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </>
    )
  }
  
  export default ProfessionalPage