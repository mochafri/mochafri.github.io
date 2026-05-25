import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import voluntrack from '../image/voluntrack.png';
import voluntrackVideo from '../video/voluntrack.mp4';
import comingSoonVideo from '../video/comingSoon.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {

    const sectionsRef = useRef([]); // Declare sectionsRef here
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredVideo, setHoveredVideo] = useState(null);

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            if (section) {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 50 }, // Start state
                    {
                        opacity: 1,
                        y: 0, // End state
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%", // Trigger animation when the top of the element reaches 80% of the viewport
                            end: "bottom 20%",
                            toggleActions: "play none none reverse", // Play when entering, reverse when leaving
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section id="project" className="mt-32 sm:mt-40 lg:mt-56 px-5 sm:px-10 scroll-mt-28 flex justify-center relative">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="judul" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="font-sharpSemiBold25 text-center text-[2.7rem] opacity-10">My Project</h1>
                            <h1 className="section-text -mt-6">My Project</h1>
                        </div>
                        <div className="flex items-center justify-center mt-20 gap-8 flex-wrap" >
                            <div 
                                className="project-card group relative overflow-hidden flex flex-col justify-between cursor-pointer" 
                                ref={(el) => sectionsRef.current.push(el)}
                                onMouseEnter={() => setHoveredVideo(voluntrackVideo)}
                                onMouseLeave={() => setHoveredVideo(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <div className="absolute inset-0 overflow-hidden">
                                    <img src={voluntrack} alt="voluntrack" className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-90"></div>
                                </div>
                                <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8">
                                    <h3 className="font-sharpSemiBold25 text-2xl text-white group-hover:text-secondary transition-colors duration-300">VolunTrack</h3>
                                    <p className="font-avenir55Roman text-xs text-white/70 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        A modern web platform designed to track volunteer projects, manage participant registrations, and analyze overall community impact. Built with highly interactive dashboard layouts.
                                    </p>
                                    <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-[10px] bg-secondary/20 border border-secondary/30 text-secondary px-2.5 py-0.5 rounded-full font-avenirMedium">React</span>
                                        <span className="text-[10px] bg-white/10 border border-white/20 text-white/80 px-2.5 py-0.5 rounded-full font-avenirMedium">Tailwind CSS</span>
                                        <span className="text-[10px] bg-white/10 border border-white/20 text-white/80 px-2.5 py-0.5 rounded-full font-avenirMedium">GSAP</span>
                                    </div>
                                </div>
                            </div>
                            <div 
                                className="project-card group relative overflow-hidden flex flex-col items-center justify-center p-6 border border-dashed border-white/10 hover:border-secondary/30 hover:bg-white/[0.01] transition-all duration-500 cursor-pointer" 
                                ref={(el) => sectionsRef.current.push(el)}
                                onMouseEnter={() => setHoveredVideo(comingSoonVideo)}
                                onMouseLeave={() => setHoveredVideo(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300 transform group-hover:rotate-90">
                                    <span className="text-xl font-light text-white/30 group-hover:text-secondary transition-colors duration-300">+</span>
                                </div>
                                <h3 className="font-avenir85Heavy text-base text-white/40 mt-4 group-hover:text-white/80 transition-colors duration-300">New Project</h3>
                                <p className="font-avenir55Roman text-xs text-white/25 mt-1">Coming Soon</p>
                            </div>
                            <div 
                                className="project-card group relative overflow-hidden flex flex-col items-center justify-center p-6 border border-dashed border-white/10 hover:border-secondary/30 hover:bg-white/[0.01] transition-all duration-500 cursor-pointer" 
                                ref={(el) => sectionsRef.current.push(el)}
                                onMouseEnter={() => setHoveredVideo(comingSoonVideo)}
                                onMouseLeave={() => setHoveredVideo(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300 transform group-hover:rotate-90">
                                    <span className="text-xl font-light text-white/30 group-hover:text-secondary transition-colors duration-300">+</span>
                                </div>
                                <h3 className="font-avenir85Heavy text-base text-white/40 mt-4 group-hover:text-white/80 transition-colors duration-300">New Project</h3>
                                <p className="font-avenir55Roman text-xs text-white/25 mt-1">Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Video Popup */}
            {hoveredVideo && (
                <div 
                    className="fixed pointer-events-none z-[9999] overflow-hidden rounded-2xl border border-white/20 bg-[#22242E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[240px] sm:w-[280px] h-[145px] sm:h-[170px] transition-[left,top] duration-200 ease-out"
                    style={{
                        left: `${mousePos.x + 20}px`,
                        top: `${mousePos.y + 20}px`,
                    }}
                >
                    <video 
                        key={hoveredVideo}
                        src={hoveredVideo} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover" 
                    />
                </div>
            )}
        </section>
    );
}