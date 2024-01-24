import { Metadata } from "next";
import style from "./style.module.css";

export const metadata: Metadata = {
  title: "E-Sewaka | Authentication",
  description: "E-Sewaka Authentication Login or Register Page",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        style.bg__auth +
        " min-h-screen w-full max-w-full overflow-hidden flex justify-center items-center"
      }
    >
      <div className="w-3/4 min-w-[300px] max-w-[450px] bg-white text-black rounded-2xl">
        {children}
      </div>
    </div>
  );
}
