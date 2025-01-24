"use client"
import { useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { userContext } from '@/pages/Dashboard.jsx';
import {
  AudioWaveform,
  CoffeeIcon,
  Command,
  FileQuestionIcon,
  ForkKnifeCrossedIcon,
  GalleryVerticalEnd,
  HelpCircleIcon,
  HomeIcon,
  PieChart,
  PillBottleIcon,
  UserCheck2Icon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main.js"
import { NavProjects } from "@/components/nav-projects.js"
import { NavUser } from "@/components/nav-user.js"
import { TeamSwitcher } from "@/components/team-switcher.js"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar.js"
// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useContext(userContext);
  const location = useLocation();
  const currentPath = location.pathname;
  const data = {
    user: {
      name: "Account details",
      email: user?.email || "n@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Maze POS",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/home/",
        icon: HomeIcon,
        isActive: true,
        items: [
          {
            title: "Overview",
            url: "/dashboard/home",
          },
          {
            title: "General Report",
            url: "/dashboard/general-report",
          },
          {
            title: "Waiter Report",
            url: "/dashboard/waiter-orders",
          },
          {
            title: "Debt Report",
            url: "/dashboard/unpaid-reports",
          },
        ],
      },
      {
        title: "Tea & Coffee",
        url: "#",
        icon: CoffeeIcon,
        items: [
          {
            title: "Add Tea/Coffee",
            url: "/dashboard/add-tea",
          },
          {
            title: "View Tea/Coffee",
            url: "/dashboard/view-teas",
          },
        ],
      },
      {
        title: "Food & Meals",
        url: "#",
        icon: ForkKnifeCrossedIcon,
        items: [
          {
            title: "Add Meal",
            url: "/dashboard/add-meal",
          },
          {
            title: "View Meals",
            url: "/dashboard/view-meals",
          },
          {
            title: "Track Food",
            url: "#",
          },
          {
            title: "Meal Reports",
            url: "#",
          },
        ],
      },
      {
        title: "Beverages",
        url: "#",
        icon: PillBottleIcon,
        items: [
          {
            title: "Add Beverage",
            url: "/dashboard/add-beverage",
          },
          {
            title: "View Beverages",
            url: "/dashboard/view-beverages",
          },
          {
            title: "Track Beverages",
            url: "#",
          },
          {
            title: "Beverage Reports",
            url: "#",
          },
        ],
      },
      {
        title: "Manage Staff",
        url: "#",
        icon: UserCheck2Icon,
        items: [
          {
            title: "Add Waiter",
            url: "/dashboard/add-waiter",
          },
          {
            title: "View Waiters",
            url: "/dashboard/view-waiters",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Help Center",
        url: "#",
        icon: HelpCircleIcon,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "FAQ",
        url: "#",
        icon: FileQuestionIcon,
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} currentPath={currentPath} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
