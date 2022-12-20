import Aos from "aos";
import React from "react";
import gambar from "../../asset/img/myphoto.png";
import email from "../../asset/icons/Send Email.png";
import download from "../../asset/icons/Download.png";
import WA from "../../asset/icons/WhatsApp.png";
import IG from "../../asset/icons/Instagram.png";
import LK from "../../asset/icons/LinkedIn.png";
import GH from "../../asset/icons/GitHub.png";
import CV from "../../asset/pdf/Agung Tri Leksono CV_organized.pdf";

Aos.init();

export default function Intro() {
  return (
    <div className="text-center mb-10 flex-1">
      <img loading="lazy" className="inline" src={gambar} alt="" />
      <h1
        className="font-semibold text-lg mt-4 mb-5"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="300"
      >
        Front-end Developer
      </h1>
      <p
        className="text-left"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        My name is Agung Tri Leksono fresh graduate of Jember State Polytechnic
        Department of Information Technology, computer engineering study
        program, I study a front-end developer and have the expertise and my
        current skills are HTML, CSS, Javascript, Bootstrap, React, and Next.Js.
        I have a strong personality, uphold my stance, look at things I n
        various aspects, and discipline
      </p>
      <ul className="flex text-center mt-8 items-center">
        <li className="">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=agungtrileksono1@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="py-3 px-5 
                    bg-gradient-to-bl 
                    to-[#A66CFF] 
                    from-[#3971A4] 
                    rounded-lg
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    text-sm
                    "
          >
            <img
              loading="lazy"
              className=" inline mr-2 w-8  "
              src={email}
              alt=""
            />
            E-mail
          </a>
        </li>
        <li
          className="ml-6"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/6281334067171"
            className="
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    "
          >
            <img
              loading="lazy"
              className=" w-10 
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl "
              src={WA}
              alt=""
            />
          </a>
        </li>
        <li
          className="ml-3"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="550"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/agung_trl/"
          >
            <img
              loading="lazy"
              className=" w-10 
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl "
              src={IG}
              alt=""
            />
          </a>
        </li>
        <li
          className="ml-3"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="600"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/agung-tri-leksono-074b13219/"
          >
            <img
              loading="lazy"
              className=" w-10 
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl "
              src={LK}
              alt=""
            />
          </a>
        </li>
        <li
          className="ml-3"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="650"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AgungTriLek"
          >
            <img
              loading="lazy"
              className=" w-10 
                        hover:shadow-lg
                        hover:shadow-[#a76cffb2]
                        rounded-3xl "
              src={GH}
              alt=""
            />
          </a>
        </li>
      </ul>
      <div
        className="text-left mt-5"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="200"
      >
        <a href={CV} className="hover:undeline">
          <img loading="lazy" className="inline mr-2" src={download} alt="" />
          Download CV
        </a>
      </div>
    </div>
  );
}
