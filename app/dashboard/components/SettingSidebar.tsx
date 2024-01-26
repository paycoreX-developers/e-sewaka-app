import React from "react";
import { SlSettings } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const SettingSidebar: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center gap-5 lg:w-full lg:border-b lg:mb-4 lg:pb-4">
        <SlSettings className="text-3xl lg:text-lg" />
        <span className="hidden lg:block">Settings</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-neutral-500 hover:text-white">
          <Link href="/settings/e-kyc" className="block w-full">
            EKYC
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-neutral-500 hover:text-white">
          <Link href="/preferences" className="block w-full">
            System Prefernces
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingSidebar;
