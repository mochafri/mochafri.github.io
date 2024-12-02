import heroImage from '../image/1.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';

// Daftarkan plugin
gsap.registerPlugin(TextPlugin);

export default function Hero() {

    const textRef = useRef(null);
    const portfolioRef = useRef(null);
    const websiteRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const fullText = 'Hello, I’m <span id="nama">Muhammad Afrizal</span>. Welcome to my';

        // Kosongkan teks awal
        textRef.current.innerHTML = '';  

        // Animasi untuk teks pertama
        gsap.to(textRef.current, {
            text: fullText,  // Isi dengan teks secara bertahap
            duration: 3,     // Durasi animasi
            ease: 'power2.inOut',  // Efek easing
        });

        // Animasi untuk teks "Portfolio" dengan delay
        gsap.fromTo(portfolioRef.current, {
            opacity: 0,
            y: 50, // Posisi awal
        }, {
            opacity: 1,
            y: 0,  // Posisi akhir
            duration: 1,
            delay: 3.2,  // Delay setelah animasi teks utama
            ease: 'power2.inOut',
        });

        // Animasi untuk teks "Website" dengan delay
        gsap.fromTo(websiteRef.current, {
            opacity: 0,
            y: 50, // Posisi awal
        }, {
            opacity: 1,
            y: 0,  // Posisi akhir
            duration: 1,
            delay: 3.5,  // Delay lebih lama untuk teks "Website"
            ease: 'power2.inOut',
        });

        // Animasi untuk gambar fade
        gsap.fromTo(imageRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2,
            delay: 3.7,  // Delay gambar agar muncul setelah teks
            ease: 'power2.inOut',
        });
    }, []);

    return (
        <section id="Hero" className="h-[600px] sm:h-[70vh] flex justify-center items-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full items-center px-3 relative text-center h-[40vh]">
                    <h5 ref={textRef} className="text-[.8em] font-avenirItalic lg:text-[1em]"></h5>
                    <div className="mt-10 text-[15vw] leading-[70px] md:leading-[100px] lg:leading-[150px] lg:text-[12vw]">
                        <h1 ref={portfolioRef} className="font-sharpSemiBold25">Portfolio</h1>
                        <h1 ref={websiteRef} className="font-sharpSemiBold25">Website</h1>
                    </div>
                    <img
                        ref={imageRef}
                        src={heroImage}
                        alt="img"
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-auto object-cover sm:w-[70%] lg:w-[60%]"
                    />
                </div>
            </div>
        </section>
    );
}
