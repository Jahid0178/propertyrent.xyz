import React from "react";
import Logo from "../Logo/Logo";
import HeaderMenus from "./HeaderMenus";

const Header = () => {
  return (
    <header className="py-6 border-b">
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
