"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";

const FormTest = () => {
  const handletest = async (value: any) => {
    const bodyData = {
      uuid: value.uuid,
    };
    await axios({
      url: "/api/apps/users/profile",
      method: "POST",
      headers: {
        x_access_token: value.x_access_token,
      },
      data: JSON.stringify(bodyData),
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={{ uuid: "", x_access_token: "" }}
      onSubmit={(values) => handletest(values)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Input name="uuid" value={values.uuid} onChange={handleChange} />
          <Input
            name="x_access_token"
            value={values.x_access_token}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTest;
