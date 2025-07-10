import Navbar from "@/components/landing_page/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className=" flex flex-col items-center justify-center mb-4">
          <h1 className="font-semibold text-6xl text-center w-250">
            Welcome to TabMaster. The Ultimate Debte Tournament Solution by NDF
            BD.
          </h1>
          <p className="text-center font-light text-lg mt-4 mb-8 w-2/3">
            Seamlessly manage your parliamentary debate tournaments from
            registration to final results with a powerful, intuitive, and
            real-time tabulation system.
          </p>
        </div>
      </div>
    </div>
  );
}
