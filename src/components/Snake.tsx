import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function Snake() {
    const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [dir, setDir] = useState({ x: 1, y: 0 });
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Snake game logic
    useEffect(() => {
        const interval = setInterval(() => {
            setSnake((prev) => {
                const newHead = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
                const newSnake = [newHead, ...prev.slice(0, -1)];
                if (newHead.x === food.x && newHead.y === food.y) {
                    const extended = [newHead, ...prev];
                    setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
                    return extended;
                }
                return newSnake;
            });
        }, 150);
        return () => clearInterval(interval);
    }, [dir, food]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') setDir({ x: 0, y: -1 });
            if (e.key === 'ArrowDown') setDir({ x: 0, y: 1 });
            if (e.key === 'ArrowLeft') setDir({ x: -1, y: 0 });
            if (e.key === 'ArrowRight') setDir({ x: 1, y: 0 });
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    // Drawing game
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        snake.forEach(({ x, y }) => ctx.fillRect((x * 20), (y * 20), 18, 18));
        ctx.fillStyle = '#00fff0';
        ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
    }, [snake, food]);

    return (
        <div className="flex flex-col md:flex-row px-6 py-6 gap-6">
            <div className="w-full md:w-[420px] border border-green-700 rounded p-2 bg-black">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    className="border border-green-700"
                />
                <p className="text-xs mt-2 text-green-500 text-center">Use arrow keys ↑ ↓ ← → to control the snake</p>
            </div>
        </div>
    );
}



type Props = {
};


/**
 * =====================================================
 */

// import { useEffect, useRef, useState } from 'react';

// const canvasSize = 400;
// const scale = 20;
// const rows = canvasSize / scale;
// const cols = canvasSize / scale;

// type Point = { x: number; y: number };

// export default function SnakeGame() {
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
//     const [dir, setDir] = useState<Point>({ x: 0, y: 0 });
//     const [food, setFood] = useState<Point>({ x: 5, y: 5 });
//     const [gameOver, setGameOver] = useState(false);

//     const getRandomPosition = (): Point => {
//         return {
//             x: Math.floor(Math.random() * cols),
//             y: Math.floor(Math.random() * rows),
//         };
//     };

//     const resetGame = () => {
//         setSnake([{ x: 10, y: 10 }]);
//         setDir({ x: 0, y: 0 });
//         setFood(getRandomPosition());
//         setGameOver(false);
//     };

//     const moveSnake = () => {
//         const newSnake = [...snake];
//         const head = { ...newSnake[0] };

//         // Move
//         head.x = (head.x + dir.x + cols) % cols;
//         head.y = (head.y + dir.y + rows) % rows;

//         // Check self-collision
//         if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
//             setGameOver(true);
//             return;
//         }

//         newSnake.unshift(head);

//         // Eat food
//         if (head.x === food.x && head.y === food.y) {
//             setFood(getRandomPosition());
//         } else {
//             newSnake.pop();
//         }

//         setSnake(newSnake);
//     };

//     useEffect(() => {
//         const handleKey = (e: KeyboardEvent) => {
//             if (gameOver && e.key === 'Enter') {
//                 resetGame();
//                 return;
//             }

//             switch (e.key) {
//                 case 'ArrowUp':
//                     if (dir.y === 0) setDir({ x: 0, y: -1 });
//                     break;
//                 case 'ArrowDown':
//                     if (dir.y === 0) setDir({ x: 0, y: 1 });
//                     break;
//                 case 'ArrowLeft':
//                     if (dir.x === 0) setDir({ x: -1, y: 0 });
//                     break;
//                 case 'ArrowRight':
//                     if (dir.x === 0) setDir({ x: 1, y: 0 });
//                     break;
//             }
//         };

//         window.addEventListener('keydown', handleKey);
//         return () => window.removeEventListener('keydown', handleKey);
//     }, [dir, gameOver]);

//     useEffect(() => {
//         const ctx = canvasRef.current?.getContext('2d');
//         if (!ctx) return;

//         const interval = setInterval(() => {
//             if (!gameOver) {
//                 moveSnake();
//             }

//             // Clear
//             ctx.fillStyle = '#000';
//             ctx.fillRect(0, 0, canvasSize, canvasSize);

//             // Draw food
//             ctx.fillStyle = '#0f0';
//             ctx.fillRect(food.x * scale, food.y * scale, scale, scale);

//             // Draw snake
//             snake.forEach((s, i) => {
//                 ctx.fillStyle = i === 0 ? '#0ff' : '#0f0';
//                 ctx.fillRect(s.x * scale, s.y * scale, scale, scale);
//             });

//             // if (gameOver) {
//             //     ctx.fillStyle = 'red';
//             //     ctx.font = '20px monospace';
//             //     ctx.fillText('Game Over - Press Enter to Restart', 20, canvasSize / 2);
//             // }
//         }, 150);

//         return () => clearInterval(interval);
//     }, [snake, food, gameOver]);

//     return (
//         <div className="border-2 border-green-500 p-2 bg-black">
//             <canvas
//                 ref={canvasRef}
//                 width={canvasSize}
//                 height={canvasSize}
//                 className="bg-black"
//             />
//         </div>
//     );
// }
