import { useState } from "react";
import Logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosRadio } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleAgreementChange = () => setAgreement(!agreement);

  return (
    <div className="xl:px-28 lg:px-14 md:px-10 px-5 py-10 bg-secondaryBackground">
      <div className="lg:grid lg:grid-cols-3 my-10">
        {/* Subscription Section */}
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#806f96]"
              placeholder="Your Email Address"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <div
              className={`w-5 h-5 border-2 rounded-full cursor-pointer flex items-center justify-center bg-transparent`}
              onClick={handleAgreementChange}
            >
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                checked={agreement}
                onChange={handleAgreementChange}
              />
              {agreement && (
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              )}
            </div>
            <label htmlFor="agreement" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <img
              alt="Forcythe logo"
              width="130"
              height="9"
              className="mb-5 md:mb-8"
              src={Logo}
              style={{ color: "transparent" }}
            />
            <p className="text-base text-darkGrey font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://www.facebook.com/forcythe/"
              >
                <FaFacebookF color="#60A6E7" fontSize={22} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://www.instagram.com/forcythe"
              >
                <FaInstagram color="#60A6E7" fontSize={22} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://twitter.com/forcythe_"
              >
                <FaXTwitter color="#60A6E7" fontSize={22} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://www.linkedin.com/company/forcythe/"
              >
                <FaLinkedinIn color="#60A6E7" fontSize={22} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://www.youtube.com/@forcythe"
              >
                <AiOutlineYoutube color="#60A6E7" fontSize={22} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://podcasters.spotify.com/pod/show/the-future-insight"
              >
                <IoIosRadio color="#60A6E7" fontSize={22} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-accent2 font-medium">
                <a href="/about">
                  <span>About</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/services">
                  <span>Services</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/services#portfolio">
                  <span>Portfolio</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/studio">
                  <span>Studio</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/foundation">
                  <span>Foundation</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/career">
                  <span>Careers</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/blog">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center"
                href="https://www.facebook.com/forcythe/"
              >
                <FaFacebookF color="#60A6E7" fontSize={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright border-t-[1px] border-[#60A6E7]">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
