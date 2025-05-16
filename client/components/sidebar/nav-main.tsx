"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboardNavigationItems } from "@/config/navigation-items";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { NonCollapsibleSidebarGroup } from "./non-collapsible-sidebar-group";

export function AppNav() {
  return (
    <>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <NonCollapsibleSidebarGroup sidebarConfig={dashboardNavigationItems} />
    </>
  );
}
