import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Grid from "../components/Grid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey Party People, How goes it?</h1>
    <Link to="/about-me">Learn About Me</Link>
    <Grid />
  </Layout>
);

export default IndexPage;
