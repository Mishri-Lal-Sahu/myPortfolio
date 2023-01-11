import React from 'react';
import { AiOutlineLine, AiOutlineUser } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import MyForm from './MyForm';
export const Contact = () => {
  return (
    <div className='bg-white py-4'>


      <div className="max-w-[1340px] py-8 mx-auto ">
        <div className="text-4xl mx-auto text-center md:pt-8  text-black font-bold">
          Contact Me
        </div>
        <div className="w-full block font-bold items-center pb-6 mx-auto text-center">
          <AiOutlineLine className='text-black text-2xl inline-block' />
          <div className='text-[#d00a32] inline-block'>Get in touch</div>
          <AiOutlineLine className='text-black text-2xl inline-block' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 p-4">
            <AiOutlineLine className='text-black text-2xl inline-block' />
            <div className='text-[#d00a32] inline-block'>Get in touch</div>
            <AiOutlineLine className='text-black text-2xl inline-block' />
            <div className="py-3">If you want to contact me , You can contact me by : </div>
            <div className="flex py-2">
              <div className="p-2">
                <AiOutlineUser className='text-[#d00a32] items-center text-3xl' />
              </div>
              <div className='px-2'>
                <h6 className="font-bold ">Name</h6>
                <p className="text-gray-600">MISHRI LAL SAHU</p>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2 ">
                <BsWhatsapp className='text-[#d00a32] items-center text-3xl' />
              </div>
              <div className='px-2'>
                <a href='https://wa.me/918419892041?text=Hello!%20I%20have%20question%20for%20your%20service.%20%0ACan%20you%20help%20me%20please%3F' rel="noreferrer" target='_blank' ><h6 className="font-bold ">Whatsapp Number</h6></a>
                <a href='https://wa.me/918419892041?text=Hello!%20I%20have%20question%20for%20your%20service.%20%0ACan%20you%20help%20me%20please%3F' rel="noreferrer" target='_blank' ><p className="text-gray-600">+91 8419892041 </p></a>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2">
                <CiLocationArrow1 className='text-[#d00a32] items-center text-3xl' />
              </div>
              <div className='px-2'>
                <h6 className="font-bold ">Address</h6>
                <p className="text-gray-600">Lucknow, Utter Pradesh</p>
              </div>
            </div>
            <div className="flex py-2">
              <div className="p-2">
                <TfiEmail className='text-[#d00a32] items-center text-3xl' />
              </div>
              <div className='px-2'>
                <h6 className="font-bold ">Email Address</h6>
                <p className="text-gray-600 text-sm">engineermishrilalsahu@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-4">
          <AiOutlineLine className='text-black text-2xl inline-block' />
            <div className='text-[#d00a32] inline-block'>Message me</div>
            <AiOutlineLine className='text-black text-2xl inline-block' />
            <MyForm  />
          </div>

        </div>
      </div>
    </div>
  )
}
