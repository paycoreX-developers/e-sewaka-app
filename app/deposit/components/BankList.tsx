"use client";

import { useAuth } from "@/app/authContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { topUpAlert } from "@/utils/customAlert";
import { BankList } from "@/utils/product";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BankList = () => {
  const [bankLists, setBankLists] = useState<BankList[]>([]);
  const { token, uuid } = useAuth();

  const getBankLists = async () => {
    let payload = {
      uuid: uuid,
    };

    await axios({
      url: "/api/apps/product/bank_list",
      method: "POST",
      headers: {
        x_access_token: token,
        "Content-Type": "application/JSON",
      },
      data: JSON.stringify(payload),
    }).then((res) => setBankLists(res.data.data));
  };

  const topUpHandler = async (data: any) => {
    let payload = {
      uuid: uuid,
      bank: data.bank,
      value: data.ammount + "000",
    };

    await axios({
      url: "/api/apps/balance/topup",
      method: "POST",
      headers: {
        x_access_token: token,
        "Content-Type": "application/JSON",
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.data) {
          topUpAlert(res.data, Number(data.ammount) * 1000);
        } else {
          console.warn("ERROR TOPUP");
        }
      })
      .catch(() =>
        toast({
          title: "Something Get Wrong!",
          variant: "destructive",
        })
      );
  };

  useEffect(() => {
    getBankLists();
  }, []);

  return (
    <div className="w-full mt-10">
      <Tabs className="py-5 bg-[#F8FAFC] p-5 rounded-xl">
        <TabsList className="h-[150px] w-full flex justify-start gap-5 overflow-y-auto px-5">
          <TabsTrigger
            className="bg-white h-24 lg:h-[120px] aspect-square border-[1px] flex flex-col gap-3 rounded-xl"
            value="tf"
            defaultChecked
          >
            <img src="/assets/auth/SVG.png" alt="" />
            Transfer
          </TabsTrigger>
          <TabsTrigger
            className="bg-white h-24 lg:h-[120px] aspect-square border-[1px] flex flex-col gap-3 rounded-xl"
            disabled
            value="va"
          >
            <img src="/assets/auth/SVG.svg" alt="" />
            Virtual
            <br /> Account
          </TabsTrigger>
          <TabsTrigger
            className="bg-white h-24 lg:h-[120px] aspect-square border-[1px] flex flex-col gap-3 rounded-xl"
            disabled
            value="merchant"
          >
            <img src="/assets/auth/SVG2.svg" alt="" />
            Merchant
          </TabsTrigger>
          <TabsTrigger
            className="bg-white h-24 lg:h-[120px] aspect-square border-[1px] flex flex-col gap-3 rounded-xl"
            disabled
            value="merchant"
          >
            <img src="/assets/auth/SVG3.svg" alt="" />
            E-Wallet
          </TabsTrigger>
          <TabsTrigger
            className="bg-white h-24 lg:h-[120px] aspect-square border-[1px] flex flex-col gap-3 rounded-xl"
            disabled
            value="merchant"
          >
            <img src="/assets/auth/QRIS.svg.svg" alt="" />
            QRIS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tf" className="bg-white rounded-2xl">
          <div className="flex gap-5 p-3">
            <h2 className="w-[20%] text-md 2xl:text-xl text-neutral-500">
              Pilih Bank :
            </h2>{" "}
            <h2 className="text-md 2xl:text-xl text-neutral-500">Nominal :</h2>
          </div>

          <Tabs defaultValue="account" className="w-full flex">
            <TabsList className="flex flex-col justify-start gap-5 h-auto bg-white mb-0 w-fit mt-4 border-r pr-5">
              {bankLists?.map((bank: BankList) => {
                if (
                  bank.bank_code === "BCA" ||
                  bank.bank_code === "BRI" ||
                  bank.bank_code === "MANDIRI" ||
                  bank.bank_code === "BNI"
                ) {
                  return (
                    <TabsTrigger
                      key={bank.bank_code}
                      value={bank.bank_code}
                      className="py-6 w-full flex flex-col gap-2 border-[1px] rounded-2xl"
                    >
                      <img
                        src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                        alt=""
                      />
                      <span className="hidden lg:block">{bank.bank_name}</span>
                    </TabsTrigger>
                  );
                }
              })}
            </TabsList>
            {bankLists?.map((bank: BankList) => {
              if (
                bank.bank_code === "BCA" ||
                bank.bank_code === "BRI" ||
                bank.bank_code === "MANDIRI" ||
                bank.bank_code === "BNI"
              ) {
                return (
                  <TabsContent
                    key={bank.bank_code}
                    value={bank.bank_code}
                    className="bg-white mt-0 p-5 w-[80%]"
                  >
                    <input
                      type="number"
                      placeholder="(minimal deposit Rp.10.000"
                      className="py-2 px-3 rounded-full w-full bg-[#F5F5F5] mb-5"
                    />
                    <h2 className="font-bold text-xl text-neutral-500">
                      Top Up via {bank.bank_name}
                    </h2>
                    <div className="mt-5 grid lg:grid-cols-3 gap-3">
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.50.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with nominal{" "}
                              <span className="text-xl pl-2 font-semibold">
                                Rp. 50.000
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 50,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.100.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with nominal{" "}
                              <span className="text-xl pl-2 font-semibold">
                                Rp. 100.000
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 100,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.200.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with nominal{" "}
                              <span className="text-xl pl-2 font-semibold">
                                Rp. 200.000
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 200,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.300.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with nominal{" "}
                              <span className="text-xl pl-2 font-semibold">
                                Rp. 300.000
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 300,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.500.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with nominal{" "}
                              <span className="text-xl pl-2 font-semibold">
                                Rp. 500.000
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 500,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger className="border-[1px] h-32 flex gap-2 flex-col w-full items-start justify-center p-5 rounded-xl hover:bg-neutral-900 hover:text-white hover:duration-300">
                          <p className="line-clamp-1">{bank.bank_name}</p>
                          <p className="text-2xl font-semibold">Rp.1.000.000</p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Top up via{" "}
                              <img
                                src={`/assets/auth/${bank.bank_code.toLocaleLowerCase()}.svg`}
                                alt=""
                                className="my-3"
                              />
                              {bank.bank_name} with noin pl-2 font-semiboldal
                              <span className="text-2xl">Rp.</span>
                              1.000.000
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                topUpHandler({
                                  bank: bank.bank_code,
                                  ammount: 1000,
                                })
                              }
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TabsContent>
                );
              }
            })}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BankList;
