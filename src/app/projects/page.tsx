// app/projects/Projects.tsx

'use client';

import React, { useState } from 'react';
import './Projects.css';
import Image from 'next/image';
import projects from './Projects';
import ProjectButton from '@/components/ui/ProjectButton';

const skills = [
  'All',
  'Java Spring Boot',
  'Kafka',
  'Scala',
  'Problem Solving',
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const getImageSrc = (src: string) => `${basePath}${src}`;

  const filteredProjects = projects.filter(
    (project) => selectedTech === 'All' || project.tech === selectedTech
  );

  return (
    <div className="projects-container">
      <aside className="skills-sidebar">
        <h3 className="sidebar-title">› project-focus</h3>
        <div className="skills-list">
          {skills.map((skill) => (
            <label key={skill} className="skill-checkbox">
              <input
                type="checkbox"
                checked={selectedTech === skill}
                onChange={() => setSelectedTech(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </aside>

      <main className="projects-main">
        <div className="tab-title">{selectedTech}</div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-copy">
                <h4 className="project-title">
                  {project.title} <span>// {project.subtitle}</span>
                </h4>
                <p className="project-focus">{project.focus}</p>
                <p className="project-desc">{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="project-stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Image
                src={getImageSrc(project.image)}
                alt={project.title}
                width={400}
                height={250}
                className="project-image"
              />

              <ProjectButton
                className="view-btn"
                projectSlug={project.slug}
                githubUrl={project.githubUrl}
                routePath={!project.slug && !project.githubUrl ? '/projects/details-coming-soon' : undefined}
                label={project.slug ? 'view-details' : project.githubUrl ? 'view-code' : 'view-details'}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
