import Aos from "aos";
import React, { useState } from "react";

Aos.init();

export default function Service({ gambar, title, text }) {
  const [notif, setNotif] = useState(false);
  const isNotif = () => {
    setNotif(!notif);
    setTimeout(() => {
      setNotif((e) => !e);
    }, 2000);
  };
  return (
    <div
      onClick={isNotif}
      className=" px-2 py-3 mx-2 my-4 sm:w-[400px]
    text-center
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    cursor-pointer
    "
      data-aos="fade"
      data-aos-duration="1000"
    >
      {notif ? (
        <div className="absolute right-0 left-0 text-white animate-bounce">
          <span className="bg-zinc-800 px-2 py-2 rounded-lg transf ">
            Copied
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="">
        <img
          loading="lazy"
          className="m-auto"
          width={40}
          src={gambar}
          alt="atl"
        />
        <h1 className="font-semibold text-base mb-1 mt-3">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
