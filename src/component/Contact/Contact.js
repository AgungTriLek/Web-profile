import React from 'react'

export default function Service({gambar, title, text}) {
  function Copytext(value) {
    navigator.clipboard.writeText(value)
    return alert('copied successfully')
  }
  return (
    <div onClick={() => Copytext(title)} className='flex px-2 py-3 mx-2 my-4 w-[400px] h-[100px] 
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    cursor-pointer
    '>
        <div className='mt-2 mr-4'>
            <img width={40} src={gambar} alt="atl" />
        </div>
        <div className='mt-2 '>
            <h1 className='font-bold text-xl mb-3'>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
