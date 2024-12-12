import React from "react";
import instagramIcon from "../assets/instagramicon.svg";
import linkedinIcon from "../assets/linkedinicon.svg";
import xIcon from "../assets/xicon.svg";
import youtubeIcon from "../assets/youtubeicon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-themeCream text-pandaBlack">
      {/* Upper Section */}
      <div className="container mx-auto max-w-screen-xl px-4 py-6 flex justify-between items-start">
        <div className="md:w-1/3">
          <h3 className="font-Darumadrop text-2xl font-bold">TaoTao</h3>
          <p>Experience the art of sushi in every bite.</p>
        </div>

        <div className="md:w-1/3 mt-2 md:mt-0">
          <h3 className="text-lg font-bold">NAV</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:underline">
                MENU
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 mt-4 md:mt-0">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>123 Sushi Street</p>
          <p>Foodie City, FC 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>
            Email:{" "}
            <a href="mailto:info@taotaosushi.com" className="hover:underline">
              info@taotaosushi.com
            </a>
          </p>
        </div>
      </div>

      {/* Lower Section */}
      <div>
        <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-start items-center">
          <p className="text-sm">© 2023 TaoTao Sushi. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 md:ml-auto">
            <a href="#" aria-label="X">
              <img src={xIcon} alt="X Icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube Icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
