import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import navLinks from "../../../content/navLinks";

import { Nav } from "./styles";

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link>{siteTitle}</Link>
      <Nav>
        <ul>
          {navLinks.map((link, i) => (
            <li key={`${link.name}_${i}`}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </Nav>
    </h1>
  </header>
);

export default Header;
