'use client';

import React, { useEffect, useRef, useState } from "react";
import "./SnakeGame.css";

const CELL_SIZE = 20;
const WIDTH = 300;
const HEIGHT = 500;
const COLS = WIDTH / CELL_SIZE;
const ROWS = HEIGHT / CELL_SIZE;

const SnakeGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
    const [food, setFood] = useState({ x: 10, y: 10 });
    const [dir, setDir] = useState({ x: 1, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [started, setStarted] = useState(false);

    const resetGame = () => {
        setSnake([{ x: 5, y: 5 }]);
        setFood({ x: 10, y: 10 });
        setDir({ x: 1, y: 0 });
        setGameOver(false);
        setStarted(true);
    };

    const getRandomPosition = () => ({
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowUp": if (dir.y === 0) setDir({ x: 0, y: -1 }); break;
                case "ArrowDown": if (dir.y === 0) setDir({ x: 0, y: 1 }); break;
                case "ArrowLeft": if (dir.x === 0) setDir({ x: -1, y: 0 }); break;
                case "ArrowRight": if (dir.x === 0) setDir({ x: 1, y: 0 }); break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [dir]);

    useEffect(() => {
        if (!started || gameOver) return;

        const interval = setInterval(() => {
            setSnake((prev) => {
                const head = prev[0];
                const newHead = {
                    x: (head.x + dir.x + COLS) % COLS,
                    y: (head.y + dir.y + ROWS) % ROWS,
                };

                const collision = prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y);
                if (collision) {
                    setGameOver(true);
                    return prev;
                }

                const newSnake = [newHead, ...prev];
                if (newHead.x === food.x && newHead.y === food.y) {
                    setFood(getRandomPosition());
                } else {
                    newSnake.pop();
                }
                return newSnake;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [dir, food, started, gameOver]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "#0e1129";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        ctx.fillStyle = "#00ffcc";
        snake.forEach(({ x, y }) => {
            ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        });

        ctx.fillStyle = "#ffcc00";
        ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        if (gameOver) {
            ctx.fillStyle = "#ff3366";
            ctx.font = "20px Fira Code";
            ctx.fillText("Game Over", 90, 150);
        }
    }, [snake, food, gameOver]);

    return (
        <div className="snake-game">
            <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
            {!started ? (
                <button onClick={resetGame}>start-game</button>
            ) : gameOver ? (
                <button onClick={resetGame}>restart</button>
            ) : (
                <div className="instructions">
                    <p>// use keyboard ↑, ↓, ←, and →</p>
                    <p>// arrows to play</p>
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
