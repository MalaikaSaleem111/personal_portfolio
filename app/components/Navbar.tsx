"use client"
import { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <nav className="flex justify-between items-center h-20 w-full bg-black text-white px-5">
         <div className="text-xl font-medium md:mr-36">Malaika</div>

         <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <LuMenu size={30} />}
      </div>

          <ul className={`absolute top-20 w-full bg-black text-center md:static md:flex justify-evenly md:pl-20 px-5 text-lg transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}>
              <li className="py-2 md:py-0"><Link href="#">Home</Link></li>
              <li className="py-2 md:py-0"><Link href="#projects">Projects</Link></li>
              <li className="py-2 md:py-0"><Link href="#skills">Skills</Link></li>
                <li className="py-2 md:py-0"><Link href="#about">About</Link></li>
                <li className="py-2 md:py-0"><Link href="#contact">Contact</Link></li>
             </ul>
             
         </nav>
        
    )
}



