import React from "react";

export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`
        block
        py-3
        px-4
        rounded-md
        hover:bg-blue-700
        `}
      >
        {children}
      </a>
    </li>
  );
}
