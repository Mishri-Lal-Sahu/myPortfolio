import React from 'react';
import {AiOutlineCopyright} from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className='bg-black'>
         <div className="mx-auto max-w-[1340px]">
            <p className="items-center mx-auto flex text-white py-4 text-sm md:text-xl">Created By &nbsp;<span className="text-[#d00a32]">MISHRI LAL SAHU</span> &nbsp;|&nbsp; <AiOutlineCopyright className='text-md items-center md:text-2xl'/></p>
         </div>
    </div>
  )
}
