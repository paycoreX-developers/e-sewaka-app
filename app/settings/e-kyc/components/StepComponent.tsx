"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import IntroTakeId from "./IntroTakeId";
import TakeId from "./TakeId";
import TakeSelfie from "./TakeSelfie";

const StepComponent = () => {
  const [enabled, setEnabled] = useState<number>(1);
  const [takeId, setTakeId] = useState<boolean>(false);

  return (
    <main className="rounded-2xl overflow-hidden bg-white">
      <Tabs defaultValue="account" className="w-full min-h-full ">
        <div className="flex justify-center items-center h-[150px] bg-gray-100">
          <TabsList className="w-3/4 flex justify-between items-center bg-transparent">
            <TabsTrigger
              value="card"
              className="w-1/2 h-[150px] 
								data-[state=active]:bg-transparent data-[state=active]:text-lg data-[state=active]:font-extrabold data-[state=active]:text-blue-500
								after:w-full after:border-2 after:ml-8 after:h-1 text-sm"
            >
              <div className="flex flex-col items-center">
                <img
                  src="/assets/logo/id.png"
                  alt=""
                  className="mb-3 w-[75px]"
                />
                <p>Upload ID Card</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="selfie"
              // disabled={enabled < 2}
              className="w-1/2 h-[150px] 
								data-[state=active]:bg-transparent data-[state=active]:text-lg data-[state=active]:font-extrabold data-[state=active]:text-blue-500
								after:w-full after:border-2 after:ml-8 after:h-1 text-sm"
            >
              <div className="flex flex-col items-center">
                <img
                  src="/assets/logo/selfie.png"
                  alt=""
                  className="mb-3 w-[75px]"
                />
                <p> Upload Selfie</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="finish"
              disabled={enabled < 3}
              className="w-fit h-[150px] 
								data-[state=active]:bg-transparent data-[state=active]:text-lg data-[state=active]:font-extrabold data-[state=active]:text-blue-500"
            >
              <div className="flex flex-col items-center text-sm">
                <img
                  src="/assets/logo/finish.png"
                  alt=""
                  className="mb-3 w-[75px]"
                />
                <p>Finish</p>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="card" className="min-h-[500px] bg-white p-5">
          {takeId ? <TakeId /> : <IntroTakeId setTakeId={setTakeId} />}
        </TabsContent>
        <TabsContent
          value="selfie"
          className="min-h-[500px] bg-white py-5 px-7"
        >
          <TakeSelfie />
        </TabsContent>
        <TabsContent
          value="finish"
          className="min-h-[500px] bg-white py-5 px-7"
        >
          Change your password here.
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default StepComponent;
