import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map(x => (<ProjectItem key={x.id} name={x.name} about={x.about} technologies={x.technologies}></ProjectItem>))

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
