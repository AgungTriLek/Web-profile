import Aos from 'aos';
import React from 'react';
import gambar from '../../asset/img/Rectangle 33.png';
import email from '../../asset/icons/Send Email.png';
import download from '../../asset/icons/Download.png';
import WA from '../../asset/icons/WhatsApp.png';
import IG from '../../asset/icons/Instagram.png';
import LK from '../../asset/icons/LinkedIn.png';
import GH from '../../asset/icons/GitHub.png';

Aos.init()

export default function Intro() {
  return (
    <div className='text-center mb-10 flex-1'>
        <img className='inline' src={gambar} alt="" />
        <h1 className='font-semibold text-lg mt-4 mb-5'
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="300"
        >Front-end Developer</h1>
        <p className='text-left'
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="500"
        >
        My name is Agung Tri Leksono fresh graduate of Jember State Polytechnic 
Department of Information Technology, computer engineering study program, 
I study a front-end developer and have the expertise and
my current skills are HTML, CSS, Javascript, Bootstrap, React, and Next.Js.
I have a strong personality, uphold my stance, look at things I
n various aspects, and discipline
        </p>
        <ul className='flex text-center mt-8 items-center'>
                <li className=''>
                    <a href="#email" className='py-3 px-5 
                    bg-gradient-to-bl 
                    to-[#A66CFF] 
                    from-[#3971A4] 
                    rounded-lg
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    text-sm
                    '>
                        <img className=' inline mr-2 w-6 sm:w-[24px] md:w-[33px]' src={email} alt="" />
                        E-mail
                    </a>
                </li>
                <li className='ml-6'
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                 >
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
                <li className='ml-3'
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="550"
                >
                    <a href="#IG">
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={IG} alt=""/>
                    </a>
                </li>
                <li className='ml-3'
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="600"
                >
                    <a href="#LK">
                        <img 
                        className=' w-6 sm:w-[33px]
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl '
                        src={LK} alt=""/>
                    </a>
                </li>
                <li className='ml-3'
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="650"
                >
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
            <div className='text-left mt-5'
            data-aos="fade"
            data-aos-delay="50"
            data-aos-duration="200"
            >
                <a  href="#download" className='hover:undeline'>
                    <img className='inline mr-2' src={download} alt=""/>
                    Download CV
                </a>
            </div>
    </div>
  )
}
