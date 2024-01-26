import Image from "next/image";
import ProfileSidebar from "../dashboard/components/ProfileSidebar";
import SettingSidebar from "../dashboard/components/SettingSidebar";
import Sidebar from "../dashboard/components/Sidebar";
import { Metadata } from "next";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarMobile from "../dashboard/components/SidebarMobile";

export const metadata: Metadata = {
  title: "E-Sewaka | Deposit",
  description: "Deposit Page ",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="grid grid-cols-12 max-h-screen min-h-screen from-60% to-100% bg-gradient-to-b from-[#005692] to-[#01755D]
      max-w-full overflow-hidden py-[2vh] 2xl:py-[3vh]"
    >
      <div
        className="lg:col-span-2 px-2 2xl:ps-10 min-h-[600px] h-[96vh] 2xl:h-[94vh]
		 			hidden lg:flex flex-col justify-around pb-10"
      >
        <div className="flex flex-col 2xl:-mt-20 justify-start ">
          <div className="w-full">
            <Image
              src="/assets/logo/Logo_BSM_white.png"
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="max-w-[150px] lg:w-[55%] 2xl:w-[65%] my-2 ml-4 align-middle"
            />
          </div>
          <div className="">
            <Sidebar />
          </div>
        </div>
        <div className="lg:text-sm 2xl:text-base lg:px-4 mt-2">
          <SettingSidebar />
          <ProfileSidebar />
        </div>
      </div>
      <div
        className="col-span-full lg:col-span-10 max-w-full min-h-[600px] h-[96vh] 2xl:h-[94vh] overflow-x-hidden lg:rounded-none
					rounded-xl lg:rounded-tl-3xl lg:rounded-bl-3xl  bg-primary-100
					overflow-y-auto relative z-10"
      >
        <Image
          alt=""
          src={"/assets/ornamen_layout.png"}
          width={0}
          height={0}
          sizes="100%"
          className="w-1/2 absolute top-4 right-0"
        />
        <Sheet>
          <SheetTrigger
            className="absolute top-[8%] w-12 right-5 z-20 py-3 hover:brightness-125 hover:shadow-sm
						 	hover:duration-300 rounded-lg hover:bg-teal-900 hover:text-white  text-teal-800 lg:hidden"
          >
            <Menu className="w-full aspect-square" />
          </SheetTrigger>
          <SidebarMobile />
        </Sheet>
        <div className="mt-[15vh] px-5 py-10 lg:px-10">{children}</div>
      </div>
    </main>
  );
}
