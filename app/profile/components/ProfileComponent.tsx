"use client";
import React from "react";

type Props = {
  profile: any;
};

const ProfileComponent = ({ profile }: Props) => {
  return (
    <>
      <h2 className="text-xl lg:text-2xl">{profile?.full_name}</h2>
      <p className="text-neutral-500">
        {profile?.email ? profile?.email : "-"}
      </p>
    </>
  );
};

export default ProfileComponent;
