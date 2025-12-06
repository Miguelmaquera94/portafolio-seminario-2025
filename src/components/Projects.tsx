// components/Projects.tsx
import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      {projects.map(p => (
        <div key={p.id} className="project-card">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <a href={p.link}>Ver proyecto</a>
        </div>
      ))}
    </section>
  );
}