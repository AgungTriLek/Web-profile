import React from 'react'

export default function Skill({gambar, text, text2}) {
  return (
    <div className='px-4 py-3 
    w-[132px]
    m-auto
    mb-6
    sm:mx-4 sm:my-4
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]'>
        <img src={gambar} alt="" />
        <h1 className='font-bold'>{text}</h1>
        <p>{text2}</p>
    </div>
  )
}
