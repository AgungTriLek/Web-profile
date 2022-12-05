import React from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef, useEffect } from "react";
import email from "../../asset/icons/Send Email.png";
import download from "../../asset/icons/Download.png";
import WA from "../../asset/icons/WhatsApp.png";
import IG from "../../asset/icons/Instagram.png";
import LK from "../../asset/icons/LinkedIn.png";
import GH from "../../asset/icons/GitHub.png";

Aos.init();
gsap.registerPlugin(TextPlugin);

export default function Description() {
  const Myname = useRef(null);
  useEffect(() => {
    const el = Myname.current;
    gsap.to(el, {
      duration: 2,
      text: {
        value: "Hi, I'm Agung Tri Leksono",
        delimiter: "",
      },
    });
  }, []);

  return (
    <section
      className="
        text-center 
        mt-[24px] 
        sm:mt-[120px] 
        lg:mt-[150px]
        col-span-5
        "
    >
      <h1
        className="
            font-semibold
            text-4xl
            pb-2
            "
        ref={Myname}
      ></h1>
      <span
        className="m-auto
            text-zinc-500
            text-sm
            "
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        Front-end Developer
      </span>
      <p
        className="text-left mt-6 mb-[40px]"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        Let’s create your website that fits your description with neat coding so
        that easy to edit, update and delete a feature. certainly I will give
        you insight and instruction so that I can help you to build your website
        maximally
      </p>
      <ul className="flex items-center">
        <li className="">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=agungtrileksono1@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="py-3 px-6 
                    bg-gradient-to-bl 
                    to-[#A66CFF] 
                    from-[#3971A4] 
                    rounded-lg
                    hover:shadow-lg
                    hover:shadow-[#a76cffb2]
                    "
          >
            <img
              loading="lazy"
              className="inline mr-2 w-6 sm:w-[33px]"
              src={email}
              alt=""
            />
            E-mail
          </a>
        </li>
        <li
          className="ml-6 "
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
              className=" w-6 sm:w-[33px]
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
              className=" w-6 sm:w-[33px]
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
              className=" w-6 sm:w-[33px]
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
              className=" w-6 sm:w-[33px]
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
        <a href="#download" className="hover:undeline">
          <img loading="lazy" className="inline mr-2" src={download} alt="" />
          Download CV
        </a>
      </div>
    </section>
  );
}
