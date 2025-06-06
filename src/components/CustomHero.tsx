'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import {
    ArrowRight, Github, Linkedin, Mail, ExternalLink,
    Menu, X,  Award,
    MapPin, Clock, Send, 
    Twitter, FileText
} from 'lucide-react';

export default function CompleteMinimalistBrutalistPortfolio() {
    const [activeSection, setActiveSection] = useState('hero');
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isDesktop, setIsDesktop] = useState(false);

    // Real data from your files
    const projects = [
        {
            id: 'ecommerce-platform',
            title: 'E-commerce Platform',
            description: 'Modern e-commerce platform with advanced filtering and payment integration',
            longDescription: 'A full-featured e-commerce platform built with Django, Alpine.js, htmx and Tailwind.css, featuring real-time inventory management, secure payment processing with Stripe, and acustom and intuitive admin dashboard.',
            technologies: ['Alpine.js', 'Django', 'Stripe', 'Python', 'PostgreSQL', 'Tailwind CSS'],
            category: 'Full-Stack',
            featured: true,
            liveUrl: 'https://ddfarma.com',
            githubUrl: 'https://github.com/hazardNode/Proyecto-Integrado',
            year: '2025'
        },
        /*{
            id: 'cybersec-dashboard',
            title: 'Cybersecurity Dashboard',
            description: 'Real-time security monitoring dashboard with threat visualization',
            longDescription: 'A comprehensive cybersecurity dashboard that provides real-time monitoring of network threats, vulnerability assessments, and security metrics.',
            technologies: ['React', 'D3.js', 'WebSocket', 'Python', 'FastAPI', 'Redis'],
            category: 'Security',
            featured: true,
            githubUrl: 'https://github.com/username/security-dashboard',
            year: '2024'
        },
        {
            id: 'ai-content-generator',
            title: 'AI Content Generator',
            description: 'Machine learning powered content generation tool with custom training',
            longDescription: 'An AI-powered content generation platform that uses custom-trained models to create blog posts, social media content, and marketing copy.',
            technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'React', 'Docker'],
            category: 'AI/ML',
            featured: true,
            liveUrl: 'https://ai-content-gen.com',
            githubUrl: 'https://github.com/username/ai-content-generator',
            year: '2023'
        },
        {
            id: 'design-system',
            title: 'Component Design System',
            description: 'Comprehensive design system with reusable components and documentation',
            longDescription: 'A complete design system built for scalable web applications, featuring a comprehensive component library, design tokens, and accessibility guidelines.',
            technologies: ['React', 'TypeScript', 'Storybook', 'Figma', 'CSS-in-JS'],
            category: 'Design',
            featured: false,
            liveUrl: 'https://design-system-demo.com',
            githubUrl: 'https://github.com/username/design-system',
            year: '2023'
        }*/
    ];

    const experience = [
        {
            id: 'fullstack-developer',
            company: 'Softcom S.L.',
            position: 'Full-Stack Developer',
            duration: '2023 - 2025',
            description: 'Internship focused on building and maintaining web applications using modern JavaScript frameworks and backend technologies.',
            responsibilities: [
                'Worked with legacy codebase to refactor and improve performance',
                'Led complete overhaul of a website design to improve security and user experience',
                'Developed new features for existing applications using PHP, .NET and Spring Boot',
            ],
            technologies: ['PHP', 'Spring', '.NET', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Git', 'AWS'],
            achievements: [
                'Reduced a project\'s vulnerability score by 40% through security audits',
                'Improved application load time by 30% through code splitting and lazy loading',
                'Created a postfix email server with custom security protocols',
                'Improve user experience and functionality of existing applications with Vue.js and Tailwind CSS'
            ]
        },
        /*{
            id: 'frontend-developer',
            company: 'Digital Innovations Inc',
            position: 'Frontend Developer',
            duration: '2021 - 2022',
            description: 'Developed responsive web applications and collaborated on full-stack projects using modern JavaScript frameworks.',
            responsibilities: [
                'Built responsive web applications using React and Vue.js',
                'Collaborated with backend developers on API integration',
                'Implemented pixel-perfect designs from Figma mockups',
                'Optimized applications for performance and accessibility',
                'Participated in agile development processes'
            ],
            technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'REST APIs', 'Jest'],
            achievements: [
                'Delivered 15+ projects on time and within budget',
                'Improved application performance by 25%',
                'Implemented automated testing suite with 90% coverage',
                'Contributed to open-source projects with 500+ stars'
            ]
        },
        {
            id: 'cybersec-analyst',
            company: 'SecureNet Solutions',
            position: 'Cybersecurity Analyst',
            duration: '2020 - 2021',
            description: 'Conducted security assessments and developed security protocols for enterprise clients.',
            responsibilities: [
                'Performed penetration testing on web applications and networks',
                'Developed security assessment reports and remediation plans',
                'Implemented security monitoring tools and dashboards',
                'Conducted security awareness training for client teams',
                'Collaborated on incident response procedures'
            ],
            technologies: ['Python', 'Kali Linux', 'Metasploit', 'Wireshark', 'OWASP ZAP', 'Burp Suite'],
            achievements: [
                'Identified critical vulnerabilities in 20+ client applications',
                'Reduced security incidents by 45% through proactive monitoring',
                'Developed automated security scanning tools',
                'Achieved CISSP certification'
            ]
        }*/
    ];

    const certifications = [
        /*{
            id: 'aws-solutions-architect',
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2024-01-15',
            description: 'Validates expertise in designing distributed systems on AWS platform',
            skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability']
        },
        {
            id: 'react-advanced',
            name: 'React Advanced Certification',
            issuer: 'Meta',
            date: '2023-08-20',
            description: 'Advanced React concepts including performance optimization and testing',
            skills: ['React', 'Performance', 'Testing', 'State Management']
        },
        {
            id: 'cissp',
            name: 'Certified Information Systems Security Professional',
            issuer: '(ISC)²',
            date: '2022-11-10',
            description: 'Advanced certification in information security and risk management',
            skills: ['Security Architecture', 'Risk Management', 'Incident Response', 'Compliance']
        },
        {
            id: 'tensorflow-developer',
            name: 'TensorFlow Developer Certificate',
            issuer: 'Google',
            date: '2023-03-05',
            description: 'Demonstrates proficiency in building ML models with TensorFlow',
            skills: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP']
        },*/
        {
            id: 'ux-design',
            name: 'Google IT Professional',
            issuer: 'Google',
            date: '2024-11-10',
            description: 'Comprehensive UX design methodology and user research techniques',
            skills: ['IT Support', 'Cybersecurity', 'Networks', 'Systems Administration']
        }
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/hazardNode', icon: Github },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
        { name: 'Email', url: 'mailto:francisco.duarry@example.com', icon: Mail },
        { name: 'Resume', url: '/resume.pdf', icon: FileText }
    ];

    useEffect(() => {

        const handleScroll = () => {
            const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        // Set initial values
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

// Replace this part in your CustomHero.tsx component:

const containerRef = useGSAP((gsap) => {
    // Hero animations
    gsap.set('.hero-title', { y: 100, opacity: 0 });
    gsap.set('.hero-accent', { scaleX: 0, transformOrigin: 'left' });
    gsap.set('.hero-subtitle', { y: 50, opacity: 0 });
    gsap.set('.hero-description', { y: 30, opacity: 0 });
    gsap.set('.hero-button', { y: 40, opacity: 0, scale: 0.8 });
    gsap.set('.hero-stats', { y: 60, opacity: 0 });

    const heroTl = gsap.timeline();
    heroTl.to('.hero-title', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
        .to('.hero-accent', { scaleX: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6')
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
        .to('.hero-description', { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .to('.hero-button', { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.2')
        .to('.hero-stats', { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.4');

    // Section animations
    gsap.utils.toArray('.section-title').forEach((title: Element) => {
        gsap.fromTo(title,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%'
                }
            }
        );
    });

    gsap.utils.toArray('.content-card').forEach((card: Element, i: number) => {
        gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                delay: i * 0.1
            }
        );
    });

    // Floating animations
    gsap.to('.float-slow', {
        y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });

    gsap.to('.float-medium', {
        x: 10, y: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
});
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const styles = {
        container: {
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
        navigation: {
            position: 'fixed' as const,
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(249, 249, 249, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 100,
            borderBottom: '1px solid rgba(0, 82, 204, 0.1)'
        },
        navContent: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            fontSize: '1.2rem',
            fontWeight: 900,
            color: '#1a1a1a'
        },
        navMenu: {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
        },
        navLink: {
            fontSize: '0.9rem',
            color: '#666666',
            textDecoration: 'none',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease',
            cursor: 'pointer'
        },
        section: {
            position: 'relative' as const,
            zIndex: 10,
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center'
        },
        sectionTitle: {
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            marginBottom: '4rem',
            color: '#1a1a1a',
            position: 'relative' as const
        },
        sectionAccent: {
            position: 'absolute' as const,
            bottom: '-10px',
            left: 0,
            height: '6px',
            background: '#0052cc',
            width: '120px'
        },
        grid: {
            display: 'grid',
            gap: '2rem',
            marginBottom: '4rem'
        },
        card: {
            background: '#ffffff',
            border: '2px solid #e0e0e0',
            padding: '3rem',
            transition: 'all 0.3s ease',
            position: 'relative' as const
        },
        button: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#0052cc',
            color: '#ffffff',
            border: 'none',
            padding: '1.2rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            textDecoration: 'none'
        },
        input: {
            width: '100%',
            padding: '1rem',
            border: '2px solid #e0e0e0',
            background: '#ffffff',
            fontSize: '0.9rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
            outline: 'none'
        },
        textarea: {
            width: '100%',
            padding: '1rem',
            border: '2px solid #e0e0e0',
            background: '#ffffff',
            fontSize: '0.9rem',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
            outline: 'none',
            resize: 'vertical' as const,
            minHeight: '120px'
        }
    };

    const AnimatedSVG = () => (
        <svg
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 } as const}
            viewBox="0 0 1400 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="parallax">
                <rect x="80" y="60" width="120" height="20" fill="#0052cc" opacity="0.08" className="float-slow">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 140 70" to="360 140 70" dur="25s" repeatCount="indefinite" />
                </rect>
                <rect x="90" y="90" width="20" height="60" fill="#0052cc" opacity="0.06">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 100 120" to="-360 100 120" dur="30s" repeatCount="indefinite" />
                </rect>
            </g>

            <g className="parallax">
                <path d="M200 180 L280 200 L320 160 L380 180 L420 140" stroke="#0052cc" strokeWidth="2" fill="none" opacity="0.15" className="float-medium">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="12s" repeatCount="indefinite" />
                </path>
                <circle cx="200" cy="180" r="4" fill="#0052cc" opacity="0.4">
                    <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="420" cy="140" r="4" fill="#0052cc" opacity="0.4">
                    <animate attributeName="r" values="4;7;4" dur="5s" repeatCount="indefinite" />
                </circle>
            </g>

            <g className="parallax">
                <polygon points="1200,120 1250,100 1300,120 1280,160 1220,160" fill="none" stroke="#0052cc" strokeWidth="2" opacity="0.12">
                    <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1;1.3;1" dur="10s" repeatCount="indefinite" />
                </polygon>
            </g>
        </svg>
    );

    return (
        <div ref={containerRef as React.RefObject<HTMLDivElement>} style={styles.container}>
            <AnimatedSVG />

            {/* Navigation */}
            <nav style={styles.navigation}>
                <div style={styles.navContent}>
                    <div style={styles.logo}>FCO. JOSÉ DUARRY</div>

                    {/* Desktop Menu */}
                    <div style={{ ...styles.navMenu, display: isDesktop ? 'flex' : 'none' }}>
                        {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                            <span
                                key={item}
                                style={{
                                    ...styles.navLink,
                                    color: activeSection === item.toLowerCase() ? '#0052cc' : '#666666'
                                }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        style={{
                            display: !isDesktop ? 'block' : 'none',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#1a1a1a'
                        }}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: '#f9f9f9',
                        borderBottom: '1px solid rgba(0, 82, 204, 0.1)',
                        padding: '2rem'
                    }}>
                        {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                            <div
                                key={item}
                                style={{
                                    padding: '1rem 0',
                                    borderBottom: '1px solid #e0e0e0',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    fontSize: '0.9rem',
                                    color: '#666666'
                                }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="hero" style={{ ...styles.section, paddingTop: '6rem' }}>
                <div>
                    <h1 className="hero-title section-title" style={{ ...styles.sectionTitle, color: '#1a1a1a' }}>
                        FCO. JOSÉ DUARRY GARCÍA
                        <div className="hero-accent" style={styles.sectionAccent} />
                    </h1>

                    <p className="hero-subtitle" style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        fontWeight: 400,
                        letterSpacing: '0.1em',
                        color: '#666666',
                        marginBottom: '2rem',
                        textTransform: 'uppercase'
                    }}>
                        Full-Stack Developer
                    </p>

                    <p className="hero-description" style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                        lineHeight: 1.6,
                        color: '#666666',
                        maxWidth: '600px',
                        marginBottom: '3rem'
                    }}>
                        Crafting exceptional digital experiences through secure development,
                        clean code, and strategic thinking. Specialized in Django, Vue.js,
                        and AWS.
                    </p>

                    <button
                        className="hero-button"
                        style={styles.button}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1a1a1a';
                            e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0052cc';
                            e.currentTarget.style.transform = 'translateX(0)';
                        }}
                        onClick={() => scrollToSection('projects')}
                    >
                        View Selected Work
                        <ArrowRight size={20} />
                    </button>

                    {/* Stats */}
                    <div className="hero-stats" style={{
                        ...styles.grid,
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        marginTop: '4rem'
                    }}>
                        {[
                            { number: '02+', label: 'Years Experience' },
                            { number: '10+', label: 'Projects Delivered' },
                            { number: '15+', label: 'Happy Clients' },
                            { number: '95%', label: 'Client Satisfaction' }
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="content-card"
                                style={{
                                    ...styles.card,
                                    padding: '2rem',
                                    textAlign: 'center'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0052cc';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 82, 204, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    color: '#0052cc',
                                    marginBottom: '0.5rem'
                                }}>{stat.number}</div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: '#666666',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                        marginTop: '4rem'
                    }}>
                        <span style={{
                            fontSize: '0.9rem',
                            color: '#666666',
                            marginRight: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}>
                            Connect —
                        </span>

                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    background: '#1a1a1a',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0052cc';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                }}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={styles.section}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    ABOUT
                    <div style={styles.sectionAccent} />
                </h2>

                <div style={{
                    ...styles.grid,
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <div className="content-card" style={styles.card}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 900,
                            marginBottom: '2rem',
                            color: '#1a1a1a'
                        }}>Who I Am</h3>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            color: '#666666',
                            marginBottom: '1.5rem'
                        }}>
                            With over 2 years of experience in fullstack development, I create digital solutions that bridge innovative design with
                            robust functionality. My interdisciplinary background allows me to approach
                            problems from multiple angles.
                        </p>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            color: '#666666'
                        }}>
                            I believe in clean code, minimal design, and user-centered experiences.
                            Every project is an opportunity to solve real problems through technology
                            while maintaining the highest security standards.
                        </p>
                    </div>

                    <div className="content-card" style={styles.card}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 900,
                            marginBottom: '2rem',
                            color: '#1a1a1a'
                        }}>What I Do</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                'Frontend Development',
                                'UI/UX Design',
                                'Cybersecurity Solutions',
                                'AI/ML Integration',
                                'Performance Optimization',
                                'Technical Leadership'
                            ].map((service, index) => (
                                <div key={service} style={{
                                    padding: '1rem 0',
                                    borderBottom: index < 5 ? '1px solid #f0f0f0' : 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontSize: '0.9rem', color: '#666666' }}>{service}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#0052cc', fontWeight: 600 }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" style={styles.section}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    EXPERIENCE
                    <div style={styles.sectionAccent} />
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experience.map((exp) => (
                        <div key={exp.id} className="content-card" style={{
                            ...styles.card,
                            marginBottom: '2rem',
                            borderLeft: '4px solid #0052cc'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '1.5rem',
                                flexWrap: 'wrap'
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 900,
                                        marginBottom: '0.5rem',
                                        color: '#1a1a1a'
                                    }}>{exp.position}</h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#0052cc',
                                        fontWeight: 600
                                    }}>{exp.company}</p>
                                </div>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: '#666666',
                                    padding: '0.5rem 1rem',
                                    background: '#f0f0f0',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{exp.duration}</span>
                            </div>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                color: '#666666',
                                marginBottom: '2rem'
                            }}>{exp.description}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: '#1a1a1a',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Key Responsibilities</h4>
                                <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                                    {exp.responsibilities.slice(0, 3).map((responsibility, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '0.9rem',
                                            color: '#666666',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: '#1a1a1a',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Technologies</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} style={{
                                            padding: '0.3rem 0.8rem',
                                            background: '#f0f0f0',
                                            fontSize: '0.8rem',
                                            color: '#666666'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: '#1a1a1a',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Key Achievements</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {exp.achievements.map((achievement) => (
                                        <span key={achievement} style={{
                                            padding: '0.3rem 0.8rem',
                                            background: '#e6f3ff',
                                            fontSize: '0.8rem',
                                            color: '#0052cc',
                                            border: '1px solid #b3d9ff'
                                        }}>
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={styles.section}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    PROJECTS
                    <div style={styles.sectionAccent} />
                </h2>

                <div style={{
                    ...styles.grid,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
                }}>
                    {projects.filter(p => p.featured).map((project) => (
                        <div
                            key={project.id}
                            className="content-card"
                            style={{
                                ...styles.card,
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#0052cc';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e0e0e0';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '1.5rem'
                            }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: '#666666',
                                    padding: '0.3rem 0.8rem',
                                    background: '#f0f0f0',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{project.category}</span>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: '#0052cc',
                                    fontWeight: 600
                                }}>{project.year}</span>
                            </div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                marginBottom: '1rem',
                                color: '#1a1a1a'
                            }}>{project.title}</h3>

                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                color: '#666666',
                                marginBottom: '2rem'
                            }}>{project.description}</p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginBottom: '2rem'
                            }}>
                                {project.technologies.slice(0, 4).map((tech) => (
                                    <span key={tech} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: '#f0f0f0',
                                        fontSize: '0.8rem',
                                        color: '#666666'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 4 && (
                                    <span style={{
                                        padding: '0.3rem 0.8rem',
                                        background: '#f0f0f0',
                                        fontSize: '0.8rem',
                                        color: '#666666'
                                    }}>
                                        +{project.technologies.length - 4} more
                                    </span>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            ...styles.button,
                                            padding: '0.8rem 1.5rem',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        View Live
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            ...styles.button,
                                            background: 'transparent',
                                            color: '#1a1a1a',
                                            border: '2px solid #e0e0e0',
                                            padding: '0.8rem 1.5rem',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        <Github size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" style={styles.section}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    SKILLS
                    <div style={styles.sectionAccent} />
                </h2>

                {/* Core Competencies */}
                <div className="content-card" style={{
                    ...styles.card,
                    marginBottom: '3rem'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        marginBottom: '2rem',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>Core Competencies</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '3rem'
                    }}>
                        {[
                            {
                                title: 'Frontend Development',
                                skills: ['React & Next.js', 'TypeScript', 'Modern CSS & Tailwind', 'GSAP Animation', 'Three.js & WebGL', 'Responsive Design']
                            },
                            {
                                title: 'Backend & Infrastructure',
                                skills: ['Node.js & Python', 'API Development', 'Database Design', 'Cloud Architecture', 'DevOps & CI/CD', 'Performance Optimization']
                            },
                            {
                                title: 'Design & User Experience',
                                skills: ['UI/UX Design', 'Figma & Design Systems', 'User Research', 'Prototyping', 'Accessibility', 'Brand Development']
                            },
                            {
                                title: 'Cybersecurity',
                                skills: ['Penetration Testing', 'Security Auditing', 'OWASP Standards', 'Risk Assessment', 'Incident Response', 'Compliance']
                            }
                        ].map((category) => (
                            <div key={category.title}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#0052cc',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.03em'
                                }}>{category.title}</h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {category.skills.map((skill, index) => (
                                        <li key={skill} style={{
                                            fontSize: '0.95rem',
                                            color: '#666666',
                                            padding: '0.75rem 0',
                                            borderBottom: index < category.skills.length - 1 ? '1px solid #f0f0f0' : 'none',
                                            position: 'relative',
                                            paddingLeft: '1.5rem'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '1.2rem',
                                                width: '4px',
                                                height: '4px',
                                                background: '#0052cc',
                                                borderRadius: '50%'
                                            }} />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Proficiencies */}
                <div className="content-card" style={styles.card}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        marginBottom: '2rem',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>Technical Proficiencies</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                category: 'Languages & Frameworks',
                                items: ['JavaScript/TypeScript', 'React/Next.js', 'Python', 'Node.js', 'Vue.js', 'FastAPI']
                            },
                            {
                                category: 'Tools & Platforms',
                                items: ['Git/GitHub', 'Docker', 'AWS', 'Figma', 'Webpack', 'Vite']
                            },
                            {
                                category: 'Databases & Storage',
                                items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'GraphQL', 'REST APIs']
                            },
                            {
                                category: 'Security & AI',
                                items: ['OWASP', 'Kali Linux', 'TensorFlow', 'OpenAI API', 'Burp Suite', 'Metasploit']
                            }
                        ].map((tech) => (
                            <div key={tech.category}>
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: '#1a1a1a',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{tech.category}</h4>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem'
                                }}>
                                    {tech.items.map((item) => (
                                        <span key={item} style={{
                                            fontSize: '0.85rem',
                                            color: '#666666',
                                            padding: '0.4rem 0.8rem',
                                            background: '#f8f9fa',
                                            border: '1px solid #e9ecef',
                                            textAlign: 'center'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Focus Areas */}
                <div className="content-card" style={{
                    ...styles.card,
                    marginTop: '3rem'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        marginBottom: '2rem',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>Professional Focus Areas</h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                area: 'Full-Stack Development',
                                description: 'End-to-end application development with modern frameworks and best practices'
                            },
                            {
                                area: 'Security Engineering',
                                description: 'Application security, penetration testing, and vulnerability assessment'
                            },
                            {
                                area: 'Performance Optimization',
                                description: 'Frontend optimization, bundle analysis, and Core Web Vitals improvement'
                            },
                            {
                                area: 'Technical Leadership',
                                description: 'Team mentoring, code review, and architectural decision making'
                            }
                        ].map((focus) => (
                            <div key={focus.area} style={{
                                padding: '1.5rem',
                                background: '#f8f9fa',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    marginBottom: '0.8rem',
                                    color: '#1a1a1a'
                                }}>{focus.area}</h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666666',
                                    lineHeight: 1.5,
                                    margin: 0
                                }}>{focus.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" style={styles.section}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    CERTIFICATIONS
                    <div style={styles.sectionAccent} />
                </h2>

                <div style={{
                    ...styles.grid,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
                }}>
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="content-card"
                            style={styles.card}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#0052cc';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e0e0e0';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '1.5rem'
                            }}>
                                <Award size={32} style={{ color: '#0052cc' }} />
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: '#666666',
                                    padding: '0.3rem 0.8rem',
                                    background: '#f0f0f0'
                                }}>
                                    {new Date(cert.date).getFullYear()}
                                </span>
                            </div>

                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 900,
                                marginBottom: '0.5rem',
                                color: '#1a1a1a'
                            }}>{cert.name}</h3>

                            <p style={{
                                fontSize: '1rem',
                                color: '#0052cc',
                                fontWeight: 600,
                                marginBottom: '1rem'
                            }}>{cert.issuer}</p>

                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                color: '#666666',
                                marginBottom: '1.5rem'
                            }}>{cert.description}</p>

                            <div>
                                <h4 style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    marginBottom: '0.8rem',
                                    color: '#1a1a1a',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Skills Validated</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {cert.skills.map((skill) => (
                                        <span key={skill} style={{
                                            padding: '0.3rem 0.8rem',
                                            background: '#e6f3ff',
                                            fontSize: '0.7rem',
                                            color: '#0052cc',
                                            border: '1px solid #b3d9ff'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ ...styles.section, minHeight: 'auto', paddingBottom: '4rem' }}>
                <h2 className="section-title" style={styles.sectionTitle}>
                    CONTACT
                    <div style={styles.sectionAccent} />
                </h2>

                <div style={{
                    ...styles.grid,
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <div className="content-card" style={styles.card}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 900,
                            marginBottom: '2rem',
                            color: '#1a1a1a'
                        }}>Let&apos;s Work Together</h3>

                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            color: '#666666',
                            marginBottom: '3rem'
                        }}>
                            Have a project in mind? I&apos;m always open to discussing new opportunities
                            and interesting challenges. Let&apos;s create something amazing together.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { icon: Mail, label: 'Email', value: 'pacoduarry@gmail.com' },
                                //{ icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                                { icon: MapPin, label: 'Location', value: 'Seville, Spain' },
                                { icon: Clock, label: 'Response Time', value: 'Within 24 hours' }
                            ].map((contact, index) => (
                                <div key={contact.label} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: index < 3 ? '1.5rem' : '0'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: '#f0f0f0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <contact.icon size={20} style={{ color: '#0052cc' }} />
                                    </div>
                                    <div>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            color: '#1a1a1a',
                                            marginBottom: '0.2rem'
                                        }}>{contact.label}</p>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#666666'
                                        }}>{contact.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="content-card" style={styles.card}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 900,
                            marginBottom: '2rem',
                            color: '#1a1a1a'
                        }}>Send Message</h3>

                        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={styles.input}
                                    onFocus={(e) => e.target.style.borderColor = '#0052cc'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={styles.input}
                                    onFocus={(e) => e.target.style.borderColor = '#0052cc'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={styles.textarea}
                                    onFocus={(e) => e.target.style.borderColor = '#0052cc'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                style={styles.button}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#1a1a1a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#0052cc';
                                }}
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                position: 'relative',
                zIndex: 10,
                borderTop: '1px solid rgba(0, 82, 204, 0.1)',
                padding: '3rem 2rem',
                textAlign: 'center',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#666666',
                    marginBottom: '1rem'
                }}>
                    © 2024 Fco. José Duarry García. All rights reserved.
                </p>
                <p style={{
                    fontSize: '0.8rem',
                    color: '#999999'
                }}>
                    Built with precision, designed with purpose.
                </p>
            </footer>
        </div>
    );
}