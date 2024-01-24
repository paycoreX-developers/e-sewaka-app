import style from "./style.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        style.bg__auth +
        " min-h-screen w-full max-w-full overflow-hidden flex justify-center items-center"
      }
    >
      <div className="w-3/4 min-w-[300px] max-w-[400px] bg-white text-black rounded-2xl">
        {children}
      </div>
    </div>
  );
}
