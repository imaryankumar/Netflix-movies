"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { SiNetflix } from "react-icons/si";
import { HiOutlineBars4 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
interface navbarprops {}

const Navbar: FC<navbarprops> = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginTogle, setLoginTogle] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoutToggle, setLogoutToggle] = useState(false);

  

  const onModalHandler = () => {
    isModalOpen === true ? setIsModalOpen(false) : setIsModalOpen(true);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    //console.log("Event");
  };
  const onLoginHandler = () => {
    // console.log("Hello")
  };

  return (
    <>
      <nav className="w-full h-14 bg-white shadow  flex items-center text-center justify-between px-5 md:px-20 ">
        <div>
          <Link href="/">
            <SiNetflix className="text-red-500 text-3xl" />
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

          
            <button
              className="border bg-black text-white ml-5 border-gray-500 hover:bg-white hover:text-black px-4 py-1 uppercase rounded "
              onClick={onModalHandler}
            >
              Sign in
            </button>
          
        </nav>
        <div className="flex md:hidden items-center justify-center gap-5 ">
          <span className="hover:text-red-500 text-center ">
            <button
              className="border bg-black text-white border-gray-500 hover:bg-white hover:text-black px-3 py-0.5  uppercase rounded "
              onClick={onModalHandler}
            >
              Sign in
            </button>
          </span>
          <span
            className="flex flex-col md:hidden text-3xl text-red-500  "
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <RxCross2 /> : <HiOutlineBars4 />}
          </span>
        </div>
      </nav>
      {toggle && (
        <div className=" absolute top-0 my-[58px] left-0 right-0 md:hidden block ">
          <div className="w-full h-full shadow-md bg-white py-5 ">
            <nav className=" flex flex-col items-center justify-center list-none gap-5 ">
              <li className="hover:text-red-500">
                <Link href="/" onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link href="/about" onClick={() => setToggle(false)}>
                  About
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link href="/movies" onClick={() => setToggle(false)}>
                  Movie
                </Link>
              </li>
              <li className="hover:text-red-500">
                <Link href="/contact" onClick={() => setToggle(false)}>
                  Contact
                </Link>
              </li>
            </nav>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="w-screen h-screen absolute top-0 left-0 right-0 flex items-center justify-center bg-[#000000cc]   ">
          <div className="absolute inset-0 " onClick={onModalHandler}></div>
          <div className="bg-white  w-[calc(min(90vw,500px))] m-auto relative rounded  ">
            <span
              onClick={onModalHandler}
              className=" text-black absolute right-0 m-1 text-center flex items-center justify-center p-1.5 cursor-pointer text-2xl  bg-white"
            >
              <RxCross2 />
            </span>
            <div className="py-2 ">
              <div>
                <div className=" text-cente  ">
                  <div className="pt-8 pb-2 text-center flex items-center justify-around px-4 md:px-8   ">
                    <div
                      className={`border w-full font-semibold md:text-base py-2 cursor-pointer ${
                        loginTogle === true
                          ? "bg-blue-500 text-white "
                          : "bg-gray-300"
                      } `}
                      onClick={() => setLoginTogle(true)}
                    >
                      Sign In
                    </div>
                    <div
                      className={`border w-full font-semibold md:text-base py-2 cursor-pointer ${
                        loginTogle === false
                          ? "bg-blue-500 text-white "
                          : "bg-gray-300"
                      } `}
                      onClick={() => setLoginTogle(false)}
                    >
                      Sign Up
                    </div>
                  </div>
                  {loginTogle ? (
                    <form
                      onSubmit={(e) => onSubmitHandler(e)}
                      className=" px-2 md:px-10"
                    >
                      <div className="flex flex-col text-left py-3 px-4   gap-1 ">
                        <label htmlFor="email" className="primary-color">
                          Email or Username
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={email}
                          className="p-2 border rounded  bg-gray-100 "
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email or username"
                        />
                      </div>
                      <div className="flex flex-col text-left py-3 px-4   gap-1  ">
                        <label htmlFor="password" className="primary-color">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          className="p-2 border rounded  bg-gray-100 "
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password "
                        />
                      </div>
                      <div className=" block md:flex  items-center justify-between text-left py-3 px-4 gap-1  ">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className=" cursor-pointer"
                          />
                          <label htmlFor="checkbox" className="cursor-pointer">
                            Remember me
                          </label>
                        </div>
                        <span className="text-gray-400 cursor-pointer hover:underline ">
                          Forgot Password
                        </span>
                      </div>
                      <div className="flex flex-col text-left py-3 px-4 gap-1 mt-auto ">
                        <button className="border bg-green-600 rounded py-2 text-white ">
                          Sign In
                        </button>
                      </div>
                      <div className="flex items-center justify-center px-8 ">
                        <hr className="border border-gray-500 w-[50%] " />
                        <span className="flex px-3 ">or</span>
                        <hr className="border border-gray-500 w-[50%] " />
                      </div>
                      <div className="flex flex-col text-left py-2 px-4 gap-1 mt-auto ">
                        <button className="border bg-blue-500 rounded py-2 text-white flex items-center justify-center gap-5 ">
                          <FcGoogle className="text-2xl bg-white rounded " />{" "}
                          Sign in with Google
                        </button>
                      </div>
                      <div className="flex flex-col text-left py-2 px-4 gap-1 mt-auto ">
                        <button className="border bg-black rounded py-2 text-white flex items-center justify-center gap-5 ">
                          <SiGithub className="text-2xl rounded " /> Sign in
                          with Github
                        </button>
                      </div>
                      <div className="flex items-center justify-center flex-col py-5 gap-2 ">
                        <span
                          className="text-sm font-bold text-green-600 cursor-pointer hover:underline "
                          onClick={() => setLoginTogle(false)}
                        >
                          Why Create an Account ?
                        </span>
                        <p className="text-center text-[10px] ">
                          By creating this account, you agree to our{" "}
                          <span className="text-green-600">Privacy Policy</span>{" "}
                          &
                          <span className="text-green-600">
                            {" "}
                            Cookie Policy.
                          </span>
                        </p>
                      </div>
                    </form>
                  ) : (
                    <form
                      onSubmit={(e) => onSubmitHandler(e)}
                      className="  px-2 md:px-10"
                    >
                      <div className="flex flex-col text-left py-2 px-4   gap-1  ">
                        <label htmlFor="name" className="primary-color">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          className="p-2 border rounded  bg-gray-100 "
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name "
                        />
                      </div>
                      <div className="flex flex-col text-left py-2 px-4   gap-1  ">
                        <label htmlFor="email" className="primary-color">
                          Email or Username
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={email}
                          className="p-2 border rounded  bg-gray-100 "
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email or username"
                        />
                      </div>
                      <div className="flex flex-col text-left py-2 px-4   gap-1  ">
                        <label htmlFor="password" className="primary-color">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          className="p-2 border rounded  bg-gray-100 "
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password "
                        />
                      </div>
                      <div className=" block md:flex  items-center justify-between text-left py-2 px-4 gap-1  ">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className=" cursor-pointer"
                          />
                          <label htmlFor="checkbox" className="cursor-pointer">
                            Remember me
                          </label>
                        </div>
                        <span className="text-gray-400 cursor-pointer hover:underline ">
                          Forgot Password
                        </span>
                      </div>
                      <div className="flex flex-col text-left py-2 px-4 gap-1 mt-auto ">
                        <button className="border bg-green-600 rounded py-2 text-white ">
                          Sign In
                        </button>
                      </div>
                      <div className="flex items-center justify-center px-8 ">
                        <hr className="border border-gray-500 w-[50%] " />
                        <span className="flex px-3 ">or</span>
                        <hr className="border border-gray-500 w-[50%] " />
                      </div>
                      <div className="flex flex-col text-left py-2 px-4 gap-1 mt-auto ">
                        <button
                          className="border bg-blue-500 rounded py-2 text-white flex items-center justify-center gap-5 "
                        
                        >
                          <FcGoogle className="text-2xl bg-white rounded " />{" "}
                          Sign in with Google
                        </button>
                      </div>
                      <div className="flex flex-col text-left py-2 px-4 gap-1 mt-auto ">
                        <button
                          className="border bg-black rounded py-2 text-white flex items-center justify-center gap-5 "
                          
                        >
                          <SiGithub className="text-2xl rounded " /> Sign in
                          with Github
                        </button>
                      </div>
                      <div className="flex items-center justify-center flex-col py-2 gap-2 ">
                        <span
                          className="text-sm font-bold text-green-600 cursor-pointer hover:underline "
                          onClick={() => setLoginTogle(true)}
                        >
                          Already have an Account ?
                        </span>
                        <p className="text-center text-[10px] ">
                          By creating this account, you agree to our{" "}
                          <span className="text-green-600">Privacy Policy</span>{" "}
                          &
                          <span className="text-green-600">
                            {" "}
                            Cookie Policy.
                          </span>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
