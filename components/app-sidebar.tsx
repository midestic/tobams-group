import { ChevronDown, Plus, Projector } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuSubButton asChild>
              <Link href={"/"}>
                <Image src={"/next.svg"} alt="logo" width={20} height={20} />
                <span>Midestic Dash</span>
              </Link>
            </SidebarMenuSubButton>{" "}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-[700] text-[30px]">
            Projects
          </SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Projects</span>
          </SidebarGroupAction>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <span className="font-[700] text-[16px]"> Projects</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href={"/"}
                        className=" font-[700] text-[16px] text-white"
                      >
                        <Projector /> All Projects
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        className=" font-[700] text-[16px] text-white"
                        href={"/"}
                      >
                        <Plus /> Design System
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        className=" font-[700] text-[16px] text-white"
                        href={"/"}
                      >
                        <Plus /> User flow
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>{" "}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        className=" font-[700] text-[16px] text-white"
                        href={"/"}
                      >
                        <Plus /> Ux research
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>{" "}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
