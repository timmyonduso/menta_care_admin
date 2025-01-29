"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ClientProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string; // ISO date format (YYYY-MM-DD)
  subscriptionStatus: "active" | "inactive" | "expired"; // Subscription state
  subscriptionPlan?: string; // Optional: e.g., "Premium", "Basic"
  subscriptionStartDate?: string; // ISO date format
  subscriptionEndDate?: string; // ISO date format
  assignedTherapist?: string; // Therapist name or ID
  notes?: string; // Admin notes about the client
};

export const columns: ColumnDef<ClientProfile>[] = [
  {
      id: "select",
      header: ({ table }) => (
          <Checkbox
              checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
              aria-label="Select all"
          />
      ),
      cell: ({ row }) => (
          <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
          />
      ),
      enableSorting: false,
      enableHiding: false,
  },
  {
      accessorKey: "name",
      header: ({ column }) => (
          <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
      ),
  },
  {
      accessorKey: "email",
      header: "Email",
  },
  {
      accessorKey: "phone",
      header: "Phone",
  },
  {
      accessorKey: "registrationDate",
      header: ({ column }) => (
          <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
              Registration Date
              <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
      ),
  },
  {
      accessorKey: "subscriptionStatus",
      header: "Status",
      cell: ({ row }) => {
          const status = row.getValue("subscriptionStatus") as string
          return (
              <div className={`capitalize ${
                  status === "active" ? "text-green-600" :
                  status === "inactive" ? "text-yellow-600" :
                  "text-red-600"
              }`}>
                  {status}
              </div>
          )
      }
  },
  {
      accessorKey: "subscriptionPlan",
      header: "Plan",
  },
  {
      accessorKey: "subscriptionStartDate",
      header: "Start Date",
  },
  {
      accessorKey: "subscriptionEndDate",
      header: "End Date",
  },
  {
      accessorKey: "assignedTherapist",
      header: "Therapist",
  },
  {
      accessorKey: "notes",
      header: "Notes",
  },
  {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
          const client = row.original
          return (
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="default" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white dark:bg-boxdark dark:text-white">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator className="dark:bg-white"/>
                      <DropdownMenuItem
                          onClick={() => navigator.clipboard.writeText(client.id)}
                      >
                          View Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator/>
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                      <DropdownMenuItem>Manage Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
          )
      },
  },
]
