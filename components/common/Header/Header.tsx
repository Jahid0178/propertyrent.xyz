"use client";

import React from "react";
import Logo from "../Logo/Logo";
import HeaderMenus from "./HeaderMenus";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={`py-6 border-b ${pathname === "/" ? "fixed top-0 left-0 right-0" : ""} z-10 bg-white`}
    >
      <div className="container">
        <nav className="flex justify-between items-center">
          <Logo type="text" href="/" />
          <HeaderMenus />
        </nav>
      </div>
    </header>
  );
};

export default Header;
