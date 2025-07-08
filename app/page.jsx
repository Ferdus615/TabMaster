import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" flex flex-col items-center justify-center mb-5">
        <Image
          src="/logo-icon-w.png"
          alt="TabMaster Logo"
          width={150}
          height={150}
          className="mb-2"
        />
        <h1 className="font-semibold text-4xl">Welcome to TabMaster</h1>
        <h3 className="font-light text-sm text-green-500">
          by National Debate Federation Bangladesh(NDF BD)
        </h3>
      </div>
      <a href="/registration">Register</a>
    </div>
  );
}
