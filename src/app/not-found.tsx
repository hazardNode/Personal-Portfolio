'use client';

import Link from 'next/link';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

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
            overflow: 'hidden',
            padding: '2rem'
        },
        content: {
            textAlign: 'center' as const,
            position: 'relative' as const,
            zIndex: 10,
            maxWidth: '600px'
        },
        errorCode: {
            fontSize: 'clamp(6rem, 15vw, 12rem)',
            fontWeight: 900,
            lineHeight: 0.8,
            color: '#0052cc',
            marginBottom: '2rem',
            position: 'relative' as const,
            letterSpacing: '-0.05em',
            textShadow: glitchActive ? '2px 2px 0px #ff0000, -2px -2px 0px #00ff00' : 'none',
            transform: glitchActive ? 'translateX(2px)' : 'translateX(0)',
            transition: 'all 0.1s ease'
        },
        title: {
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            color: '#1a1a1a',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            position: 'relative' as const
        },
        accent: {
            position: 'absolute' as const,
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '4px',
            background: '#0052cc',
            width: '80px'
        },
        description: {
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: 1.6,
            color: '#666666',
            marginBottom: '3rem',
            maxWidth: '500px',
            margin: '0 auto 3rem auto'
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '1rem',
            alignItems: 'center'
        },
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '1rem 2rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            textDecoration: 'none',
            border: '2px solid #e0e0e0',
            background: '#ffffff',
            color: '#1a1a1a',
            minWidth: '200px',
            justifyContent: 'center'
        },
        primaryButton: {
            background: '#0052cc',
            color: '#ffffff',
            border: '2px solid #0052cc'
        },
        errorIcon: {
            width: '60px',
            height: '60px',
            background: '#0052cc',
            color: '#ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto',
            animation: 'pulse 2s ease-in-out infinite'
        },
        geometricShape: {
            position: 'absolute' as const,
            border: '2px solid rgba(0, 82, 204, 0.1)',
            background: 'rgba(0, 82, 204, 0.02)',
        },
        shape1: {
            width: '120px',
            height: '120px',
            top: '15%',
            left: '10%',
            transform: 'rotate(45deg)',
            animation: 'float 8s ease-in-out infinite'
        },
        shape2: {
            width: '80px',
            height: '80px',
            bottom: '20%',
            right: '15%',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite reverse'
        },
        shape3: {
            width: '60px',
            height: '60px',
            top: '25%',
            right: '25%',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animation: 'float 10s ease-in-out infinite'
        }
    };

    return (
        <div style={styles.container}>
            {/* Background Geometric Shapes */}
            <div style={{ ...styles.geometricShape, ...styles.shape1 }} />
            <div style={{ ...styles.geometricShape, ...styles.shape2 }} />
            <div style={{ ...styles.geometricShape, ...styles.shape3 }} />

            {/* Animated SVG Pattern */}
            <svg
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 0.4
                }}
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <rect x="100" y="80" width="40" height="8" fill="#0052cc" opacity="0.15">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 120 84"
                            to="360 120 84"
                            dur="25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <path d="M250 200 L300 180 L350 220 L400 190" stroke="#0052cc" strokeWidth="2" opacity="0.2">
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,200;100,100;0,200"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <circle cx="600" cy="400" r="20" fill="none" stroke="#0052cc" strokeWidth="2" opacity="0.15">
                        <animate
                            attributeName="r"
                            values="20;35;20"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </svg>

            <div style={styles.content}>
                {/* Error Icon */}
                <div style={styles.errorIcon}>
                    <AlertTriangle size={28} />
                </div>

                {/* 404 Code */}
                <h1 style={styles.errorCode}>
                    404
                </h1>

                {/* Title */}
                <h2 style={styles.title}>
                    PAGE NOT FOUND
                    <div style={styles.accent} />
                </h2>

                {/* Description */}
                <p style={styles.description}>
                    The page you're looking for doesn't exist or has been moved.
                    Don't worry, even the best developers get lost sometimes.
                </p>

                {/* Navigation Buttons */}
                <div style={styles.buttonContainer}>
                    <Link
                        href="/"
                        style={{ ...styles.button, ...styles.primaryButton }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1a1a1a';
                            e.currentTarget.style.borderColor = '#1a1a1a';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0052cc';
                            e.currentTarget.style.borderColor = '#0052cc';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <Home size={18} />
                        Return Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        style={styles.button}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f0f0f0';
                            e.currentTarget.style.borderColor = '#0052cc';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.borderColor = '#e0e0e0';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Additional Info */}
                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    border: '1px solid #e9ecef'
                }}>
                    <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        marginBottom: '0.8rem',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>Need Help?</h3>
                    <p style={{
                        fontSize: '0.9rem',
                        color: '#666666',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        If you believe this is an error, please contact me at{' '}
                        <Link
                            href="mailto:francisco.duarry@example.com"
                            style={{
                                color: '#0052cc',
                                textDecoration: 'none',
                                fontWeight: 600
                            }}
                        >
                            francisco.duarry@example.com
                        </Link>
                    </p>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 1; 
                    }
                    50% { 
                        transform: scale(1.05); 
                        opacity: 0.8; 
                    }
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg); 
                    }
                    33% { 
                        transform: translateY(-15px) rotate(2deg); 
                    }
                    66% { 
                        transform: translateY(8px) rotate(-1deg); 
                    }
                }

                @media (max-width: 768px) {
                    .geometric-shape {
                        opacity: 0.5;
                    }
                }

                @media (min-width: 640px) {
                    .button-container {
                        flex-direction: row;
                        gap: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}