import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import profile from '../images/profile-1.png';
import Typed from 'react-typed';

function AboutMe(props) {
    return (
        <div className='bg-white py-4'>
            <div className="max-w-[1240px] px-2 py-12 mx-auto ">
                <div className="text-4xl mx-auto text-center md:pt-8  text-black font-bold">
                    About me
                </div>
                <div className="w-full block font-bold items-center mx-auto text-center">
                    <AiOutlineLine className='text-black text-2xl inline-block' />
                    <div className='text-[#d00a32] inline-block'>Who i am</div>
                    <AiOutlineLine className='text-black text-2xl inline-block' />
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    <div className="col-span-1 text-center ">
                        <img src={profile} className='mx-auto max-h-[400px]  md:max-w-[90%] md:h-auto' alt="Profile" />
                    </div>
                    <div className="col-span-1 xl:col-span-2 md:pl-6  md:pt-20">
                        <p className='font-bold  text-xl md:text-xl xl:text-2xl py-2 xl:py-4'>I'm Mishri Lal Sahu and I'm a &nbsp;<Typed
                            className='text-[#d00a32]' strings={['Single', 'Good Student', 'Web Developer', 'App Developer', 'Ethical Hacker', 'Blogger']}
                            typeSpeed={80}
                            loop={true}
                        /></p>
                        <p className='text-sm md:text-md xl:text-xl text-justify' >
                        I have done my high school from BHD inter college 
                        Dheneypur Gonda in 2019 with 81.67% marks and Diploma in 
                        Computer Science & Engineering from  Government Polytechnic Mohammadi-  in 2022 with 79.07% marks. Currently I am pursuing B.Tech in Computer Science & 
                        Engineering 
                        from Dr. MCSET Lucknow since 2022. Recently I joined Softpro India Computer technologies (p) ltd. as intern and  here I worked on web App(ammc.ac.in, skrcolleg.ac.in,
                        brkccollege.ac.in, softproetp.in(Using HTML5, CSS3, Bootstrap 5.2, Javascript , jquery 3.2, etc.)) as fronted developer.
                        </p> 
                        <a href="./" download className='text-white relative top-[30px] bg-[#d00a32] px-4 md:px-8 text-md md:text-xl rounded-md py-1
                           border-4 border-[#d00a32] hover:bg-transparent hover:text-[#d00a32] '>Download CV</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;