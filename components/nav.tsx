import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [search, setSearch] = useState('');
  return (
    <nav>
      <div className="flex justify-center">
        <h1 className="text-5xl my-10 font-serif font-thin">Blog</h1>
      </div>
      <div className="border border-solid border-y-1 border-x-0 border-[#292929] flex justify-center">
        <div className="flex w-11/12 justify-between md:w-4/5 md:justify-around h-10 items-center">
          <div className="flex justify-between space-x-7">
            <a href="#" className="text-lg text-[#d5d5d5] hover:text-[#EB5A3E]">Home</a>
            <a href="#" className="text-lg text-[#d5d5d5] hover:text-[#EB5A3E]">About</a>
            <a href="#" className="text-lg text-[#d5d5d5] hover:text-[#EB5A3E]">Contact</a>
          </div>
          <div className="flex">
            <input onChange={e => {setSearch(e.currentTarget.value);}} name="search" type="text" className="px-3 py-1.5 bg-gray-900 border border-solid focus:outline-none border-[#EB5A3E]" placeholder="Search..." />
            <Link href={"/search?"+search}>
              <a className="h-auto w-9 bg-[#EB5A3E] flex justify-center items-center">
                <FontAwesomeIcon icon={faSearch} width={17} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
