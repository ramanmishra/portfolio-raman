'use client';

import React from "react";
import SnakeGame from "../components/SnakeGame";
import "./PortfolioHome.css";

export default function PortfolioHome() {
    return (
        <div className="portfolio-container">
            <main className="portfolio-main">
                <div className="portfolio-text">
                    <p>Hi all. I am</p>
                    <h1>Raman Mishra</h1>
                    <h2>&gt; Back-end developer</h2>
                    <p className="comment">// find my profile on Github:</p>
                    <p>
                        <span className="code">const githubLink = </span>
                        <a href="https://github.com/ramanmishra" className="link">"https://github.com/ramanmishra"</a>
                    </p>
                </div>
                <div className="portfolio-game">
                    <SnakeGame />
                </div>
            </main>
        </div>
    );
}
