export const sidebarMenuItems = [
    {
      label: "Dashboard",
      icon: "dashboard-icon.svg", // Replace with the actual icon or SVG
      route: "/dashboard",
      subItems: [
        { label: "Overview", route: "/dashboard/overview" },
        { label: "Analytics", route: "/dashboard/analytics" },
      ],
    },
    {
      label: "Clients",
      icon: "clients-icon.svg",
      route: "/clients",
      subItems: [
        { label: "Manage Clients", route: "/clients/manage" },
        { label: "Add Client", route: "/clients/add" },
      ],
    },
    {
      label: "Resources",
      icon: "resources-icon.svg",
      route: "/resources",
      subItems: [
        { label: "All Resources", route: "/resources/all" },
        { label: "Upload Resource", route: "/resources/upload" },
      ],
    },
    {
      label: "Appointments",
      icon: "appointments-icon.svg",
      route: "/appointments",
      subItems: [
        { label: "Upcoming", route: "/appointments/upcoming" },
        { label: "Past", route: "/appointments/past" },
      ],
    },
  ];
  