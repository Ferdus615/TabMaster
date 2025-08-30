import React, { Children } from "react";
import Sidebar from "@/components/DemoComponents/DemoSidebar";
import Footer from "@/components/DemoComponents/DemoFooter";

const page = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-4">
          <p>Hello, world 👋</p>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default page;
