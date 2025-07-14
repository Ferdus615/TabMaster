import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-100 w-full flex items-center justify-between bg-[#0b0b0b] p-5 sm:px-10 md:px-20 lg:px-30 xl:px-40">
      <a href="/">
        <Image
          src="/logo-wide-w.svg"
          alt="TabMaster Logo"
          width={150}
          height={150}
          className="top-4 left-4" // Adjust the position as needed
        />
      </a>

      <div className="flex gap-3 items-center justify-between font-light text-[12px] md:text-[15px]">
        <a
          className="px-2 py-1 font-medium sm:px-2 rounded-md hover:bg-violet-500 transition-colors"
          href="/registration"
        >
          Register
        </a>
        <a
          className="px-2 py-1 font-medium sm:px-2 rounded-md hover:bg-violet-500 transition-colors"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
