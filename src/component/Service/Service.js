import Aos from 'aos';
import React from 'react';

Aos.init()

export default function Service({gambar, title, text}) {
  return (
    <div className='flex px-2 py-3 sm:mx-4 my-4 sm:w-[360px] sm:h-[140px] 
    bg-white
    rounded-lg
    shadow-lg
    xs:w-full
    xs:h-auto
    shadow-neutral-300
    sm:shadow-none
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    '
    data-aos="fade-up"
    data-aos-duration="1000"
    >
        <div className=' mr-4 flex-auto'>
            <img className=' aspect-square w-[66px]' src={gambar} alt="atl" />
        </div>
        <div className='flex-auto'>
            <h1 className='font-semibold mb-3 text-2xl' >{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
