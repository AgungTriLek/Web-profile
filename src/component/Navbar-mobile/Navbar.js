import React from 'react'

export default function NavBar({children}) {
  return (
    <nav 
    className='
    py-2 px-6
    text-xs font-normal
    bg-slate-900
    fixed bottom-0
    my-4 mx-4
    rounded-[50px]
    hidden
    xs:block
    left-0
    right-0
    
    '>
        <ul
        className='
        flex
        justify-between
        space-x-3
        '>
            {children}
        </ul>
    </nav>
  )
}
