"use client";

import { useAuth } from "@/app/authContext";
import axios from "axios";
import { PencilIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const PhotoProfileForm: React.FC = (props: any) => {
  const [files, setFiles] = useState<any>();
  const [photoEncrypt, setPhotoEncrypt] = useState<any>("");

  const { profile, token, phone } = useAuth();

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles: any) => {
      try {
        setFiles(acceptedFiles[0]);
        setPhotoEncrypt(await toBase64(acceptedFiles[0]));
      } catch (error) {
        setPhotoEncrypt("");
        setFiles(false);
      }
    },
  });

  const uploadPhotoProfile = async (
    dataPhoto: File,
    encryptedPhoto: string
  ) => {
    const type = dataPhoto?.type?.split("image/");
    const fileBase64 = encryptedPhoto?.split("base64,");
    let payload = {
      uuid: localStorage.getItem("uuid") || "",
      upload_type: "profile_pic",
      id_type: "",
      file_ext: type ? type[1] : null,
      base64_data: fileBase64[1],
    };

    if (files) {
      await axios({
        url: "api/apps/users/upload_kyc",
        method: "POST",
        data: payload,
        headers: {
          token,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            // setImageProfile(res.data.img_url);
          }
        })
        .catch(() => {
          console.warn("SOMETHING ERROR WHEN UP IMAGE");
        });
    }
  };

  useEffect(() => {
    uploadPhotoProfile(files, photoEncrypt);
  }, [photoEncrypt]);

  return (
    <section className="w-full flex items-center justify-center">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="w-32 aspect-square rounded-full
				 grid place-content-center overflow-hidden relative"
      >
        <input {...getInputProps()} />
        <PencilIcon
          className="absolute top-1/2 left-1/2 w-full h-full opacity-0 hover:opacity-100 hover:duration-300
				 -translate-x-1/2 -translate-y-1/2 text-white p-11 hover:cursor-pointer hover:bg-black/[0.2]"
        />
        <img
          src={profile ? profile.img_url : ""}
          alt=""
          className="w-full aspect-square object-cover"
        />
      </div>
    </section>
  );
};

export default PhotoProfileForm;
