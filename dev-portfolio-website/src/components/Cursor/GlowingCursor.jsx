import React, { useState, useEffect } from 'react';
import './GlowingCursor.css';

const GlowingCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="glowing-cursor"
            style={{
                '--x-position': `${mousePosition.x}px`,
                '--y-position': `${mousePosition.y}px`,
            }}
        ></div>
    );
};

export default GlowingCursor;