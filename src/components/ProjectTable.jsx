import React from "react";

const projects = [
  { name: "Project 1", desc: "ML model for XYZ", github: "#" },
  { name: "Project 2", desc: "Data pipeline automation", github: "#" },
  { name: "Project 3", desc: "Trading simulator", github: "#" },
  { name: "Project 4", desc: "Portfolio tracker", github: "#" },
  { name: "Project 5", desc: "Chatbot project", github: "#" },
  { name: "Project 6", desc: "Visualization dashboard", github: "#" },
];

const ProjectTable = () => {
  return (
    <div className="panel">
      <h2>Projects Watchlist</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.desc}</td>
              <td><a href={p.github} target="_blank">🔗</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
