import React from "react";
import { Link } from "react-router-dom";
import { MyRoutes } from "../Router";

import baka from "../assets/img/baka.png";
import contacts from "../assets/img/contactsImg.png";
import projects from "../assets/img/projectsImg.png";
import skills from "../assets/img/skillsImg.png";

function Home() {
  return (
    <div>
      <h1 className="myName">
        EL MONTASSIR <span>YAHIA</span>
      </h1>
      <h2 className="gradientTextOne">Developer Front-End</h2>
      <h2 className="gradientTextTwo">UI/UX Designer</h2>
      <h4 className="marketingText">ラょッえ親5英やト風者辺体昨域ーぎ。</h4>
      <div className="imgAndInfoContainer">
        <img src={baka} alt="baka" className="baka" />
        <div className="resumeContainer">
          <p>
            津米めい長種来すまトあ答問着ねり武港コウクイ島上しく武向ヱロ病再ラむとフ画事ケルイ野岩れかさ党専らおえに逃点方使レ。
            提テカヱホ堀就だえ局的コク最団なぴせド化流そふじ再68根たらえど禁32展がず位四田ざこンす戦創チヱヌソ献也近仇佗ょはる。
            面マオフ暮演ヘ稿配ふひぱお出中ぐゅしス健白ヲオケ変林飾ケウロセ起害メサ州告ラょッえ親5英やト風者辺体昨域ーぎ。
          </p>
          <button>
            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
            Resume
            {/* </a> */}
          </button>
        </div>
      </div>
      <div className="bottomNavigation">
        <div className="cardSection">
          <Link to={MyRoutes.SKILLS} style={{ textDecoration: "none" }}>
            <img src={skills} alt="skills" className="cardsImgSize" />
            <p>Skills</p>
          </Link>
        </div>
        <div className="cardSection">
          <Link to={MyRoutes.PROJECTS} style={{ textDecoration: "none" }}>
            <img src={projects} alt="projects" className="cardsImgSize" />
            <p>Projects</p>
          </Link>
        </div>
        <div className="cardSection">
          <Link to={MyRoutes.CONTACTS} style={{ textDecoration: "none" }}>
            <img src={contacts} alt="contacts" className="cardsImgSize" />
            <p>Contacts</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
