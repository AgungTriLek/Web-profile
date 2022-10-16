import React from 'react'

export default function Service({gambar, title, text}) {
  return (
    <div className='flex px-2 py-3 mx-4 my-4 w-[360px] h-[140px] 
    bg-white
    rounded-lg
    shadow-lg
    xs:w-screen
    xs:h-auto
    shadow-neutral-300
    sm:shadow-none
    hover:shadow-lg
    hover:shadow-[#a76cffb2]'>
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
