import React from 'react'

export default function NavItem({href, isActive, children}) {
  return (
    <li>
        <a 
        href={href}
        className={`
        block
        py-3
        px2
        rounded-md
        ${isActive ? 'text-yellow-400': 'text-white'}
        `}>
            {children}
        </a>
    </li>
  )
}
