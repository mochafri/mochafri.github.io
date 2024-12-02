import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import voluntrack from '../image/voluntrack.png'

gsap.registerPlugin(ScrollTrigger);

export default function Project() {

    const sectionsRef = useRef([]); // Declare sectionsRef here

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
        <section id="project" className="mt-20 p-10 lg:mt-40 scroll-mt-20 flex justify-center">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="judul" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="font-sharpSemiBold25 text-center text-[2.7rem] opacity-10">My Project</h1>
                            <h1 className="section-text -mt-6">My Project</h1>
                        </div>
                        <div className="flex items-center justify-center mt-20 gap-5 flex-wrap" >
                            <div className="project-card" ref={(el) => sectionsRef.current.push(el)}>
                                <img src={voluntrack} alt="voluntrack" className='w-full h-full object-cover object-left' />
                            </div>
                            <div className="project-card text-when-empty" ref={(el) => sectionsRef.current.push(el)}>
                            </div>
                            <div className="project-card text-when-empty" ref={(el) => sectionsRef.current.push(el)}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}