import Image from "next/image";

export default function loading() {
  return (
    <div className="w-full min-h-screen max-h-screen bg-blue-700 relative">
      <Image
        width={0}
        height={0}
        sizes="100%"
        src="/assets/logo/Logo_BSM_white.png"
        alt="logo"
        className="max-w-[200px] lg:w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
