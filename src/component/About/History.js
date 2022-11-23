import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function History() {
    const Pole = useRef(null);
    useEffect(() => {
        const el = Pole.current;
        gsap.fromTo(el, {height: 0}, {duration: 1, height: 300} )
        
    }, []);
  return (
  <div className='flex-1'>
  <h1 className='font-semibold text-xl text-center mb-8 mt-4'>Educational Background</h1>
    <div className='flex' ref={Pole}>
        <p className='
            self-end 
            mb-8 flex-1 
            mr-2 sm:mr-4 
            text-sm text-right
            '
            data-aos="fade"
            data-aos-delay="2000"
            data-aos-duration="500"
            >
            Gondang State High School 
            Majoring in Science, 
            2015-2018
        </p>
            <div 
            className='w-1 h-[100%] 
            bg-[#A66CFF] 
            rounded m-auto 
            flex items-center 
            justify-between flex-col'>
                <div className='w-4 h-4 rounded-xl bg-slate-600 mt-14'
                data-aos="fade"
                data-aos-delay="1300"
                data-aos-duration="500"
                />
                <div className='w-4 h-4 rounded-xl bg-slate-600 mb-14' 
                data-aos="fade"
                data-aos-delay="1700"
                data-aos-duration="500"
                />
            </div>
        <p className='
            self-start 
            mt-8 flex-1 
            ml-2 sm:ml-4 
            text-sm
            '
            data-aos="fade"
            data-aos-delay="1500"
            data-aos-duration="500"
            >
            Jember State Polytechnic,
            Department of Information Technology,
            Computer Engineering study program
        </p>
    </div>
    </div>

  )
}
