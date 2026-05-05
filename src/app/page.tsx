'use client';

import React from "react";
import Link from "next/link";
import SnakeGame from "../components/SnakeGame";
import "./PortfolioHome.css";

const impactPoints = [
  "10+ years experience",
  "Enterprise Java & Spring Boot",
  "Microservices & REST APIs",
  "Kafka & distributed systems"
];

export default function PortfolioHome() {
  return (
    <div className="portfolio-container">
      <main className="portfolio-main">
        <section className="portfolio-text">
          <p className="eyebrow">Hi all. I am</p>
          <h1>Raman Mishra</h1>
          <h2>&gt; Senior Software Engineer</h2>
          <p className="portfolio-specialization">
            Java | Spring Boot | Microservices | Scala | Kafka | Distributed Systems
          </p>
          <p className="portfolio-description">
            Building enterprise backend applications that are scalable, reliable, and production ready.
          </p>
          <div className="impact-grid">
            {impactPoints.map((point) => (
              <div key={point} className="impact-chip">
                <span className="impact-chip-prefix">#</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <Link href="/projects" className="primary-cta">view-projects</Link>
            <Link href="/contact" className="secondary-cta">contact-me</Link>
            <div id="assistant-cta-slot" className="assistant-cta-slot" />
          </div>
        </section>
        <div className="portfolio-game">
          <SnakeGame />
        </div>
      </main>
    </div>
  );
}
