import React, { useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';
import { Experience } from './accordion';

export default function MySkill(props) {
    const [show, setShow] = useState(false);
    const toggle = (i) => {
        if (show === i) {
            return setShow(true);
        }
        setShow(i);
    }
    return (
        <div className='bg-white py-4'>


            <div className="max-w-[1340px] px-2 py-12 mx-auto ">
                <div className=" text-xl md:text-3xl xl:text-4xl mx-auto text-center md:pt-8  text-black font-bold">
                    My Skills & Experiences
                </div>
                <div className="w-full block font-bold items-center pb-6 mx-auto text-center">
                    <AiOutlineLine className='text-black text-2xl inline-block' />
                    <div className='text-[#d00a32] inline-block'>What i know</div>
                    <AiOutlineLine className='text-black text-2xl inline-block' />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="col-span-1 pt-4">
                        <h3 className='text-[#d00a32] flex '> <AiOutlineLine className='text-black text-2xl inline-block' /> My Experience <AiOutlineLine className='text-black text-2xl inline-block' /> </h3>
                        {
                            Experience.map((curElem, i) => {
                                return (
                                    <div className="accordionItem mt-4 duration-1000  shadow-md">
                                        <div className={`accordionTitle w-full ${show === i ? 'bg-black' : 'bg-white'}  flex p-3 justify-between`}>
                                            <div className={`heading ${show === i ? ' text-white' : 'text-black'}  text-xl`}>{curElem.projectTitle}</div>
                                            <BiChevronUp onClick={() => toggle(i)} className={` ${show === i ? 'rotate-180 text-white' : 'rotate-0'} text-black text-3xl`} />
                                        </div>
                                        <div className={`${show === i ? 'show' : 'hidden'}  tracking-[1px] text-justify p-5 text-md`}>{curElem.content}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="col-span-1 px-4 pt-4">
                        <h3 className='text-[#d00a32] flex '> <AiOutlineLine className='text-black text-2xl inline-block' /> My Skills <AiOutlineLine className='text-black text-2xl inline-block' /> </h3>
                        {
                            Skill.map((item , i) =>
                            {
                                return(
                                    <div className='relative ' >
                                    <div className="text-xl py-3">{item.skillTitle}</div>
                                    <div className="bg-gray-600 w-full h-[5px] rounded-xl">
                                        <div className='bg-[#d00a32] relative rounded-xl h-full ' style={{width:item.skillObtain}}></div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    );


}
const Skill = [
    
    {
        skillTitle: 'ReactJs',
        skillObtain: '80%'
    },
    {
        skillTitle: 'Javascript',
        skillObtain: '70%'
    },
    {
        skillTitle: 'Bootstrap 5',
        skillObtain: '90%'
    },
    {
        skillTitle: 'Tailwindcss',
        skillObtain: '80%'
    },
    {
        skillTitle: 'Python 3',
        skillObtain: '60%'
    },
    {
        skillTitle: 'MySql',
        skillObtain: '70%'
    },
    {
        skillTitle: 'Ci4',
        skillObtain: '60%'
    },
    {
        skillTitle: 'MobgoDB',
        skillObtain: '30%'
    },
    {
        skillTitle: 'PHP',
        skillObtain: '80%'
    },
    {
        skillTitle: 'Java',
        skillObtain: '30%'
    }
]