import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* background grid - fixed positioning to prevent layout shifts */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a
          <span className="text-purple"> passionate developer</span> to join
          your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I’m a CSE student with a passion for full-stack development.
          <br />
          let&apos;s connect and discuss how I can contribute to your next
          project.
        </p>
        <a href="mailto:panwarmohit724@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohit Panwar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            const link =
              (info as { id: number; img: string; link?: string }).link || "#";
            return (
              <a
                key={info.id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
