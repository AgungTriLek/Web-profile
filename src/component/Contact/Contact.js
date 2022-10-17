import React from 'react'

export default function Service({gambar, title, text}) {
  function Copytext(value) {
    navigator.clipboard.writeText(value)
    return alert('copied successfully')
  }
  return (
    <div onClick={() => Copytext(title)} className=' px-2 py-3 mx-2 my-4 sm:w-[400px]
    text-center
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    cursor-pointer
    '>
        <div className=''>
            <img className='m-auto' width={40} src={gambar} alt="atl" />
            <h1 className='font-semibold text-base mb-1 mt-3'>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
