import React from "react";
import { Link } from "gatsby";
import navLinks from "./content.json";

import Nav from "./styles/nav";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <header>
    <h1>
      <Link>{siteTitle}</Link>
    </h1>
    <Nav>
      <ul>
        {navLinks.map((link, i) => (
          <li key={`${link.name}_${i}`}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  </header>
);

export default Header;
