import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-600 p-4 text-white">
      <div className="flex items-center text-white">
        <Image
          src="/logo-icon-w.png"
          alt="TabMaster Logo"
          width={60}
          height={60}
          className="top-4 left-4" // Adjust the position as needed
        />
        <h1 className="text-xl font-regular ml-3 tracking-wide">TabMaster</h1>
      </div>
      <div className="flex items-center justify-between w-45">
        <a
          className="border-green-500 border-1 px-3 py-1 rounded-md hover:bg-green-500 hover:text-black"
          href="/registration"
        >
          Register
        </a>
        <a
          className="border-green-500 border-1 px-3 py-1 rounded-md hover:bg-green-500 hover:text-black"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
