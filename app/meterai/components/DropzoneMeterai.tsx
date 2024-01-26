"use client";
import { useDropzone } from "react-dropzone";

export default function DropzoneMeterai(props: any) {
  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [],
    },
    onDrop: async (acceptedFiles) => {
      try {
        props.setFieldValue("files", await toBase64(acceptedFiles[0]));
        props.setFiles(acceptedFiles[0]);
      } catch (error) {
        return error;
      }
    },
  });

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path} className="list-decimal">
      {file.path}
    </li>
  ));

  return (
    <section
      className="bg-gradient-to-tl from-white to-blue-50 border-[25px] h-full text-center
		 text-black grid place-content-center rounded-2xl"
    >
      <div
        {...getRootProps({ className: "dropzone" })}
        className="relative w-[500px] h-[500px] bg-[url('/assets/logo/upload.png')] bg-cover bg-center"
      >
        <input {...getInputProps()} />
        <div className="text-center font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20">
          <span className="font-bold">Drag & drop files or </span>
          <span className="text-blue-600 underline cursor-pointer">Browse</span>
          <h4 className="text-gray-400">
            {files ? "Supported formates: PDF" : ""}
          </h4>
          <ul>{files}</ul>
        </div>
      </div>
    </section>
  );
}
