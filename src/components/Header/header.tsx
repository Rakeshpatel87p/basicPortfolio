import React from "react";
import { Link } from "gatsby";
import navLinks from "./content.json";

import HeaderStyle from "./styles";
import { css } from "styled-components";

interface Props {
  siteTitle: string;
  sticky: boolean;
  element: HTMLElement;
}

const Header = (props: Props): JSX.Element => {
  return (
    <HeaderStyle ref={props.element} isSticky={props.sticky}>
      <h1>
        <Link to={"/"}>{props.siteTitle}</Link>
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
};

export default Header;
