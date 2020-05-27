import React from "react";
import { Link } from "gatsby";
import navLinks from "../../content/navLinks";

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link>{siteTitle}</Link>
      <nav>
        <ul>
          {navLinks.map((link, i) => (
            <li key={`${link.name}_${i}`}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </h1>
  </header>
);

export default Header;
