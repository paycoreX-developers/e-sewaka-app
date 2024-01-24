import ProfileSidebar from "./components/ProfileSidebar";
import SettingSidebar from "./components/SettingSidebar";
import Sidebar from "./components/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="grid grid-cols-12 max-h-screen min-h-screen bg-gradient-to-b from-secondary-300 from-60% to-success-400 to-100%
    max-w-full overflow-hidden py-[2vh] 2xl:py-[3vh]"
    >
      <div
        className="lg:col-span-2 px-2 2xl:ps-10 min-h-[600px] h-[96vh] 2xl:h-[94vh]
		 			hidden lg:flex flex-col justify-around pb-10"
      >
        <div className="flex flex-col 2xl:-mt-20 justify-start ">
          <div className="w-full">
            <img
              src="/assets/auth/Logo_BSM_white.webp"
              alt=""
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
      {children}
    </main>
  );
}
