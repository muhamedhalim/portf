import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaFacebook, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Mohamed,full stack Developer
          </p>
          <div className="">
            <a href="https://drive.google.com/file/d/1LbDLWQvu90RiARGX7QDYQnElhWkGBPif/view?usp=sharing">
              <MagicButton
                title="My Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="https://1drv.ms/b/c/f329c2f1197d2fab/EaUG5FoUXXdCt59yTqMADBcBPlelJnfC8mSiJSWgwWlVbA">
              <MagicButton
                title="Full Stack Diploma"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:gap-2 gap-2">
        <a
          href="https://www.facebook.com/mabdalhalim2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:scale-110 transition-all">
            <FaFacebook className="text-white text-xl w-9 h-9 " />
          </div>
        </a>
        <a
          href="https://wa.me/01114922929"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:scale-110 transition-all">
            <FaWhatsapp className="text-white text-xl w-9 h-9 " />
          </div>
        </a>
        <a
          href="https://github.com/muhamedhalim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:scale-110 transition-all">
            <FaGithub className="text-white text-xl w-9 h-9 " />
          </div>
        </a>
        <a
          href="https://www.instagram.com/mabdalhalim2002/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:scale-110 transition-all">
            <FaInstagram className="text-white text-xl w-9 h-9 " />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-halem-3875242b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:scale-110 transition-all">
            <FaLinkedin className="text-white text-xl w-9 h-9 " />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
