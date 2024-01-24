import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title: string | React.ReactNode;
  subtitle: string;
  backLink?: string;
};

const Header: React.FC<Props> = ({ title, subtitle, backLink }) => {
  return (
    <div className="absolute top-[8%] xl:top-9 2xl:top-16 w-[60%] lg:w-full">
      <h1 className="lg:text-xl 2xl:text-4xl font-extrabold lg:mb-2 2xl:mb-4">
        {title}
      </h1>
      <p className="text-sm 2xl:text-lg">{subtitle}</p>
      {backLink ? (
        <Link
          href={backLink ? backLink : "#"}
          className="2xl:text-xl text-blue-500 font-semibold flex items-center gap-3 mt-5"
        >
          <ChevronLeft />
          Back
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
