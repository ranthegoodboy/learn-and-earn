"use client";

import { ChevronsUpDown, Scissors, Shield } from "lucide-react";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const modes = [
  {
    name: "App View",
    color: "#00E09E",
    label: "App",
    logo: Scissors,
  },
  {
    name: "Admin View",
    color: "#c51212",
    label: "Admin",
    logo: Shield,
  },
];

export function AppViewSwitcher() {
  const { isMobile } = useSidebar();
  const [activeView, setaActiveView] = React.useState(modes[0]);

  if (!activeView) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeView.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeView.name}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            {modes.map((mode) => (
              <DropdownMenuItem
                key={mode.name}
                onClick={() => setaActiveView(mode)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm">
                  <mode.logo className="size-5 shrink-0" />
                </div>
                {mode.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
