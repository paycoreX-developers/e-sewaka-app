"use client";

import { Button } from "@/components/ui/button";
import { RegisterFormInterface } from "@/utils/authTypes";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useId, useState } from "react";
import * as Yup from "yup";
import FormOtp from "./FormOtp";
import { toast } from "@/components/ui/use-toast";
import FormPinRegister from "./FormPinRegister";

const FormRegister = () => {
  const [toOtp, setToOtp] = useState<boolean>(false);
  const [toPin, setToPin] = useState<boolean>(false);

  // Generate uuid
  const id = useId();

  const initialRegisterForm: RegisterFormInterface = {
    uuid: "",
    phone: "",
    full_name: "",
    pass: "",
    repass: "",
    address: "",
    prov: "1",
    city: "2",
    district: "3",
    village: "4",
    email: "",
    zipcode: "35656",
    ip_address: "",
    referral: "",
    owner_name: "",
    callback_url: "",
    via: "whatsapp",
    aggrement: false,
    // is_direct: "1",
  };

  const RegisterSchemeValidation = Yup.object().shape({
    phone: Yup.number().required(),
    email: Yup.string().email().required(),
    full_name: Yup.string().required(),
    address: Yup.string().required(),
    pass: Yup.string().required("Minimal 8 Character"),
    repass: Yup.string().required("Minimal 8 Character"),
  });

  const getOtpRegister = async (formData: RegisterFormInterface) => {
    let payload: RegisterFormInterface = {
      uuid: id,
      phone: "",
      full_name: "",
      pass: "",
      address: "",
      prov: "1",
      city: "2",
      district: "3",
      village: "4",
      email: "",
      zipcode: "35656",
      ip_address: "",
      referral: "",
      owner_name: "",
      callback_url: "",
      via: "whatsapp",
    };

    if (formData.pass === formData.repass && formData.aggrement) {
      payload.phone = "62" + formData.phone;
      payload.email = formData.email;
      payload.full_name = formData.full_name;
      payload.address = formData.address;
      payload.pass = formData.pass;

      await axios({
        url: "/api/apps/users/register",
        method: "POST",
        data: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.status !== 200) {
          } else {
            try {
              window.localStorage.setItem("uuid", id);
              window.localStorage.setItem("phone", payload.phone);
            } catch (error) {}
            setToOtp(true);
            toast({
              title: "Somethings Wrong",
              description: "Check your OTP Code you reserved!",
              variant: "destructive",
            });
          }
        })
        .catch(() => {
          toast({
            title: "Somethings Wrong",
            description: "Check your OTP Code you reserved!",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <div className="text-center">
      <h1 className="lg:text-h5 font-bold">Create your account</h1>
      <p className="lg:text-b2 text-gray-400">
        {toOtp
          ? "We’ve sent a code to your Whatsapp"
          : "Welcome! Please enter your details"}
      </p>
      {!toOtp ? (
        <div className="text-start mt-3">
          <Formik
            initialValues={initialRegisterForm}
            onSubmit={(value) => getOtpRegister(value)}
            validationSchema={RegisterSchemeValidation}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col my-2 gap-1">
                  <label htmlFor="phone" className="pl-3">
                    No.Whatsapp
                  </label>
                  <div className="relative">
                    <div className="absolute bg-neutral-300 py-2 pl-4 pr-3 rounded-l-full">
                      +62
                    </div>
                    <Field
                      name="phone"
                      className="border-[1px] border-neutral-400 focus:outline-blue-700 pr-4 ps-16 py-2 w-full rounded-full"
                      type="number"
                      placeholder="Enter your number"
                    />
                  </div>
                  <span className="text-red-500 text-sm ps-4">
                    {touched.phone && errors.phone && <p>{errors.phone}</p>}
                  </span>
                </div>
                <div className="flex flex-col my-2 gap-1">
                  <label htmlFor="email" className="pl-3">
                    Email
                  </label>
                  <Field
                    className="border-[0.5px] border-neutral-70 focus:outline-blue-700 rounded-full py-2 px-4"
                    name="email"
                    type="email"
                    placeholder="person@mail.com"
                  />
                  <span className="text-red-500 text-sm ps-4">
                    {touched.email && errors.email && <p>{errors.email}</p>}
                  </span>
                </div>
                <div className="flex flex-col my-2 gap-1">
                  <label htmlFor="full_name" className="pl-3">
                    Full Name
                  </label>
                  <Field
                    className="border-[0.5px] border-neutral-70 focus:outline-blue-700 rounded-full py-2 px-4"
                    name="full_name"
                    placeholder="Your Full Name"
                  />
                  <span className="text-red-500 text-sm ps-4">
                    {touched.full_name &&
                    errors.full_name && <p>{errors.full_name}</p>
                      ? "Full name is required field"
                      : null}
                  </span>
                </div>
                <div className="flex flex-col my-2 gap-1">
                  <label htmlFor="address" className="pl-3">
                    Address
                  </label>
                  <Field
                    className="border-[0.5px] border-neutral-70 focus:outline-blue-700 rounded-full py-2 px-4"
                    name="address"
                    placeholder="Your address"
                  />
                  <span className="text-red-500 text-sm ps-4">
                    {touched.address && errors.address && (
                      <p>{errors.address}</p>
                    )}
                  </span>
                </div>
                <div className="flex flex-col my-2 -12">
                  <label htmlFor="pass" className="pl-3">
                    Password
                  </label>
                  <Field
                    className="border-[0.5px] border-neutral-70 focus:outline-blue-700 rounded-full py-2 px-4"
                    name="pass"
                    type="password"
                    placeholder="Your Password"
                  />
                  <span className="text-red-500 text-sm ps-4">
                    {touched.pass && errors.pass && <p>{errors.pass}</p>}
                  </span>
                </div>
                <div className="flex flex-col my-2 gap-1">
                  <label htmlFor="repass" className="pl-3">
                    Confirm Password
                  </label>
                  <Field
                    className="border-[0.5px] border-neutral-70 focus:outline-blue-700 rounded-full py-2 px-4"
                    name="repass"
                    type="password"
                    placeholder="Retype your Password"
                  />
                  <span className="text-red-500 text-sm ps-4">
                    {touched.repass && errors.repass && <p>{errors.repass}</p>}
                  </span>
                </div>
                <label
                  htmlFor="aggrement"
                  className="ps-4 my-5 flex gap-2 items-center text-blue-700 text-sm font-semibold"
                >
                  <Field name="aggrement" type="checkbox" />
                  End User License Agreement
                </label>
                <div className="mt-5">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 px-4 rounded-full"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : !toPin ? (
        <FormOtp setToPin={setToPin} />
      ) : (
        <FormPinRegister />
      )}
    </div>
  );
};

export default FormRegister;
