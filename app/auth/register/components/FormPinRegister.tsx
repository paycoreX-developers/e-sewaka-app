"use client";
import { useAuth } from "@/app/authContext";
import { Button } from "@/components/ui/button";
import { Otp, SetPinFormInterface } from "@/utils/authTypes";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

const FormPinRegister = () => {
  const { uuid, token } = useAuth();
  const router = useRouter();

  const initialSetPinForm: Otp = {
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

  const verifyOtpHandler = async (pin: Otp) => {
    // Read FormOtp and Generate to single string
    const _pin = Object.values(pin);
    const generatePayloadPin = _pin.join("");

    // Init Payload Otp
    let payloadChangePin: SetPinFormInterface = {
      uuid: uuid,
      old_pin: "575824",
      new_pin: generatePayloadPin,
    };

    await axios({
      url: "/api/apps/users/change_pin",
      method: "POST",
      headers: {
        x_access_token: token,
        "Content-Type": "application/JSON",
      },
      data: JSON.stringify(payloadChangePin),
    })
      .then((res) => {
        if (res.status !== 200) {
          console.warn(res);
        } else {
          console.log(res);
          router.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={initialSetPinForm}
      onSubmit={(value) => verifyOtpHandler(value)}
      validationSchema={RegisterOTPSchemeValidation}
    >
      {({ errors }) => (
        <Form>
          <div className="my-7 gap-2 ">
            <div className="flex max-w-full justify-center gap-3">
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="one"
                placeholder="0"
              />
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="two"
                placeholder="0"
              />
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="three"
                placeholder="0"
              />
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="four"
                placeholder="0"
              />
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="five"
                placeholder="0"
              />
              <Field
                min="0"
                max="9"
                maxLength="1"
                className="border-[0.5px] border-neutral-70 focus:outline-blue-700 py-2 px-4 w-[50px] text-center"
                name="six"
                placeholder="0"
              />
            </div>
          </div>
          <div className="">
            <Button
              type="submit"
              variant="default"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-full"
            >
              Verify
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormPinRegister;
