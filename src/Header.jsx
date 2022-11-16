import React from "react";

import { Link } from "react-router-dom";
import { MyRoutes } from "./Router";

const Header = () => {
  return (
    <ul className="headerContainer">
      <div className="logo">
        <li>
          <Link to={MyRoutes.HOME}>I'm a Logo</Link>
        </li>
      </div>
      <li className="neonEffect">
        <Link to={MyRoutes.SKILLS}>Skills</Link>
      </li>
      <li className="neonEffect">
        <Link to={MyRoutes.PROJECTS}>Projects</Link>
      </li>
      <li className="neonEffect">
        <Link to={MyRoutes.PRICING}>Pricing</Link>
      </li>
      <li className="neonEffect">
        <Link to={MyRoutes.CONTACTS}>Contacts</Link>
      </li>
    </ul>
  );
};

export default Header;
