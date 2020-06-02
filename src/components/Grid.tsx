import React from "react";
import { Link } from "gatsby";
import data from "../../content/indivProjects";

import styled from "styled-components";

const GridStyles = styled.div`
  height: 100vh;
`;

const Grid = (): JSX.Element => {
  return (
    <GridStyles>
      <ul>
        {data.map((item, i) => (
          <li key={`item${i}`}>
            <Link to={`/projects/${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </GridStyles>
  );
};

export default Grid;
