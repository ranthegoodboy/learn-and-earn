"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { CollapsibleNavigationType } from "@/constants/navigation-items";

export function CollapsibleSidebarGroup({
  sidebarConfig,
}: {
  sidebarConfig: CollapsibleNavigationType;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{sidebarConfig.label}</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible
          key={sidebarConfig.title}
          asChild
          defaultOpen={sidebarConfig.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={sidebarConfig.title}>
                {sidebarConfig.icon && <sidebarConfig.icon />}
                <span>{sidebarConfig.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {sidebarConfig.items?.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={item.url}>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
