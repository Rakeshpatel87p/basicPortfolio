import React from "react";
import { Link } from "gatsby";
import navLinks from "./content.json";

import HeaderStyle from "./styles/header";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <HeaderStyle>
    <h1>
      <Link>{siteTitle}</Link>
    </h1>
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li key={`${link.name}_${i}`}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </HeaderStyle>
);

export default Header;
