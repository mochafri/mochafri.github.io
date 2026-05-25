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
        <section id="contact" className="mt-32 sm:mt-40 lg:mt-56 px-5 sm:px-10 lg:max-w-[80%] mx-auto scroll-mt-28">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <div className="judul w-full text-center mb-10" ref={(el) => sectionsRef.current.push(el)}>
                            <h1 className="font-sharpSemiBold25 text-5xl opacity-10">Contact</h1>
                            <div className="section-text -mt-7 text-center">Contact</div>
                        </div>
                        {datas.map((data, index) => (
                            <div 
                                className="sub-section mt-10 p-6 sm:p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row gap-10 md:gap-16" 
                                key={index}
                            >
                                <div className="left w-full flex flex-col gap-6 md:w-1/2" ref={(el) => sectionsRef.current.push(el)}>
                                    {[
                                        { icon: Instagram, title: 'Instagram', value: data.instagram, link: 'https://www.instagram.com/moch.afri/' },
                                        { icon: Phone, title: 'Phone', value: data.phone, link: 'https://wa.me/6282126030612' },
                                        { icon: Letter, title: 'Email', value: data.email, link: 'mailto:afrizalmuhammad656@gmail.com' },
                                        { icon: LinkedIn, title: 'LinkedIn', value: data.linkedIn },
                                    ].map(({ icon, title, value, link }, i) => (
                                        <div className="account-item group flex items-center gap-5 bg-white/[0.01] border border-white/5 hover:border-secondary/30 hover:bg-white/[0.04] w-full rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]" key={i}>
                                            <div className="p-3 bg-white/[0.03] rounded-xl group-hover:bg-secondary/10 transition-colors duration-300">
                                                <img src={icon} alt={title.toLowerCase()} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="account">
                                                <h5 className="text-lg font-avenir85Heavy text-white/90">{title}</h5>
                                                {link ? (
                                                    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white/60 hover:text-secondary transition-colors duration-200">
                                                        <p className="text-sm font-avenir55Roman">{value}</p>
                                                    </a>
                                                ) : (
                                                    <p className="text-sm font-avenir55Roman text-white/60">{value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <form className="right w-full mt-6 md:mt-0 md:w-1/2 md:border-l md:border-white/10 md:ps-12 flex flex-col justify-between" ref={(el) => sectionsRef.current.push(el)}>
                                    <div>
                                        <h3 className="text-center md:text-left text-2xl font-avenir85Heavy mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Send me a message</h3>
                                        <div className="email">
                                            <label htmlFor="email" className="block text-sm font-avenir55Roman text-white/70">Email</label>
                                            <input 
                                                type="text" 
                                                id="email" 
                                                className="w-full mt-2 rounded-xl h-12 ps-4 bg-white/[0.03] border border-white/10 focus:border-secondary/80 focus:ring-1 focus:ring-secondary/80 outline-none text-white transition-all duration-300 placeholder-white/30" 
                                                placeholder="youremail@gmail.com" 
                                            />
                                        </div>
                                        <div className="message mt-6">
                                            <label htmlFor="message" className="block text-sm font-avenir55Roman text-white/70">Message</label>
                                            <textarea 
                                                id="message" 
                                                className="w-full mt-2 rounded-xl ps-4 py-3 bg-white/[0.03] border border-white/10 focus:border-secondary/80 focus:ring-1 focus:ring-secondary/80 outline-none text-white transition-all duration-300 placeholder-white/30" 
                                                placeholder="Write your message here..." 
                                                rows={5} 
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full sm:w-auto self-end rounded-xl bg-secondary text-white hover:bg-secondary/95 px-8 py-3 mt-8 font-avenir85Heavy shadow-lg shadow-secondary/15 hover:shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
