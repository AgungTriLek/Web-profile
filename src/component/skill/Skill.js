import Aos from "aos";
import React, { useState } from "react";
import data from "../json/descrip";
import bgskill from "../../asset/ilustrasi/bgskill-removebg-preview.png";
// import ExpressJs from "../../asset/img/ExpressJs.png";
import DomPurify from "dompurify";

Aos.init();

export default function Skill() {
  const [idData, setIdData] = useState(undefined);
  return (
    <div
      className="grid
    lg:grid-cols-2"
    >
      <div className="text-center grid grid-cols-2 sm:grid-cols-4 sm:justify-items-center sm:h-full">
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="px-4 py-3 cursor-pointer
    w-[100px]
    h-[auto]
    m-auto
    mb-6
    sm:mx-4 sm:my-4
    bg-gradient-to-bl 
    to-[#A66CFF] 
    from-[#3971A4] 
    rounded-lg
    hover:shadow-lg
    hover:shadow-[#a76cffb2]
    "
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={(e) => setIdData(e.currentTarget.id)}
          >
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + `/asset/img/${item.img}`}
              alt="gambar"
            />
            <h1 className="font-bold">{item.title}</h1>
            <p>{item?.knowledge}</p>
          </div>
        ))}
      </div>
      <div
        style={{ backgroundImage: `url(${bgskill})` }}
        className="hidden lg:block bg-no-repeat bg-center h-[500px]"
      >
        {idData !== undefined ? (
          <div className="pl-[24px]">
            <h1 className="text-white text-center font-semibold text-xl mb-3 ">
              Description of {data[idData - 1].title}
            </h1>
            <div
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: DomPurify.sanitize(data[idData - 1].descript),
              }}
            />
            <p className="text-right font-light italic text-white">Wikipedia</p>
            <a
              className="px-6 py-4 rounded-lg text-white hover:bg-white hover:text-black"
              href={data[idData - 1].link}
            >
              Read more
            </a>
          </div>
        ) : (
          <div>
            <h1 className="text-white text-center font-semibold text-xl mb-3 ">
              Description of My Skill
            </h1>
            <div className="flex justify-center">
              <span className="mt-6 rounded-xl p-4 text-white">
                Click my skill to see a description
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
