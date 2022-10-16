import React from 'react'

export default function Footer() {
  return (
    <div className='flex bg-[#131F29] h-[350px] text-center mt-[100px] text-white'>
      <div className='flex-1'>
        <h1>AGUNG</h1>
        <h2>Front-End Developer</h2>
      </div>
      <div className='flex flex-col flex-1'>
        <div>
          <a href="#myskill">My Skill</a>
          <a href="#myskill">Service</a>
          <a href="#myskill">Portofolio</a>
        </div>
        <div>
          <p>@Copyright by Agung Tri Leksono</p>
        </div>
      </div>
      <div className='flex flex-1'>
        <img src="" alt="adsaf"/>
        <img src="" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>
      </div>
    </div>
  )
}
