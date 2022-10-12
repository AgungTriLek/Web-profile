import React from 'react';
import gambar from '../../asset/img/Hero.png';

export default function Hero() {
  return (
    <section 
    className='
    flex-1 hidden 
    sm:block 
    md:flex-auto 
    md:flex 
    md:justify-center 
    md:items-center
    lg:flex-1
    '>
    <img className='md:w-[700px] lg:w-[400px]' src={gambar} alt=""/>
    </section>
  )
}
