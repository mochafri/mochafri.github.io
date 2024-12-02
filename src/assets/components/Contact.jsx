import Instagram from '../icon/Instagram.svg'
import Letter from '../icon/Letter.svg'
import Phone from '../icon/Phone.svg'
import LinkedIn from '../icon/LinkedIn.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {

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
                            start: "top 70%", // Trigger animation when the top of the element reaches 80% of the viewport
                            end: "bottom 30%",
                            toggleActions: "play none none none" //Play when entering, reverse when leaving
                        },
                    }
                );
            }
        });
    }, []);

    const datas = [
        { instagram: "@mochafri", phone: "082126030612", email: "afrizalmuhammad656@gmail.com", linkedIn: "Afrizal656" },
        // Data lainnya...
    ];


    return (
        <section id="contact" className="mt-20 px-10 lg:max-w-[80%] mx-auto lg:my-40 scroll-mt-28 lg:">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="judul w-full sm:w-1/2" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="font-sharpSemiBold25 text-center text-5xl opacity-10">Contact</h1>
                            <div className="section-text -mt-5 text-center">Contact</div>
                        </div>
                        {datas.map((data, index) => (
                            <div className="sub-section mt-10 sm:flex sm:mt-28 md:mt-20" key={index}>
                                <div className="left w-full flex flex-col gap-16 sm:w-1/2" ref={(el) => sectionsRef.current.push(el)}>
                                    {[
                                        { icon: Instagram, title: 'Instagram', value: data.instagram, link: 'https://www.instagram.com/moch.afri/' },
                                        { icon: Phone, title: 'Phone', value: data.phone, link: 'https://wa.me/6282126030612' },
                                        { icon: Letter, title: 'Email', value: data.email, link: 'mailto:afrizalmuhammad656@gmail.com' },
                                        { icon: LinkedIn, title: 'LinkedIn', value: data.linkedIn },
                                    ].map(({ icon, title, value, link }, i) => (
                                        <div className="account-item flex items-center gap-5 hover:bg-blue-500 w-full rounded-lg p-2 transition duration-500 lg:w-[80%]" key={i}>
                                            <img src={icon} alt={title.toLowerCase()} width={50} />
                                            <div className="account">
                                                <h5 className="text-xl">{title}</h5>
                                                {link ? (
                                                    <a href={link} target="_blank" className="cursor-pointer hover:text-secondary">
                                                        <p className="text-base">{value}</p>
                                                    </a>
                                                ) : (
                                                    <p className="text-base">{value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <form className="right w-full mt-28 sm:w-1/2 sm:mt-0 sm:border-l sm:ps-20" ref={(el) => sectionsRef.current.push(el)}>
                                    <h3 className="text-center text-xl lg:text-2xl" >Send me a message</h3>
                                    <div className="email mt-10">
                                        <label htmlFor="email" className="block text-lg">Email</label>
                                        <input type="text" id="email" className="w-full mt-3 rounded-lg h-8 ps-3 text-background" placeholder="youremail@gmail.com" />
                                    </div>
                                    <div className="message mt-8">
                                        <label htmlFor="message" className="block text-lg">Message</label>
                                        <textarea id="message" className="w-full mt-3 rounded-lg ps-3 text-background py-1" placeholder="write your message here..." rows={5} />
                                    </div>
                                    <button type="submit" className="rounded-xl bg-white text-background px-5 py-1 mt-3 font-semibold">Send</button>
                                </form>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
