import React from "react";

import email from "../assets/img/icons/emailIcon.png";
import whatsapp from "../assets/img/icons/whatsappIcon.png";
import position from "../assets/img/icons/positionIcon.png";
import linkedin from "../assets/img/icons/linkedinIcon.png";
import instagram from "../assets/img/icons/instagramIcon.png";
import twitch from "../assets/img/icons/twitchIcon.png";

function Contacts() {
  return (
    <div className="contactsBackground">
      <h1 className="contactsTitle">
        C<span>ontacts</span>
      </h1>
      <div className="contactsBox">
        <div className="marginBox">
          <div className="boxContent">
            <img src={email} alt="email" className="contactsImgSize" />
            <p>
              <a href="mailto:yahiaelmontassir@gmail.com">
                yahiaelmontassir@gmail.com
              </a>
            </p>
          </div>
          <div className="boxContent">
            <img src={whatsapp} alt="whatsapp" className="contactsImgSize" />
            <p>
              <a href="tel:+330753045325">07.53.04.53.25</a>
            </p>
          </div>
          <div className="boxContent">
            <img src={position} alt="position" className="contactsImgSize" />
            <p>
              <a
                href="https://www.google.com/maps/place/13400+Aubagne/@43.2904193,5.5292616,13z/data=!3m1!4b1!4m5!3m4!1s0x12c9a333f0a526cb:0x2c8d21e1b18cc2bc!8m2!3d43.2926781!4d5.5676425"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aubagne (13400) - FRANCE
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* second block */}
      <div className="contactsBox">
        <div className="marginBox">
          <div className="boxContent">
            <img src={linkedin} alt="linkedin" className="contactsImgSize" />
            <p>
              <a
                href="https://www.linkedin.com/in/yahia-el-montassir-04b5a4225/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yahia EL MONTASSIR
              </a>
            </p>
          </div>
          <div className="boxContent">
            <img src={instagram} alt="instagram" className="contactsImgSize" />
            <p>
              <a
                href="https://www.instagram.com/amegakurenomasku/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                @amegakurenomasku
              </a>
            </p>
          </div>
          <div className="boxContent">
            <img src={twitch} alt="twitch" className="contactsImgSize" />
            <p>
              <a
                href="https://www.twitch.tv/ia9607"
                target="_blank"
                rel="noopener noreferrer"
              >
                IA9607
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="formBox">
        <div className="marginBox">
          <form>
            <label>
              NAME
              <input
                type="text"
                name="name"
                value="You know, what your parents give you when you are born."
              />
            </label>
            <label>
              EMAIL
              <input
                type="text"
                name="email"
                value="Where usually somewhere there is ‘@’."
              />
            </label>
            <label>
              MESSAGE SUBJECT
              <input
                type="text"
                name="message subject"
                value="The reason why you want to send me a message."
              />
            </label>
            <label>
              MESSAGE
              <input
                type="text"
                name="message"
                value="Here you can write me something, even a joke if you like or the story of your life."
                className="formMessage"
              />
            </label>
            <input
              type="submit"
              value="Please, don’t send this message"
              className="formButton"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
