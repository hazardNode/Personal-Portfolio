'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev + 1) % 4);
        }, 400);

        return () => clearInterval(interval);
    }, []);

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `
                linear-gradient(to right, rgba(0, 82, 204, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 82, 204, 0.03) 1px, transparent 1px),
                #f9f9f9
            `,
            backgroundSize: '24px 24px',
            color: '#1a1a1a',
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            position: 'relative' as const,
            overflow: 'hidden'
        },
        content: {
            textAlign: 'center' as const,
            position: 'relative' as const,
            zIndex: 10
        },
        title: {
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            color: '#1a1a1a',
            position: 'relative' as const
        },
        accent: {
            position: 'absolute' as const,
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '4px',
            background: '#0052cc',
            width: '60px',
            animation: 'pulse 2s ease-in-out infinite'
        },
        loadingText: {
            fontSize: '1rem',
            color: '#666666',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.2em',
            marginBottom: '2rem'
        },
        spinner: {
            width: '40px',
            height: '40px',
            border: '3px solid #e0e0e0',
            borderTop: '3px solid #0052cc',
            borderRadius: '50%',
            margin: '0 auto 2rem auto',
            animation: 'spin 1s linear infinite'
        },
        progressBar: {
            width: '200px',
            height: '2px',
            background: '#e0e0e0',
            margin: '0 auto',
            position: 'relative' as const,
            overflow: 'hidden'
        },
        progressFill: {
            position: 'absolute' as const,
            top: 0,
            left: 0,
            height: '100%',
            background: '#0052cc',
            width: '100%',
            animation: 'slide 1.5s ease-in-out infinite'
        },
        geometricShape: {
            position: 'absolute' as const,
            width: '100px',
            height: '100px',
            border: '2px solid rgba(0, 82, 204, 0.1)',
            background: 'rgba(0, 82, 204, 0.02)',
        },
        shape1: {
            top: '20%',
            left: '15%',
            animation: 'float 6s ease-in-out infinite'
        },
        shape2: {
            top: '60%',
            right: '20%',
            animation: 'float 8s ease-in-out infinite reverse'
        }
    };

    return (
        <div style={styles.container}>
            {/* Background Geometric Shapes */}
            <div style={{ ...styles.geometricShape, ...styles.shape1 }} />
            <div style={{ ...styles.geometricShape, ...styles.shape2 }} />

            {/* Animated SVG Pattern */}
            <svg
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 0.6
                }}
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <rect x="80" y="60" width="60" height="10" fill="#0052cc" opacity="0.1">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 110 65"
                            to="360 110 65"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <line x1="200" y1="150" x2="250" y2="180" stroke="#0052cc" strokeWidth="2" opacity="0.2">
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,100;50,50;0,100"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </line>
                </g>
            </svg>

            <div style={styles.content}>
                <h1 style={styles.title}>
                    LOADING
                    <div style={styles.accent} />
                </h1>

                <p style={styles.loadingText}>
                    Initializing{'.'.repeat(dots)}
                </p>

                {/* Geometric Spinner */}
                <div style={styles.spinner} />

                {/* Progress Bar */}
                <div style={styles.progressBar}>
                    <div style={styles.progressFill} />
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes pulse {
                    0%, 100% { 
                        opacity: 1; 
                        transform: translateX(-50%) scaleX(1); 
                    }
                    50% { 
                        opacity: 0.6; 
                        transform: translateX(-50%) scaleX(1.2); 
                    }
                }

                @keyframes slide {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg); 
                    }
                    33% { 
                        transform: translateY(-10px) rotate(2deg); 
                    }
                    66% { 
                        transform: translateY(5px) rotate(-1deg); 
                    }
                }

                @media (max-width: 768px) {
                    .geometric-shape {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}