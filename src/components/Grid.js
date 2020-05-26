import React from "react";
import { Link } from "gatsby";
import data from "../../content/indivProjects";

const Grid = () => {
  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <ul>
        {data.map((item, i) => (
          <li key={`item${i}`}>
            <Link to={`/projects/${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
