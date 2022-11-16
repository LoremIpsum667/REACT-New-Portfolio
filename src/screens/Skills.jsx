import React from "react";

import designerIcon from "../assets/img/skillsImg/designerIcon.png";
import devIcon from "../assets/img/skillsImg/devIcon.png";
import personalSkillsIcon from "../assets/img/skillsImg/personalSkillsIcon.png";

function Skills() {
  return (
    <div>
      <h1 className="skillsTitle">
        S<span>kills</span>
      </h1>
      <div className="skillsContainer">
        <div className="leftContent">
          <img src={designerIcon} alt="skills" className="imgSize" />
          <h2 className="firstSubtitle">Designer</h2>
          <h3 className="secondSubtitle">What I like to design:</h3>
          <p className="skillsText">
            UI, UX, Web Design, Mobile Design, <br /> try to do new things.
          </p>
          <h3 className="secondSubtitle">Design Tools:</h3>
          <ul className="skillsList">
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Photoshop</li>
            <li>Google Fonts</li>
            <li>Flaticon</li>
            <li>LesChampsLibres</li>
            <li>Storyset</li>
            <li>Freepik</li>
            <li>Balsamiq Wireframs</li>
            <li>Draw.io</li>
          </ul>
        </div>
        <div className="verticalSeparator"/>
        <div className="middleContent">
          <img src={devIcon} alt="skills" className="imgSize" />
          <h2 className="firstSubtitle">Front-End Developer</h2>
          <h3 className="secondSubtitle">The languages I speak:</h3>
          <p className="skillsText">
            HTML, CSS, JavaScript, TypeScript, <br /> React, Sass, React Native,
            Git.
          </p>
          <h3 className="secondSubtitle">Dev Tools:</h3>
          <ul className="skillsList">
            <li>VS Code</li>
            <li>Terminal</li>
            <li>Bitbucket</li>
            <li>Github</li>
            <li>
              Several extensions available <br />
              on the Google Chrome store
            </li>
          </ul>
        </div>
        <div className="verticalSeparator"/>
        <div className="rightContainer">
          <img src={personalSkillsIcon} alt="skills" className="imgSize" />
          <h2 className="firstSubtitle">Plus Ultra</h2>
          <h3 className="secondSubtitle">My strengths:</h3>
          <p className="skillsText">
            I am a person of few words, <br />I let my projects speak for me.
          </p>
          <h3 className="secondSubtitle">Personal Tools:</h3>
          <ul className="skillsList">
            <li>Seriousness</li>
            <li>Dynamics</li>
            <li>Independent work</li>
            <li>Perfectionist</li>
            <li>Curious</li>
            <li>
              Constant desire to improve myself <br />
              on work and personal level
            </li>
            <li>
              I can play and watch a TV series <br />
              at the same time!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
