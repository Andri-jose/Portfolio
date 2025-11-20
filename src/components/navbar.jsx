import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Close menu after clicking a nav item
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center px-10 py-10 bg-gray-900 text-white relative">
            <div className="text-2xl tracking-wider text-lg uppercase font-extralight font-medium md:ml-5">
                Andri Salazar
            </div>
            <div
                className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative 
                top-full md:top-0 left-0 right-0 md:left-auto md:right-auto bg-gray-900 md:bg-transparent px-8 md:px-0 
                py-4 md:py-0 z-10 md:ml-5`}
            >
                <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-blue-300 transition-colors">
                    About
                </button>

                <button
                    onClick={() => scrollToSection('portfolio')}
                    className="hover:text-blue-300 transition-colors">
                    Portfolio
                </button>

                <button
                    onClick={() => scrollToSection('contacts')}
                    className="hover:text-blue-300 transition-colors">
                    Contact
                </button>

            </div>
            <div className="md:hidden cursor-pointer">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            </div>
        </nav>
    );
};

export default Navbar;
