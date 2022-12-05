import React from "react";

export default function NavbarItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`
    block
    text-[14px]
    sm:text-base
    rounded-md
    py-5
    text-white
    font-semibold
    `}
      >
        {children}
      </a>
    </li>
  );
}
