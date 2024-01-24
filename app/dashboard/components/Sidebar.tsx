"use client";
import { Button } from "@/components/ui/button";
import { SidebarMenu } from "@/utils/product";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export const SidebarMenus: SidebarMenu[] = [
  {
    link: "/dashboard",
    label: "Dashboard",
    icon: <Icon icon="lucide:home" className="text-h6" />,
    child: [
      {
        link: "/deposit",
        label: "Deposit",
        icon: <Icon icon="ant-design:dollar-outlined" className="text-h6" />,
        child: [],
      },
      {
        link: "/deposit/history",
        label: "History",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"
            />
          </svg>
        ),
        child: [],
      },
    ],
  },
  {
    link: "/document",
    label: "Document",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14z" />
          <path strokeLinecap="round" d="M8 10h8m-8 4h5" />
        </g>
      </svg>
    ),
    child: [],
  },
  {
    link: "/meterai",
    label: "e-Meterai",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        >
          <path d="M5 8.8L8.8 5l3.8 2.85L16.4 5l3.8 2.85L24 5l3.8 2.85L31.6 5l3.8 2.85L39.2 5L43 8.8l-2.85 3.8L43 16.4l-2.85 3.8L43 24l-2.85 3.8L43 31.6l-2.85 3.8L43 39.2L39.2 43l-3.8-2.85L31.6 43l-3.8-2.85L24 43l-3.8-2.85L16.4 43l-3.8-2.85L8.8 43L5 39.2l2.85-3.8L5 31.6l2.85-3.8L5 24l2.85-3.8L5 16.4l2.85-3.8z" />
          <circle cx="24" cy="24" r="9" />
        </g>
      </svg>
    ),
    child: [],
  },
  {
    link: "#1",
    label: "Digital Signature",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M232 168H63.86c2.66-5.24 5.33-10.63 8-16.11c14.93 1.65 32.62-8.8 52.74-31.22c.6 1.66 1.27 3.37 2 5.1c6.51 15.25 14.91 23.94 25 25.85c10.34 2 20.58-3.23 31.08-15.82C189.5 143.87 203.5 152 232 152a8 8 0 0 0 0-16c-30.63 0-39.55-10.59-40-16.22a8 8 0 0 0-15.51-2.54c-12.17 18.25-19.38 19.14-22 18.66c-8.33-1.57-16.08-20.93-18.69-33.51a8 8 0 0 0-14.8-2.23c-19.8 24.62-33.08 33-41.41 35.14c8.49-18.88 14.83-35.45 18.89-49.4c6.82-23.44 7.32-39.83 1.51-50.1c-3-5.36-9.29-11.75-21.91-11.8h-.25c-16 .11-28.6 15.3-34.62 41.7c-3.59 15.71-4.18 33.19-1.63 48s7.86 25.51 15.55 31.89c-3.72 7.73-7.53 15.28-11.23 22.43H24a8 8 0 0 0 0 16h13.41c-11.32 21-20.12 35.64-20.26 35.88a8 8 0 1 0 13.71 8.24c.15-.26 11.27-18.79 24.7-44.12H232a8 8 0 0 0 0-16Zm-40-48v-.21a1.11 1.11 0 0 1 0 .21M58.79 69.26C62.78 51.78 70.48 40 78 40c5.25 0 7 1.86 8 3.67c3 5.33 6.52 24.19-21.65 86.37c-8.19-11.29-10.98-37.04-5.56-60.78"
        />
      </svg>
    ),
    child: [],
  },
  {
    link: "#2",
    label: "Digital Stamp",
    icon: <Icon icon="lucide:stamp" className="text-h6" />,
    child: [],
  },
  {
    link: "#",
    label: "Digital Certificate",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128m-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40m3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8m-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"
        />
      </svg>
    ),
    child: [],
  },
];

const Sidebar: React.FC = () => {
  const [search, setSearch] = useState<SidebarMenu[]>([]);
  const pathname = usePathname();

  const searchMenuHandler = (keyword: string) => {
    const results: SidebarMenu[] = [];
    const searchRecursively = (obj: SidebarMenu) => {
      if (
        Object.values(obj).some(
          (value) =>
            typeof value === "string" && value.toLowerCase().includes(keyword)
        )
      ) {
        results.push(obj);
      }

      if (obj.child && obj.child.length > 0) {
        obj.child.forEach((child) => searchRecursively(child));
      }
    };

    SidebarMenus.forEach((item: SidebarMenu) => searchRecursively(item));

    if (!keyword) {
      setSearch([]);
    } else {
      setSearch(results);
    }
  };

  return (
    <ul className="flex flex-col gap-1 2xl:gap-2">
      <input
        type="text"
        placeholder="🔍 Search.."
        className="bg-white rounded-lg text-xs border-[1px]
				focus:outline-none focus:border-blue-800 focus:bg-neutral-200 border-blue-300 py-2 pl-2 my-2"
        onKeyUp={(event: React.ChangeEvent<any>) =>
          searchMenuHandler(event.target.value)
        }
      />
      {search.length !== 0
        ? search.map((menu: SidebarMenu) => (
            <Link key={menu.link} href={menu.link}>
              <Button
                variant="default"
                className={
                  pathname !== menu.link
                    ? ` text-b2 text-white w-full bg-transparent flex justify-start hover:bg-white hover:text-blue-700 gap-3`
                    : ` text-b2 text-primary-900 w-full bg-primary-200 flex gap-3 justify-start hover:bg-primary-200 hover:text-primary-900`
                }
              >
                <span className="">{menu.icon}</span>
                <span>{menu.label}</span>
              </Button>
            </Link>
          ))
        : SidebarMenus.map((menu: SidebarMenu) => (
            <li className="" key={menu.link}>
              <Link href={menu.link}>
                <Button
                  variant="default"
                  className={
                    pathname !== menu.link
                      ? ` text-b2 text-white w-full bg-transparent flex justify-start hover:bg-white hover:text-blue-700 gap-3`
                      : ` text-b2 text-primary-900 w-full bg-primary-200 flex gap-3 justify-start hover:bg-primary-200 hover:text-primary-900`
                  }
                >
                  <span className="">{menu.icon}</span>
                  <span>{menu.label}</span>
                </Button>
              </Link>

              {menu.child ? (
                <ul className="">
                  {menu.child.map((subMenu: SidebarMenu) => (
                    <li className="ps-5 2xl:ps-8 pt-1" key={subMenu.link}>
                      <Link href={subMenu.link} className="">
                        <Button
                          variant="default"
                          className={
                            pathname !== subMenu.link
                              ? `text-b2 bg-transparent text-white w-full flex justify-start gap-3 hover:bg-white hover:text-blue-700`
                              : `text-b2 text-primary-900 w-full bg-primary-200 flex gap-3 justify-start hover:bg-primary-200 hover:text-primary-900`
                          }
                        >
                          {subMenu.icon}
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
  );
};

export default Sidebar;
