"use client";

import { useAuth } from "@/app/authContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

type Props = {
  profile: any;
};

const FormBasicInfo: React.FC<Props> = ({ profile }) => {
  const [provinceList, setProvinceList] = useState<any>([]);
  const [regenciesLists, setRegenciesLists] = useState<any>([]);
  const [districtLists, setDistrictLists] = useState<any>([]);

  const { uuid } = useAuth();

  const initialValues = {
    uuid: uuid,
    full_name: profile?.full_name,
    email: profile?.email,
    prov: profile?.prov,
    city: profile?.city,
    district: profile?.district,
    village: "",
    address: profile?.address,
    zipcode: "",
    nik: profile?.nik,
    img_url: "",
    ip_address: "222.555.555.555",
    callback_url: profile?.callback_url,
    owner_name: profile?.owner_name,
    tempat_lahir: "",
    tgl_lahir: "",
    phone: "0812321312312",
  };

  const getProvinceLists = async () => {
    const payload = {
      uuid: uuid,
    };
    await axios({
      url: "api/apps/lookup/provinces",
      method: "POST",
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) setProvinceList(res?.data?.data);
        else setProvinceList([]);
      })
      .catch(() => setProvinceList([]));
  };

  const getRegenciesLists = async (provincesId: string) => {
    const payload = {
      uuid: uuid,
      province_id: provincesId,
    };

    provincesId
      ? await axios({
          url: "api/apps/lookup/regencies",
          method: "POST",
          data: JSON.stringify(payload),
        })
          .then((res) => {
            if (res.status === 200) setRegenciesLists(res?.data?.data);
            else setRegenciesLists([]);
          })
          .catch(() => setRegenciesLists([]))
      : null;
  };

  const getDistrictsLists = async (regencyId: string) => {
    const payload = {
      uuid: uuid,
      regency_id: regencyId,
    };

    regencyId
      ? await axios({
          url: "api/apps/lookup/districts",
          method: "POST",
          data: JSON.stringify(payload),
        })
          .then((res) => {
            if (res.status === 200) setDistrictLists(res?.data?.data);
            else setDistrictLists([]);
          })
          .catch(() => setDistrictLists([]))
      : null;
  };

  const getProfileHandler = async () => {
    let payload = { uuid: uuid };
    await axios({
      url: "/api/apps/users/profile",
      method: "POST",
      headers: {
        x_access_token: localStorage.getItem("token") || "",
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handlerProfileUpdate = async (data: any) => {
    let payload = data;
    delete payload.phone;

    await axios({
      url: "/api/apps/users/profile_update",
      method: "POST",
      headers: {
        x_access_token: localStorage.getItem("token") || "",
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {
        console.log(res, payload);
        if (res.status === 200) {
          toast({ title: "Successfully change profile" });
          getProfileHandler();
        } else {
          toast({
            title: "Failed to update",
            variant: "destructive",
          });
        }
      })
      .catch((err) => {
        toast({ title: "Somethings Wrong", variant: "destructive" });
        console.log(err);
      });
  };

  const getCityAndDistrict = () => {
    if (profile.city && profile.district) {
      getRegenciesLists(profile.prov);
      getDistrictsLists(profile.city);
    }
  };

  useEffect(() => {
    getCityAndDistrict();
  }, []);

  useEffect(() => {
    getProvinceLists();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => handlerProfileUpdate(value)}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="grid lg:grid-cols-2">
            <div className="px-5 lg:px-10">
              <div className="flex flex-col my-5">
                <label htmlFor="full_name" className="font-semibold">
                  NIK
                </label>
                <div className="">
                  <Field
                    name="nik"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  />
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="full_name" className="font-semibold">
                  Full Name
                </label>
                <div className="">
                  <Field
                    name="full_name"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  />
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <div className="">
                  <Field
                    name="email"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  />
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <div className="">
                  <Field
                    name="phone"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  />
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="w-full">
                {/* <Link to="/change-password" className="">
									<Button variant="link" className="">
										<KeyIcon className="bg-blue-400 text-white p-1 rounded-lg mr-3" />
										Change My Password
									</Button>
								</Link> */}
              </div>
            </div>
            <div className="px-5 lg:px-10">
              <div className="flex flex-col my-5">
                <label htmlFor="address" className="font-semibold">
                  Address
                </label>
                <div className="">
                  <Field
                    name="address"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  />
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="prov" className="font-semibold">
                  Provinces
                </label>
                <div className="">
                  <Field
                    name="prov"
                    as="select"
                    onChange={(element: any) => {
                      setFieldValue("prov", element.target.value);
                      getRegenciesLists(element.target.value);
                    }}
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  >
                    <option value="">-Select Provinces-</option>
                    {provinceList ? (
                      provinceList?.map((province: any) => (
                        <option key={province.id} value={province.id}>
                          {province.name}
                        </option>
                      ))
                    ) : (
                      <option value="#">Loading...</option>
                    )}
                  </Field>
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="city" className="font-semibold">
                  Regencies
                </label>
                <div className="">
                  <Field
                    name="city"
                    as="select"
                    onChange={(element: any) => {
                      setFieldValue("city", element.target.value);
                      getDistrictsLists(element.target.value);
                    }}
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  >
                    <option value="">-Select Regencies-</option>
                    {regenciesLists ? (
                      regenciesLists?.map((regency: any) => (
                        <option key={regency.id} value={regency.id}>
                          {regency.name}
                        </option>
                      ))
                    ) : (
                      <option value="#">Loading...</option>
                    )}
                  </Field>
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="district" className="font-semibold">
                  Districts
                </label>
                <div className="">
                  <Field
                    name="district"
                    as="select"
                    className="border-b focus:border-b-blue-500 focus:outline-none w-full py-2"
                  >
                    <option value="">-Select Districts-</option>
                    {districtLists ? (
                      districtLists?.map((district: any) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))
                    ) : (
                      <option value="#">Loading...</option>
                    )}
                  </Field>
                  {/* <Button
										variant="default"
										size="sm"
										type="button"
										className="bg-blue-200 text-blue-500 w-[15%] rounded-full hover:bg-blue-500 hover:text-white">
										Ubah
									</Button> */}
                </div>
              </div>
              <div className="my-4">
                <Button
                  variant="default"
                  className="bg-blue-500 text-white w-full"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormBasicInfo;
