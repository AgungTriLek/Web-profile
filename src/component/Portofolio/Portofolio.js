import Aos from 'aos';
import React from 'react';

Aos.init()

export default function Portofolio({gambar, title, href, demo}) {
  return (
    <div className='px-4 py-3
    my-4 mx-4
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    '
    data-aos="fade-up"
    data-aos-duration="1000"
    >
        <img className='w-full' src={gambar} alt="" />
        <h1 className='font-bold my-3 h-10'>{title}</h1>
        <div className='flex justify-around items-center'>
            <a className='hover:text-white' href="#github">Github</a>
            <a className='py-2 px-3 bg-white font-semibold rounded-lg hover:bg-blue-800 hover:text-white' href="#demo">Demo</a>
        </div>
    </div>
  )
}
