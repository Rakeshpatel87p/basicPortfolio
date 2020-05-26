// Gatsby supports TypeScript natively!
import React from "react";
import { Link, graphql } from "gatsby";

const IndivualProj = props => {
  const { title, description } = props.pageContext;

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default IndivualProj;
