"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import axios from "axios";
import { useAuth } from "@/app/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfileSidebar: React.FC = () => {
  const router = useRouter();

  const { uuid, token, profile, setProfile } = useAuth();

  // Handler for Logout
  const handlerLogout = async () => {
    console.log(profile);
    let payload = { uuid: uuid };
    await axios({
      url: "/api/apps/users/logout",
      method: "POST",
      headers: {
        x_access_token: token,
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status == 200) {
          //set on LocalStorage
          try {
            window.localStorage.setItem("profile", "");
            window.localStorage.setItem("x_access_token", "");
            window.localStorage.setItem("uuid", "");
            window.localStorage.setItem("phone", "");
            document.cookie = `token=; path=/; expires= Thu, 21 Aug 2014 20:00:00 UTC;`;
          } catch (error) {}
          //set on useContext

          setProfile({});
          // and navigate to /
          router.push("/auth/login", { scroll: false });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-white flex items-center gap-5">
          <Avatar>
            <AvatarFallback className="text-blue-700 text-xl ">
              {profile?.img_url ? (
                <img
                  src={profile && profile?.img_url}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                profile?.full_name.charAt(0)
              )}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <p className="text-sm line-clamp-1 hidden lg:block">
              {profile?.full_name ? profile?.full_name : ""}
            </p>
            <p className="text-sm line-clamp-1 hidden lg:block">
              {profile?.email ? profile?.email : "-"}
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-neutral-500 hover:text-white">
            <Link href="/profile" className="block w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-red-500 font-bold hover:bg-red-600 hover:text-white">
            <AlertDialogTrigger className="w-full text-start">
              Log Out
            </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure want to logout your account?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={handlerLogout}>
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProfileSidebar;
