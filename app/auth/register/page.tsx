import Image from "next/image";
import FormRegister from "./components/FormRegister";

export default function page() {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        <Image
          alt="Logo BSM"
          width={0}
          height={0}
          sizes="100%"
          src={"/assets/logo/Logo_BSM_colored.png"}
          className="w-1/3 mb-2"
        />
      </div>
      <FormRegister />
    </div>
  );
}
