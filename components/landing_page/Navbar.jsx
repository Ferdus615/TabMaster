import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full bg-indigo-600 p-3">
      <div className="flex items-center">
        <a href="/">
          <Image
            src="/logo-icon-w.png"
            alt="TabMaster Logo"
            width={40}
            height={40}
            className="top-4 left-4" // Adjust the position as needed
          />
        </a>
        <h1 className="text-[12px] font-light ml-2 tracking-wide">TabMaster</h1>
      </div>
      <div className="flex items-center justify-between font-light text-[12px]">
        <a className="px-1 hover:text-indigo-300 transition-colors" href="/">
          Home
        </a>
        <a
          className="px-1 hover:text-indigo-300 transition-colors"
          href="/registration"
        >
          Register
        </a>
        <a
          className="px-1 hover:text-indigo-300 transition-colors"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
