// components/Skills.tsx
import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <ul>
        {skills.map((s, idx) => (
          <li key={idx}>{s.name} - {s.level}</li>
        ))}
      </ul>
    </section>
  );
}