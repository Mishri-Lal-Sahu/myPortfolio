import React, { useState } from 'react';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';
function Header(props) {
    const [toggle, setToggle]= useState(false);
    return (
        <div className="bg-transparant p-4">
            <div className="max-w-[1240px] py-3 items-center flex justify-between mx-auto">
               <div className="text-3xl font-bold text-white">
                My PortFo<span className="text-[#d00a32]">lio.</span>
               </div>
               {
                toggle?
                <AiOutlineClose onClick={() => setToggle(!toggle)} className="md:hidden text-3xl text-white block"/>
                :
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className="md:hidden text-3xl text-white block"/>
               }
               <ul className=" hidden md:flex gap-10 text-white">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Teams</li>
                <li>Contact</li>
               </ul>
               <ul className={ `block duration-500 w-full left-0 ${toggle?'top-[12%]':'top-[-100%]'} fixed bg-black text-center md:hidden gap-10 text-white`}>
                <li className="p-2 border-t-4 border-[#d00a32] hover:bg-[#d00a32] cursor-pointer">Home</li>
                <li className="p-2 hover:bg-[#d00a32] cursor-pointer">About</li>
                <li className="p-2 hover:bg-[#d00a32] cursor-pointer">Services</li>
                <li className="p-2 hover:bg-[#d00a32] cursor-pointer">Skills</li>
                <li className="p-2 hover:bg-[#d00a32] cursor-pointer">Contact</li>
               </ul>
            </div>
        </div>
    );
}

export default Header;