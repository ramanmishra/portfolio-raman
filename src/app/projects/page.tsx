// app/projects/Projects.tsx

'use client';

import React, { useState } from 'react';
import './Projects.css';
import Image from 'next/image';
import projects from './Projects';
import ProjectButton from '@/components/ui/ProjectButton';


const skills = [
    'Scala 2/3', 'Java Spring Boot', 'Kafka', 'Problem Solving', 'All'
];

const Projects = () => {
    const [selectedTech, setSelectedTech] = useState('All');

    const filteredProjects = projects.filter(
        (project) => selectedTech.toLowerCase().includes(project.tech.toLowerCase()) || selectedTech === 'All'
    );

    return (
        <div className="projects-container">
            <aside className="skills-sidebar">
                <h3 className="sidebar-title">› projects</h3>
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
                            <h4 className="project-title">{project.title} <span>// {project.subtitle}</span></h4>
                            <Image src={project.image} alt={project.title} width={400} height={250} className="project-image" />
                            <p className="project-desc">{project.description}</p>
                            <ProjectButton
                                className="view-btn"
                                routePath="/projects/details-coming-soon"
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Projects;
