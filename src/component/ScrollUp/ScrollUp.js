import React, { useState } from "react";
import arrowUp from "../../asset/icons/up.png";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="absolute top-[80vh] right-6 w-[50px] h-[50px] p-3 rounded-full bg-[#5537d8]">
      <button type="button" onClick={scrollToTop}>
        <img src={arrowUp} alt="Home" />
      </button>
    </div>
  );
}
