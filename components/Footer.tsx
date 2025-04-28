import { FaFacebook, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://wa.me/01114922929">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Mohamed AbdEl Halim
        </p>

        <div className="flex items-center md:gap-3 gap-6">
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
    </footer>
  );
};

export default Footer;
