import React from "react";
import pic from "./pic/pic.jpg";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={pic} alt="Founder" />

        <h2>Ranjeet kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ranjeet-soni/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/ranjeet8996/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ranjeet1996" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
