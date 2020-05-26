const fs = require("fs");
const data = require("./content/indivProjects");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = require.resolve("./src/pages/indivProjects.js");

  data.forEach(project => {
    const path = project.title;

    createPage({
      path: `projects/${path}`,
      component: template,
      context: project,
    });
  });
};
