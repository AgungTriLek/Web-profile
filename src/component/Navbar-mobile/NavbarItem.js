import React from 'react'

export default function NavbarItem({href, isActive, children}) {
  return (
    <li>
    <a 
    href={href}
    className={`
    block
    py-3
    rounded-md
    ${isActive ? 'text-yellow-400': 'text-white'}
    `}>
        {children}
    </a>
</li>
  )
}
