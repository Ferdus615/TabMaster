import React from "react";
import Sidebar from "@/components/DemoComponents/DemoSidebar";
import Footer from "@/components/DemoComponents/DemoFooter";
import Dashboard from "../DemoPages/Dashboard";

const page = () => {
  return (
    <div className="bg-gray-950 flex min-h-screen m-4">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <main className="flex-grow pl-4">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default page;
