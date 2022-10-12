import React from 'react'

export default function History() {
  return (
  <div className='flex-1'>
  <h1 className='font-semibold text-xl text-center mb-8 mt-4'>Educational Background</h1>
    <div className='flex  h-[300px]'>
        <p className='self-end mb-8 flex-1 mr-2 sm:mr-4 text-sm text-right'>
            Gondang State High School 
            Majoring in Science, 
            2015-2018
        </p>
            <div 
            className='w-1 h-[100%] 
            bg-[#A66CFF] 
            rounded m-auto 
            flex items-center 
            justify-between flex-col'>
                <div className='w-4 h-4 rounded-xl bg-slate-600 mt-14' />
                <div className='w-4 h-4 rounded-xl bg-slate-600 mb-14' />
            </div>
        <p className='self-start mt-8 flex-1 ml-2 sm:ml-4 text-sm'>
            Jember State Polytechnic,
            Department of Information Technology,
            Computer Engineering study program
        </p>
    </div>
    </div>

  )
}
