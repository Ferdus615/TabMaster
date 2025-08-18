import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-100 w-screen bg-[#0a0a0a] p-5 sm:px-10 md:px-10 lg:px-20">
      <div className="flex items-center justify-between mx-auto max-w-6xl ">
        <a href="/">
          <Image
            src="/logo-wide-w.svg"
            alt="TabMaster Logo"
            width={150}
            height={150}
            className="top-4 left-4" // Adjust the position as needed
          />
        </a>

        <div className="flex gap-3 w-30 items-center font-light text-[12px] md:text-[15px]">
          <a
            className="px-2 font-medium sm:px-2 rounded-full hover:bg-sky-hover transition-colors"
            href="/registration"
          >
            Register
          </a>
          <a
            className="px-2 font-medium sm:px-2 rounded-full hover:bg-sky-hover transition-colors"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
