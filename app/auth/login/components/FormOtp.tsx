"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LoginFormInterface, LoginFormOTPInterface } from "@/utils/authTypes";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const FormOtp: React.FC = () => {
  const { toast } = useToast();

  const [phone, setPhone] = useLocalStorage<string>("phone", "");
  const [uuidPresist, setuuidPresist] = useLocalStorage<string>("uuid", "");
  const [xAccessToken, setxAccessToken] = useLocalStorage<string>(
    "x_access_token",
    ""
  );
  const [profilePressit, setProfilePressit] = useLocalStorage("user_data");

  const initialRegisterOtpForm = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  };

  const RegisterOTPSchemeValidation = Yup.object().shape({
    one: Yup.string().max(1).required(),
    two: Yup.string().max(1).required(),
    three: Yup.string().max(1).required(),
    four: Yup.string().max(1).required(),
    five: Yup.string().max(1).required(),
    six: Yup.string().max(1).required(),
  });

  //Handler get Profile
  const getProfileHandler = async (token: string) => {
    let payload = { uuid: uuidPresist };
    await axios({
      url: "/api/apps/users/profile",
      method: "POST",
      headers: {
        x_access_token: token,
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {
        setProfilePressit(JSON.stringify(res.data));
      })
      .catch(() => {
        toast({
          title: "Something Wrong!",
        });
      });
  };

  const verifyOtpHandler = async (otp: any) => {
    // Read FormOtp and Generate to single string
    const _otp = Object.values(otp);
    const generatePayloadOtp = _otp.join("");

    // Init Payload Otp
    let payloadRegister: LoginFormOTPInterface = {
      uuid: uuidPresist,
      phone: phone,
      code: generatePayloadOtp,
    };
    await axios({
      url: "/api/apps/users/login_entry_otp",
      method: "POST",
      data: JSON.stringify(payloadRegister),
    })
      .then((res) => {
        if (res.status !== 200) {
          setPhone("");
          setuuidPresist("");
          setxAccessToken("");
        } else {
          setxAccessToken(res.data.x_access_token);
          getProfileHandler(res.data.x_access_token);
        }
      })
      .catch(() => {
        toast({
          title: "Somethings Wrong",
          description: "Check your OTP Code you reserved!",
          variant: "destructive",
        });
      });
  };

  const resendOtp = async () => {
    let payload: LoginFormInterface = {
      uuid: uuidPresist,
      phone: phone,
      via: "whatsapp",
    };

    await axios({
      url: "/api/apps/users/login_by_otp",
      method: "POST",
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status !== 200) {
          toast({
            title: "Somethings Wrong",
            variant: "destructive",
          });
        } else {
          toast({
            title: "We sent new OTP",
            description: "Insert new OTP on your whatsapp!",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Somethings Wrong",
          variant: "destructive",
        });
      });
  };

  return (
    <Formik
      initialValues={initialRegisterOtpForm}
      onSubmit={(value) => verifyOtpHandler(value)}
      validationSchema={RegisterOTPSchemeValidation}
    >
      <Form>
        <div className="w-full grid place-content-center 2xl:mt-3">
          <img
            src="/assets/auth/otp_illus.png"
            alt=""
            className="w-auto h-[140px] 2xl:h-[180px]"
          />
        </div>
        <div className="my-4 flex flex-col gap-3 ">
          <label htmlFor="" className="b1 text-neutral-600 font-semibold">
            OTP CODE
          </label>
          <div className="flex max-w-full justify-between gap-3">
            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="one"
              placeholder="0"
            />
            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="two"
              placeholder="0"
            />
            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="three"
              placeholder="0"
            />
            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="four"
              placeholder="0"
            />

            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="five"
              placeholder="0"
            />
            <Field
              className="border-[1px] border-neutral-400 active:border-neutral-100 font-bold text-h5 placeholder:text-normal placeholder:font-normal
				text-primary-500 placeholder:text-neutral-500 px-4 py-1 w-10  rounded-lg aspect-square text-center"
              min="0"
              max="9"
              type="number"
              maxLength="1"
              name="six"
              placeholder="0"
            />
          </div>
        </div>
        <button
          className="w-full text-center text-neutral-70 mb-3"
          type="button"
          onClick={resendOtp}
        >
          Didn’t get a code? Click to resend.
        </button>
        <div className="">
          <Button
            type="submit"
            variant="default"
            // disabled={loading}
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-full"
          >
            {/* {loading ? "Loading" : "Verify"} */}
            Verify
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormOtp;
