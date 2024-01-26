"use client";

import Header from "@/components/custom/Header";
import ProfileComponent from "./components/ProfileComponent";
import FormBasicInfo from "./components/FormBasicInfo";
import PhotoProfileForm from "./components/PhotoProfileForm";

export default function page() {
  return (
    <main>
      <Header title="Profile" subtitle="Getting to Know You" />
      <div className="bg-gray-100 lg:h-[500px] w-full flex flex-col items-center rounded-3xl">
        <div
          className="w-full flex items-center gap-5 p-5 lg:p-8
				 hover:bg-blue-200 rounded-t-3xl hover:duration-300"
        >
          <div className="w-[35%] lg:w-1/12 ">
            <PhotoProfileForm />
          </div>
          <div className="w-3/4">
            <ProfileComponent profile={"asd"} />
          </div>
        </div>
        <div className="bg-white h-full w-full p-5 gap-5 rounded-b-3xl">
          <div className="w-full h-full">
            <h2 className="text-xl font-bold mb-2">Basic Info</h2>
            <div className="border-[1px] p-3 rounded-xl">
              <FormBasicInfo profile={"asd"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
