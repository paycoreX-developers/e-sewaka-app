"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const ButtonLogin = () => {
  const [data, setData] = useState<string>("");
  const loginHandler = async (e: ChangeEvent<any>) => {
    e.preventDefault();
    console.log("First");
    let payload = {
      uuid: "123jnkajna2jnajd",
      phone: "6285738719488",
      via: "whatsapp",
    };
    await axios({
      url: "/api/apps/users/login_by_otp",
      method: "POST",
      data: JSON.stringify(payload),
    })
      .then((res) => {
        setData(JSON.stringify(res));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button className="bg-blue-400 px-4 py-2" onClick={loginHandler}>
        Login
      </button>
      <p>{data}</p>
    </div>
  );
};

export default ButtonLogin;
