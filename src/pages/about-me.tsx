// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { checkPropTypes } from "prop-types"

const AboutMe = (props: PageProps) => (
  <Layout>
    <SEO title="Page About Me" />
    <h1>Rakesh, this is about me {props.path}</h1>
    <p>Welcome to page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
