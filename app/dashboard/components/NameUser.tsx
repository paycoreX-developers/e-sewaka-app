"use client";
import { useAuth } from "@/app/authContext";
import React from "react";

const NameUser = () => {
  const { profile } = useAuth();

  return <span>{profile?.full_name}</span>;
};

export default NameUser;
