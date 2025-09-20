import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const username = "Vincent";
  return (
    <div className="flex  items-center h-[94px] border w-[100%] px-[24px]">
      <div className="w-[50%] flex items-center gap-[10px]">
        <SidebarTrigger />
        <p className="font-[700] text-[20px]">Welcome back, {username} 👋</p>
      </div>

      <div className="w-[50%] flex justify-end items-center">
        <div className="flex justify-between items-center gap-[20px]">
          <Image
            src={"/icons/Search.svg"}
            width={22}
            height={22}
            alt="tobams"
          />

          <Image
            src={"/icons/Notifications.svg"}
            width={22}
            height={22}
            alt="tobams"
          />
          <span className="flex items-center gap-[5px]">
            {" "}
            <Image src={"/icons/cal.svg"} width={22} height={22} alt="tobams" />
            <p className="font-[600] text-[16px] text-[#1C1D2280]">
              19 May 2022
            </p>
          </span>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
