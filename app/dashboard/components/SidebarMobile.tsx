"use client";
import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SidebarMenus } from "./Sidebar";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "./ProfileSidebar";
import SettingSidebar from "./SettingSidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarMenu } from "@/utils/product";
import Image from "next/image";

const SidebarMobile: React.FC = () => {
  const pathname = usePathname();

  return (
    <SheetContent className="bg-gradient-to-t overflow-y-auto from-sky-800 to-teal-700 text-white">
      <SheetHeader className="flex gap-5  justify-between">
        <SheetTitle className="flex justify-center pb-5">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src="/assets/Logo_BSM_white.png"
            alt=""
            className="w-1/3 self-center mt-10"
          />
        </SheetTitle>
      </SheetHeader>
      <div className="w-full mt-5">
        <ul className="flex flex-col items-center gap-[2vh] ">
          {SidebarMenus.map((menu: SidebarMenu) => (
            <li className="" key={menu.link}>
              <Link href={menu.link}>
                <Button
                  variant="link"
                  className={
                    pathname !== menu.link
                      ? `text-white w-full bg-transparent flex justify-start hover:text-emerald-100`
                      : `text-white w-full flex justify-start underline hover:text-emerald-500`
                  }
                >
                  <span>{menu.label}</span>
                </Button>
              </Link>

              {menu.child ? (
                <ul className="flex flex-col items-center">
                  {menu.child.map((subMenu: SidebarMenu) => (
                    <li className="pt-[2vh]" key={subMenu.link}>
                      <Link href={subMenu.link} className="">
                        <Button
                          variant="link"
                          className={
                            pathname !== subMenu.link
                              ? `bg-transparent text-white w-full flex justify-start gap-3 hover:text-emerald-100`
                              : `text-white w-full flex gap-3 justify-start underline hover:text-emerald-500`
                          }
                        >
                          {subMenu.label}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-0"></ul>
              )}
            </li>
          ))}
        </ul>
        <div className="grid place-content-center mt-10">
          <div className="w-full flex items-stretch justify-center gap-10 border-t pt-5 lg:border-none">
            <ProfileSidebar />
            <SettingSidebar />
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default SidebarMobile;
