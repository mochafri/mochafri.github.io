import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
                        <li>
                            <a href="#Hero" className="block py-2 px-3 text-white  rounded md:bg-transparent hover:bg-secondary md:p-0  " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#AboutMe" className="block py-2 px-3 text-white  md:border-0  md:p-0 dark:text-white  hover:bg-secondary dark:hover:text-white ">About Me</a>
                        </li>
                        <li>
                            <a href="#project" className="block py-2 px-3 text-white md:border-0  md:p-0 dark:text-white  hover:bg-secondary dark:hover:text-white ">Project</a>
                        </li>

                        <li>
                            <a href="#contact" className="block py-2 px-3 text-white md:border-0  md:p-0 dark:text-white  hover:bg-secondary dark:hover:text-white ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
