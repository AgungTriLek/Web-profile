import React from 'react';
import email from '../../asset/icons/Send Email.png';
import download from '../../asset/icons/Download.png';
import WA from '../../asset/icons/WhatsApp.png';
import IG from '../../asset/icons/Instagram.png';
import LK from '../../asset/icons/LinkedIn.png';
import GH from '../../asset/icons/GitHub.png';

export default function Description() {
  return (
    
        <section 
        className='flex-1 
        text-center 
        mt-[24px] 
        sm:mt-[60px] 
        lg:mt-[150px]
        md:flex-auto
        lg:flex-1
        '>
            <h1 className='
            font-semibold
            text-4xl
            pb-2
            '>
                Hi, I'm Agung Tri Leksono
            </h1>
            <span className='m-auto
            opacity-70
            text-sm
            '>
                Front-end Developer
            </span>
            <p className='text-left mt-6 mb-[40px]'>
                Let’s create your website that fits your description with neat coding so that 
                easy to edit, update and delete a feature. certainly I will give you insight and 
                instruction so that I can help you to build your website maximally
            </p>
            <ul className='flex items-center'>
                <li className=''>
                    <a href="#email" className='py-3 px-6 
                    bg-gradient-to-bl 
                    to-[#A66CFF] 
                    from-[#3971A4] 
                    rounded-lg
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    '>
                        <img className='inline mr-2 w-6 sm:w-[33px]' src={email} alt="" />
                        E-mail
                    </a>
                </li>
                <li className='ml-6 ' >
                    <a href="#WA" className='
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    '>
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={WA} alt=""/>
                    </a>
                </li>
                <li className='ml-3'>
                    <a href="#IG">
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={IG} alt=""/>
                    </a>
                </li>
                <li className='ml-3'>
                    <a href="#LK">
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={LK} alt=""/>
                    </a>
                </li>
                <li className='ml-3'>
                    <a href="#GH" >
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={GH} alt=""/>
                    </a>
                </li>
                
            </ul>
            <div className='text-left mt-5'>
                <a  href="#download" className='hover:undeline'>
                    <img className='inline mr-2' src={download} alt=""/>
                    Download CV
                </a>
            </div>
        </section>
    
  )
}
