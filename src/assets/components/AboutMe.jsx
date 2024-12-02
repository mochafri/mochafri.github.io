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
        <section id="AboutMe" className="p-5 scroll-mt-28 sm:mt-10 lg:mt-56">
            <div className="container">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full self-center sm:grid sm:grid-cols-2 gap-5 sm:max-w-[80%]">
                        <div className="judul order-2" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="shadow-text">About Me</h1>
                            <h1 className="section-text">About Me</h1>
                            <h1 className="shadow-text">About Me</h1>
                        </div>

                        <div
                            ref={(el) => sectionsRef.current.push(el)}
                            className="who mt-20 p-5 rounded-[20px] shadow-custom-dark order-1 sm:mt-0"
                        >
                            <h2 className="font-avenir85Heavy text-2xl text-center mb-3">Who Am I?</h2>
                            <p className="font-avenir55Roman text-xs">
                                Hello, my name is Muhammad Afrizal, a front-end developer with a D3 degree in Software Application Engineering from Telkom University. I am passionate about crafting visually appealing and user-friendly web interfaces that enhance the digital experience. With a strong foundation in software engineering and a focus on front-end development, I am dedicated to creating websites that are both functional and aesthetically pleasing. Thank you for visiting my portfolio, and I look forward to connecting!
                            </p>
                        </div>
                        <div
                            ref={(el) => sectionsRef.current.push(el)}
                            className="skills mt-10 p-5 rounded-[20px] shadow-custom-dark order-3 sm:mt-5 h-[150px] lg:h-full flex flex-col justify-center"
                        >
                            <h2 className="font-avenir85Heavy text-2xl text-center mb-3">Skills</h2>
                            <div className="skill flex justify-between">
                                <img src={html5} alt="html" className="w-[15%]" />
                                <img src={css3} alt="html" className="w-[15%]" />
                                <img src={javascript} alt="html" className="w-[15%]" />
                                <img src={bootstrap} alt="html" className="w-[15%]" />
                                <img src={tailwindcss} alt="html" className="w-[15%]" />
                                <img src={react} alt="html" className="w-[15%]" />
                            </div>
                        </div>
                        <div
                            ref={(el) => sectionsRef.current.push(el)}
                            className="gallery mt-10 p-5 rounded-[20px] shadow-custom-dark order-4 h-[300px] sm:-mt-32 sm:ms-5 lg:-mt-16"
                        >
                            <h2 className="font-avenir85Heavy text-2xl text-center mb-3">Gallery</h2>
                            {/* <div className="frame w-full h-[85%] overflow-hidden rounded-xl">
                                <img
                                    src={gallery1}
                                    alt="gambar"
                                    className="filter grayscale hover:grayscale-0 transition duration-500 bg-cover w-full h-full object-cover object-bottom"
                                />
                            </div> */}


                            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                                <div className="relative rounded-lg md:h-96">
                                    {/* Carousel Items */}
                                    {carouselItems.map((src, index) => (
                                        <div
                                            key={index}
                                            className={`absolute sm:h-[56%] overflow-hidden rounded-xl w-full duration-700 ease-in-out transition-opacity  ${index === currentIndex ? "opacity-100 " : "opacity-0"
                                                } `}
                                        >
                                            <img
                                                src={src}
                                                alt={`Carousel ${index + 1}`}
                                                className="block transition duration-100 bg-cover w-full h-full object-cover object-bottom z-10"
                                            />
                                        </div>
                                    ))}


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
