import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoLight from "../assets/logoLight.png";


function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive ? "underline" : "hover:underline focus:underline";
  };

  const textColor = location.pathname === "/" ? "text-white" : "md:text-[#041893] text-white";
  const bgColor = location.pathname === "/" ? "" : "md:bg-[#041893] md:text-white text-[#041893] bg-white";


  return (
    <div className=" absolute  w-full  z-10 top-0 left-0">
      <div className="md:flex items-center justify-between md:bg-transparent bg-[#041893] py-3 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-Oxanium
      text-gray-800 "
        >
          <NavLink to="/" className={`text-white flex items-center gap-1 ${textColor}`}>
            <img src={logoLight} alt="logo" className="h-7 " /> Kaamback
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-2.5 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`flex flex-col items-center md:flex md:flex-row md:items-center  md:pb-0  ${textColor} pb-4 absolute md:static md:bg-transparent bg-[#041893] md:z-auto z-[-10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in pt-3 md:pt-0 ${
            open ? "top-[56px]" : "top-[-150px]"
          }`}
        >
          <li className="font-semibold  p-1 md:p-1 pl-2 mr-7 rounded-sm">
            <NavLink to="/" className={getLinkClass("/")}>
              Home
            </NavLink>
          </li>
          <li className="font-semibold  p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/career" className={getLinkClass("/career")}>
              Career
            </NavLink>
          </li>
          <li className="font-semibold  p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/ourteam" className={getLinkClass("/ourteam")}>
              Our Team
            </NavLink>
          </li>
          <li className="font-semibold  p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink
              to="/company-dashboard"
              className={getLinkClass("/company-dashboard")}
            >
              Company
            </NavLink>
          </li>
          {false ? (
            <li className="font-semibold  flex">
              <NavLink
                to="/logout"
                className="hover:bg-black hover:text-cyan-300 p-1 pl-2 md:p-1 mr-2 rounded-sm"
              >
                Logout
              </NavLink>
              <span className=" text-md font-semibold text-[#041893] capitalize hover:underline hover:cursor-pointer hover:text-red-900 flex gap-2 pt-1">
                Hi,
                {/* {user.username} */}
              </span>
            </li>
          ) : (
            <div className= {`font-semibold mr-4 mt-2 md:mt-0  rounded-full ${bgColor}`}>
              <li className="font-semibold w-[90px] px-3 text-center hover:underline cursor-pointer ">
                <NavLink to="login">Login</NavLink>
              </li>
            </div>
            // <div className="flex gap-2 text-orange-800 font-semibold   mr-7  rounded-sm ">
            //   <li className="font-semibold p-1  pl-2  hover:underline hover:text-blue-600">
            //     <NavLink to="register">SignUp</NavLink>
            //   </li>
            //   <p className="pt-1">/</p>
            //   <li className="font-semibold p-1 hover:underline hover:text-green-600">
            //     <NavLink to="login">Login</NavLink>
            //   </li>
            // </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
