import type { NextPage } from "next";
import Image from "next/image";
import logo from "../public/logo.png";

const Nav: NextPage = () => {
  return (
    <nav className="bg-[#2B2A33] flex justify-center h-12 border border-solid border-x-0 border-t-0 border-blue-500">
        <div className="w-4/5 flex justify-between items-center">
          <a href="#">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" height={30} width={35} />
            <h1 className="ml-2 text-xl">
              Blog
            </h1>
          </div>
          </a>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-400 text-blue-300">About</a>
            <a href="#" className="hover:text-blue-400 text-blue-300">Contact</a>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
