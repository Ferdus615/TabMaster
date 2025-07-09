import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Welcome to TabMaster</h1>
        <h5 className="">by National Debate Federation Bangladesh(NDF BD)</h5>
      </div>
    </div>
  );
}
