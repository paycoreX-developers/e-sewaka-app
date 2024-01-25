"use client"
import { cookies } from "next/headers";

export  function sessionStatus() {
  const cookieStore = cookies();
  const token__ = cookieStore.get("token");
  return token__;
}
