import React from "react";
import Link from "next/link";
import NavLink from "./NAvLink";


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
    return (
        <nav className="fixed top-0 left-0 right-0">
             <div className="flex flex-wrap items-center justify-between mx-auto p-8"> 
                <Link href={"/"} className="text-xl md:text-5xl text-white font-semibold">LOGO</Link>
             <div className="menu block md:w-auto" id="navbar">
               <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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