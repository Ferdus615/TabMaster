import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full bg-indigo-600 px-5 py-5 sm:px-50 sm:py-5 items-center">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <a href="/">
          <Image
            src="/logo-icon-w.png"
            alt="TabMaster Logo"
            width={45}
            height={45}
            className="top-4 left-4" // Adjust the position as needed
          />
        </a>
        <h1 className="text-[15px] font-light ml-2 tracking-wide md:text-[20px]">
          TabMaster
        </h1>
      </div>
      <div className="flex gap-3 items-center justify-between font-light text-[12px] md:text-[15px]">
        <a
          className="p-1 sm:px-2 border-1 border-indigo-500 rounded-md hover:text-indigo-300 transition-colors"
          href="/registration"
        >
          Register
        </a>
        <a
          className="p-1 sm:px-2 border-1 border-indigo-500 rounded-md hover:text-indigo-300 transition-colors"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
