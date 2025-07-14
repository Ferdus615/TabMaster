import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full grid grid-cols-4 bg-amber-400">
      <div>
        <Image src="/logo-wide-w.svg" width={150} height={150} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer;
