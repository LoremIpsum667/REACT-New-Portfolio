import React from "react";

import github from "./assets/img/icons/githubIcon.png";
import instagram from "./assets/img/icons/instagramIcon.png";
import linkedin from "./assets/img/icons/linkedinIcon.png";
import twitch from "./assets/img/icons/twitchIcon.png";

function Footer() {
  return (
    <div className="footerContainer">
      <ul>
        <li>
          <a
            href="https://github.com/LoremIpsum667"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="footerIcon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/amegakurenomasku/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" className="footerIcon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yahia-el-montassir-04b5a4225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="footerIcon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitch.tv/ia9607"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitch} alt="twitch" className="footerIcon" />
          </a>
        </li>
      </ul>
      <p>
        Yahia EL MONTASSIR © 2022 <br />
        All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
