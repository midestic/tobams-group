import Image from "next/image";
import React from "react";

const icons = [
  "/icons/Logo.svg",
  "/icons/project.svg",
  "/icons/user.svg",
  "/icons/calender.svg",
  "/icons/stat.svg",
  "/icons/cloud.svg",
  "/icons/scroll.svg",
  "/icons/settings.svg",
];

export default function SideIcons() {
  return (
    <div className="bg-[#1c1d22] flex flex-col items-center gap-[20px] w-[90px] h-screen">
      {icons.map((item, i) => (
        <div key={i}>
          <Image
            className="text-white"
            src={item}
            width={22}
            height={22}
            alt="tobams"
          />
        </div>
      ))}
    </div>
  );
}
