"use client";
import Header from "@/components/custom/Header";
import React from "react";
import TopCard from "./components/TopCard";
import NameUser from "./components/NameUser";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
  return (
    <React.Fragment>
      <Header
        title={
          <span>
            Selamat Datang Kembali, <NameUser />
          </span>
        }
        subtitle="Lihat saldo dan kelola riwayat transaksi serta kuota di dashboard."
      />
      <div className="">
        <TopCard />
        <div className="w-full min-h-1/2 grid lg:grid-cols-2 gap-5 place-content-center mt-10">
          <div className="bg-white rounded-xl lg:rounded-3xl h-fit p-5 w-full grid grid-cols-5 max-h-[375px]">
            <div className="col-span-4 lg:col-span-3 flex flex-col justify-around gap-5">
              <p className="lg:text-base 2xl:text-xl font-extrabold text-neutral-700 ">
                Kuota E Materai
              </p>
              <p className="lg:text-4xl 2xl:text-6xl font-bold text-blue-600">
                0
              </p>
              <p className="lg:text-base 2xl:text-xl text-neutral-600">
                Kuota akan digunakan setiap kali pembubuhan e-materai.
              </p>
              <Button
                variant="default"
                className="text-white bg-blue-600 rounded-full  lg:w-[200px]"
              >
                Beli e-Meterai
              </Button>
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-start lg:items-end justify-end">
              <Image
                src="/assets/icon/meterai.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
                className="w-auto 2xl:h-3/4"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-3xl h-fit p-5 w-full grid grid-cols-5 max-h-[375px]">
            <div className="col-span-4 lg:col-span-3 flex flex-col justify-around gap-5">
              <p className="lg:text-base 2xl:text-xl font-extrabold text-neutral-700 ">
                Kuota Digital Signature
              </p>
              <p className="lg:text-4xl 2xl:text-6xl font-bold text-blue-600">
                0
              </p>
              <p className="lg:text-base 2xl:text-xl text-neutral-600">
                Kuota akan digunakan setiap kali pembubuhan digital signature.
              </p>
              <Button
                variant="default"
                className="text-white bg-blue-600 rounded-full  lg:w-[200px]"
              >
                Beli Digital Sign
              </Button>
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-start lg:items-end justify-end">
              <Image
                src="/assets/icon/signing.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
                className="w-auto 2xl:h-3/4"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-3xl h-fit p-5 w-full grid grid-cols-5 max-h-[375px]">
            <div className="col-span-4 lg:col-span-3 flex flex-col justify-around gap-5">
              <p className="lg:text-base 2xl:text-xl font-extrabold text-neutral-700 ">
                Kuota E Digital Stamp
              </p>
              <p className="lg:text-4xl 2xl:text-6xl font-bold text-blue-600">
                0
              </p>
              <p className="lg:text-base 2xl:text-xl text-neutral-600">
                Kuota akan digunakan setiap kali pembubuhan digital stamp.
              </p>
              <Button
                variant="default"
                className="text-white bg-blue-600 rounded-full  lg:w-[200px]"
              >
                Beli Digital Stamp
              </Button>
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-start lg:items-end justify-end">
              <Image
                src="/assets/icon/stamp.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
                className="w-auto 2xl:h-3/4"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-3xl h-fit p-5 w-full grid grid-cols-5 max-h-[375px]">
            <div className="col-span-4 lg:col-span-3 flex flex-col justify-around gap-5">
              <p className="lg:text-base 2xl:text-xl font-extrabold text-neutral-700 ">
                Kuota Digital Certified
              </p>
              <p className="lg:text-4xl 2xl:text-6xl font-bold text-blue-600">
                0
              </p>
              <p className="lg:text-base 2xl:text-xl text-neutral-600">
                Kuota akan digunakan setiap kali pembubuhan digital certified.
              </p>
              <Button
                variant="default"
                className="text-white bg-blue-600 rounded-full  lg:w-[200px]"
              >
                Beli Digital Certif
              </Button>
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-start lg:items-end justify-end">
              <Image
                src="/assets/icon/certificate.png"
                width={0}
                height={0}
                sizes="100%"
                alt=""
                className="w-auto 2xl:h-3/4"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
