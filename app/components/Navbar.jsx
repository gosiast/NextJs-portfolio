"use client";
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "./NAvLink";
import { Bars4Icon, xMarkIcon } from "@heroicons/react/24/solid";


const NavLinks = [
{
    title: "About",
    path: "#about",
},

{
    title: "Projects",
    path: "#projects",
},
   {
    title: "Contact",
    path: "#contact",
   }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#0b0b0b] bg-opacity-90">
             <div className="flex flex-wrap items-center justify-between mx-auto px-4"> 
                <Link href={"/"} className="text-xl md:text-5xl text-white font-semibold pt-5">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
{
    //below there is a condition, what will happen with different buttons,
    //also button icons need className otherwise they're not visible
    navbarOpen ? (
        <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <Bars4Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <xMarkIcon className="h-5 w-5" />
            </button>
    )
}
                </div>
             <div className="menu hidden block md:w-auto" id="navbar">
               <ul className="flex p-8 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                     NavLinks.map((link, index) => (
                        <li key={index}>  
                        <NavLink href={link.path} title={link.title} />
                        </li>
                     )     
                     )
                }           
                </ul> 

             </div>
             </div>
        </nav>
       
    )
}

export default Navbar