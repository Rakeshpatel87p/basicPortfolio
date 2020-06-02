/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header/header";
import useSticky from "../hooks/useSticky";
import { ThemeProvider } from "styled-components";
import theme from "../theme/styles";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { isSticky, element } = useSticky();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header
          element={element}
          siteTitle={data.site.siteMetadata.title}
          sticky={isSticky}
        />
        <div>
          <main>{children}</main>
        </div>
      </>
    </ThemeProvider>
  );
};

export default Layout;
