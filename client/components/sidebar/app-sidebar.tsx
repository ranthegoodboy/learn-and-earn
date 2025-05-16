import { AppNav } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { secondaryNavigationItems } from "@/config/navigation-items";
import * as React from "react";
import { AppViewSwitcher } from "./app-view-swticher";
import { NavSecondary } from "./nav-secondary";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <AppViewSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <AppNav />
        <NavSecondary items={secondaryNavigationItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
