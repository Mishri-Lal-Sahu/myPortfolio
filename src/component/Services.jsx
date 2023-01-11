import React from 'react'
import { AiOutlineLine } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';

export default function Service() {
    return (
        <div className='bg-black py-14 min-h-500px'>
            <div className=" max-w-[1340px] mx-auto">
                <div className="text-4xl mx-auto text-center md:pt-8  text-white font-bold">
                    My Services
                </div>
                <div className="w-full block font-bold items-center mx-auto text-center">
                    <AiOutlineLine className='text-white text-2xl inline-block' />
                    <div className='text-[#d00a32] inline-block'>What i provide</div>
                    <AiOutlineLine className='text-white text-2xl inline-block' />
                </div>
                <div className="grid grid-cols-1 px-4 md:grid-cols-3 mt-6 gap-8">
                    <div className="col-span-1 bg-gray-900 rounded-md p-5 text-center">
                        <FaCode className='text-6xl font-bold mx-auto text-[#d00a32]' />
                        <p className='text-white'>
                            <p className="text-2xl py-2"> Web development</p>
                            I can develop a best web application using python with django (HTML,CSS,JavaScript, Bootstrap), PHP with ci4 and react with tailwindcss.
                        </p>
                    </div>
                    <div className="col-span-1 bg-gray-900 rounded-md p-5 text-center">
                        <FaCode className='text-6xl font-bold  mx-auto text-[#d00a32]' />
                        <p className='text-white'>
                            <p className="text-2xl  py-2">Mobile App development</p>
                            I can develop a best mobile applications using python(Kivy framework), java(android framework).
                        </p>
                    </div>
                    <div className="col-span-1 bg-gray-900 p-5 rounded-md text-center">
                        <FaCode className='text-6xl font-bold mx-auto text-[#d00a32]' />
                        <p className='text-white'>
                            <p className="text-xl py-2">Custom Software development</p>
                            Custom software Development is also available. I provide best Custom Software Application in my experience using any language.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
