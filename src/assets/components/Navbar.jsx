import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#Hero");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { id: "#Hero", label: "Home" },
        { id: "#AboutMe", label: "About Me" },
        { id: "#project", label: "Project" },
        { id: "#contact", label: "Contact" }
    ];

    // Tutup dropdown jika klik di luar elemen dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Track active section via Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ["Hero", "AboutMe", "project", "contact"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="w-full border-gray-200 sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:max-w-[80%]">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white font-bold font-avenirBlack">MA</span>
                </a>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    ref={dropdownRef}
                    className={`${isOpen ? "flex" : "hidden"
                        } absolute top-full right-0 me-4 md:relative md:flex md:w-auto`}
                    id="navbar-default"
                >
                    <ul
                        className={`font-medium text-white flex flex-col md:flex-row p-4 md:p-0 ${isOpen ? "mt-4 border border-gray-100 rounded-lg  bg-background dark:border-gray-700" : " gap-10 font-avenirMedium text-sm"
                            }`}
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id}>
                                    <a 
                                        href={item.id} 
                                        className={`relative py-1.5 font-avenirMedium text-sm transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary after:transition-transform after:duration-300 after:origin-left block md:inline ${
                                            isActive 
                                                ? "text-secondary after:scale-x-100" 
                                                : "text-white/70 hover:text-secondary after:scale-x-0 hover:after:scale-x-100"
                                        }`}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
