import React from "react";
import email from "../../asset/icons/gmail.png";
import WA from "../../asset/icons/WhatsApp.png";
import IG from "../../asset/icons/Instagram.png";
import LK from "../../asset/icons/LinkedIn.png";
import GH from "../../asset/icons/GitHub.png";

export default function Footer() {
  return (
    <div className="bg-[#131F29] xs:h-[350px]">
      <div className="sm:flex  sm:h-[250px] text-center mt-10 sm:mt-[100px] pt-6 text-white">
        <div className="flex-1 ">
          <h1>AGUNG</h1>
          <h2 className="text-semibold text-lg mt-6 xs:my-3">
            Front-End Developer
          </h2>
        </div>
        <div className="flex flex-col flex-1 xs:hidden">
          <div className="mb-[100px]">
            <a
              className="py-1 px-3 hover:bg-white hover:text-[#131f29] mx-1 rounded"
              href="#myskill"
            >
              Skill
            </a>
            <a
              className="py-1 px-3 hover:bg-white hover:text-[#131f29] mx-1 rounded"
              href="#myskill"
            >
              Service
            </a>
            <a
              className="py-1 px-3 hover:bg-white hover:text-[#131f29] mx-1 rounded"
              href="#myskill"
            >
              Portofolio
            </a>
          </div>
          <div>
            <p>@Copyright by Agung Tri Leksono</p>
          </div>
        </div>
        <div className="flex flex-1 items-start justify-around xs:mb-4">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/6281334067171"
          >
            <img loading="lazy" width={40} src={WA} alt="adsaf" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/agung_trl/"
          >
            <img loading="lazy" width={40} src={IG} alt="" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=agungtrileksono1@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img loading="lazy" width={40} src={email} alt="" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/agung-tri-leksono-074b13219/"
          >
            <img loading="lazy" width={40} src={LK} alt="" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AgungTriLek"
          >
            <img loading="lazy" width={40} src={GH} alt="" />
          </a>
        </div>
        <div className="hidden xs:block">
          <p>@Copyright by Agung Tri Leksono</p>
        </div>
      </div>
    </div>
  );
}
