"use client";

import { Button } from "@/components/ui/button";
import { LoginFormInterface } from "@/utils/authTypes";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useId, useState } from "react";
import * as Yup from "yup";
import { useLocalStorage } from "@uidotdev/usehooks";
import FormOtp from "./FormOtp";

const FormLogin = () => {
  const [toOtp, setToOtp] = useState<boolean>(false);
  const [phonePresist, setPhonePresist] = useLocalStorage<string>("phone", "");
  const [uuidPresist, setuuidPresist] = useLocalStorage<string>("uuid", "");

  // Validation
  const Login = Yup.object().shape({
    phone: Yup.number().required(),
  });

  // initialPhoneField
  const initialLoginForm: { phone: string } = {
    phone: "",
  };

  // Generate uuid
  const id = useId();

  const loginByOtpHandler = async (val: any) => {
    let payload: LoginFormInterface = {
      uuid: id,
      phone: "62" + val.phone,
      via: "whatsapp",
    };

    await axios({
      url: "/api/apps/users/login_by_otp",
      method: "POST",
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status !== 200) {
          setPhonePresist("");
          setuuidPresist("");
          setToOtp(false);
        } else {
          setPhonePresist(payload.phone);
          setuuidPresist(payload.uuid as string);
          setToOtp(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center">
      <h1 className="lg:text-h5 font-bold">Log in to your account</h1>
      <p className="lg:text-b2 text-gray-400">
        {toOtp
          ? "We’ve sent a code to your Whatsapp"
          : "Welcome back! Please enter your  details"}
      </p>
      {toOtp ? (
        <FormOtp />
      ) : (
        <div className="text-start mt-10">
          <Formik
            initialValues={initialLoginForm}
            onSubmit={(value) => loginByOtpHandler(value)}
            validationSchema={Login}
          >
            {({ errors }) => (
              <Form>
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone" className="">
                    Phone number
                  </label>
                  <div className="relative">
                    <div className="absolute -translate-y-1/2 top-1/2 bg-neutral-300 border-2 py-2 pl-4 pr-3 rounded-l-full">
                      +62
                    </div>
                    <Field
                      name="phone"
                      className="border-[1px] border-neutral-400 focus:outline-blue-700 pr-4 ps-16 py-5 h-10 w-full rounded-full"
                      type="number"
                      placeholder="Enter your number"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <Button
                    type="submit"
                    variant="default"
                    className="w-full rounded-full bg-blue-700"
                    // className="bg-primary-90 text-white rounded-full"
                  >
                    Submit
                  </Button>
                  <div className="text-neutral-400 text-center mt-5">
                    Don’t have an account?{" "}
                    <Link
                      href="/auth/register"
                      className="text-blue-700 font-semibold"
                    >
                      Sign up{" "}
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default FormLogin;
