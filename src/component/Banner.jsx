import React from 'react';
import Typed from 'react-typed';

function Banner(props) {
    return (
        <div className=" w-full py-[80px] md:py-[220px]"  >
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-white text-[25px] md:text-[30px]'>Hello,my name is</div>
                <div className='text-white font-bold xl:text-[80px] md:text-[60px] text-[40px] leading-none'>MISHRI LAL SAHU</div>
                <div className='text-white font-semibold text-[25px] md:text-[30px] xl:text-[40px]'>And I'am a &nbsp;
                <Typed 
                className='text-[#d00a32] ' strings={['Single','Good Student','Web Developer','App Developer', 'Ethical Hacker','Blogger']}
                typeSpeed={80}
                loop={true}
                /></div>
                <div className='mt-7'>
                <a href="./" className='text-white bg-[#d00a32] px-8 text-[20px] md:text-2xl rounded-md py-1
                 border-4 border-[#d00a32] hover:bg-transparent hover:text-[#d00a32] '>Student</a>
                </div>
                
            </div>

            
        </div>
    );
}

export default Banner;