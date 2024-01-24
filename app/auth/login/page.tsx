import Image from "next/image";
import FormLogin from "./components/FormLogin";

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
          className="w-1/3 mb-5"
        />
      </div>
      <FormLogin />
    </div>
  );
}
