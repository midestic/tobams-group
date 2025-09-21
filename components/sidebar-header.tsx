import React from "react";
import { SidebarMenu, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";

export default function SideHeader() {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenuItem>
          {" "}
          {/* <SidebarMenuSubButton asChild> */}
          <Link href={"/"} className="flex gap-[20px] p-[10px] text-[20px]">
            <Image src={"/icons/Logo.svg"} alt="logo" width={24} height={26} />
            <span>Tobams</span>
          </Link>
          {/* </SidebarMenuSubButton>{" "} */}
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
}
