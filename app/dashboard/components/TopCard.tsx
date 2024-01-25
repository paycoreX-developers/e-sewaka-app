"use client";
import { useAuth } from "@/app/authContext";
import React from "react";

type Props = {};

const TopCard: React.FC = ({}: Props) => {
  const { profile } = useAuth();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center w-full h-fit pt-10 lg:pt-0">
      <div
        className="min-h-[200px] p-5 flex flex-col justify-start gap-4 items-start overflow-hidden rounded-t-xl lg:rounded-t-none
					 lg:ps-10 lg:rounded-tl-3xl lg:rounded-bl-3xl bg-white text-black hover:bg-white hover:text-blue-700"
      >
        <p className="font-bold text-xl 2xl:text-2xl">Saldo Kamu</p>
        <p className="text-3xl font-bold text-blue-600">
          Rp. <span>{profile?.balance}</span>
        </p>
        <p className="text-neutral-600">
          Saldo akan digunakan untuk mengakses fitur.{" "}
        </p>
      </div>
      <div
        className="min-h-[200px] p-5 flex flex-col justify-start gap-4 items-start overflow-hidden
					lg:ps-10 bg-white text-black hover:bg-white hover:text-blue-700"
      >
        <p className="font-bold text-xl 2xl:text-2xl">Riwayat Transaksi</p>
        <p className="text-3xl font-bold text-blue-600">
          0 <span className="text-xl">X</span>
        </p>
        <p className="text-neutral-600">
          Cek Riwayat transaksi kamu bulan ini.
        </p>
      </div>
      <div
        className="min-h-[200px] p-5 flex flex-col justify-start gap-4 items-start text-start lg:ps-10 rounded-b-xl lg:rounded-b-none
					lg:rounded-tr-3xl lg:rounded-br-3xl bg-white text-black hover:bg-white hover:text-blue-700 overflow-hidden"
      >
        <p className="font-bold text-xl 2xl:text-2xl">Point</p>
        <p className="text-3xl font-bold text-blue-600">{profile?.my_point}</p>
        <p className="text-neutral-600">
          Point dapat ditukar untuk menggunakan fitur.
        </p>
      </div>
    </div>
  );
};

export default TopCard;
