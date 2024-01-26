"use client";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  setTakeId: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroTakeId: React.FC<Props> = ({ setTakeId }) => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-3">
      <div className="w-1/2 h-[500px] flex flex-col justify-center items-center gap-5">
        <img
          src="/assets/profile/idcard.png"
          alt=""
          className="w-3/4 lg:w-1/2"
        />
        <p className="">
          Notes : <br />
          Pastikan KTP masih berlaku dan foto terbaca dengan jelas
        </p>
      </div>
      <div className="w-1/2 px-5">
        <div
          className="bg-[#EAFDF4] border-2 py-3 px-5 border-[#95D4B6]
                    w-full h-fit flex items-center gap-5 rounded-xl"
        >
          <img src="/assets/profile/guard.png" alt="" className="h-[40px]" />
          <span>
            Semua data anda sepenuhnya aman dan
            <br />
            rahasia di sistem kami
          </span>
        </div>
        <Button
          className="bg-blue-700 mt-5 w-full"
          onClick={() => setTakeId(true)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default IntroTakeId;
