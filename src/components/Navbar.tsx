"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { SiNetflix } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
interface navbarprops {}

const Navbar: FC<navbarprops> = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="w-full h-14 bg-white shadow  flex items-center text-center justify-between px-10 md:px-16 ">
        <div>
          <Link href="/">
            <SiNetflix className="text-red-500 text-2xl" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center list-none gap-5 ">
          <li className="hover:text-red-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/movies">Movie</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/contact">Contact</Link>
          </li>
        </nav>
        <span
          className="block md:hidden text-2xl text-red-500  "
          onClick={() => setToggle(!toggle)}
        >
          {toggle ?  <RxCross2 />:<FaBars />}
        </span>
      </nav>
      {toggle && (
        <div className=" absolute top-0 my-[58px] left-0 right-0 md:hidden block ">
          <div className="w-full h-full shadow-md bg-white py-5 ">
          <nav className=" flex flex-col items-center justify-center list-none gap-5 ">
          <li className="hover:text-red-500">
            <Link href="/" onClick={() => setToggle(false)}>Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/about" onClick={() => setToggle(false)}>About</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/movies" onClick={() => setToggle(false)}>Movie</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/contact" onClick={() => setToggle(false)}>Contact</Link>
          </li>
        </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
