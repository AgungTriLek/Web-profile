import React from 'react'

export default function Nav({children}) {
  return (
    <nav 
    className='
    py-2
    px-2
    text-sm
    font-medium
    bg-slate-900
    sm:px-[24px]
    md:px-[60px]
    lg:px-[120px]
    '>
        <ul
        className='
        flex
        justify-between
        space-x-3
        xs:flex-none
        '>
            {children}
        </ul>
    </nav>
  )
}
