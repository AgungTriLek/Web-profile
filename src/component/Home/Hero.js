import React from "react";
import gambar from "../../asset/ilustrasi/codingman.png";

export default function Hero() {
  return (
    <section
      className=" md:flex
      hidden
    col-span-7
    md:justify-center 
    md:items-center
    lg:mb-5
    "
    >
      <div>
        <img
          loading="lazy"
          className="
        "
          width={300}
          src={gambar}
          alt=""
        />
      </div>
    </section>
  );
}
