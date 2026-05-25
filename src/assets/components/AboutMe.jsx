import html5 from '../icon/html5.svg';
import css3 from '../icon/css3.svg';
import javascript from '../icon/javascript.svg';
import bootstrap from '../icon/bootstrap.svg';
import tailwindcss from '../icon/tailwindcss.svg';
import react from '../icon/react.svg';
import gallery1 from '../image/2.jpg';
import gallery2 from '../image/3.jpg';
import gallery3 from '../image/4.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
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

    // animasi gallery
    const carouselItems = [gallery1, gallery2, gallery3];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };


    // Autoslide effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // 3000 ms = 3 detik
        return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
    });



    return (
        <section id="AboutMe" className="mt-32 sm:mt-40 lg:mt-56 px-5 scroll-mt-28 flex justify-center">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:max-w-[85%] lg:max-w-[80%]">
                        {/* Title at the top */}
                        <div className="judul w-full text-center mb-12" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="shadow-text">About Me</h1>
                            <h1 className="section-text -mt-7">About Me</h1>
                        </div>

                        {/* 2-Column Grid for Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                            {/* Left Column (Who Am I & Skills) */}
                            <div className="flex flex-col gap-6">
                                <div
                                    ref={(el) => sectionsRef.current.push(el)}
                                    className="who p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl flex-1 transform hover:-translate-y-1 hover:border-secondary/20 transition-all duration-300 hover:shadow-secondary/5"
                                >
                                    <h2 className="font-avenir85Heavy text-2xl mb-4 text-white/90">Who Am I?</h2>
                                    <p className="font-avenir55Roman text-sm leading-relaxed text-white/80">
                                        Hello, my name is Muhammad Afrizal, a front-end developer with a D3 degree in Software Application Engineering from Telkom University. I am passionate about crafting visually appealing and user-friendly web interfaces that enhance the digital experience. With a strong foundation in software engineering and a focus on front-end development, I am dedicated to creating websites that are both functional and aesthetically pleasing. Thank you for visiting my portfolio, and I look forward to connecting!
                                    </p>
                                </div>

                                <div
                                    ref={(el) => sectionsRef.current.push(el)}
                                    className="skills p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transform hover:-translate-y-1 hover:border-secondary/20 transition-all duration-300 hover:shadow-secondary/5"
                                >
                                    <h2 className="font-avenir85Heavy text-2xl mb-4 text-white/90">Skills</h2>
                                    <div className="skill flex justify-between items-center mt-2">
                                        <img src={html5} alt="html" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                        <img src={css3} alt="css" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                        <img src={javascript} alt="javascript" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                        <img src={bootstrap} alt="bootstrap" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                        <img src={tailwindcss} alt="tailwindcss" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                        <img src={react} alt="react" className="w-[12%] sm:w-[13%] hover:scale-125 transition-transform duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(221,126,113,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (Gallery Carousel) */}
                            <div
                                ref={(el) => sectionsRef.current.push(el)}
                                className="gallery p-6 sm:p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transform hover:-translate-y-1 hover:border-secondary/20 transition-all duration-300 hover:shadow-secondary/5 flex flex-col justify-between"
                            >
                                <h2 className="font-avenir85Heavy text-2xl mb-4 text-white/90">Gallery</h2>
                                <div id="default-carousel" className="relative w-full flex-1 min-h-[220px] sm:min-h-[280px]" data-carousel="slide">
                                    <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                                        {/* Carousel Items */}
                                        {carouselItems.map((src, index) => (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 w-full h-full overflow-hidden rounded-2xl duration-700 ease-in-out transition-opacity ${
                                                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                                }`}
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Carousel ${index + 1}`}
                                                    className="w-full h-full object-cover object-bottom z-10"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
