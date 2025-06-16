import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Reusable class for common link styling
const linkClass = "text-[#2C3E50] hover:text-[#3498DB] font-roboto transition-colors duration-300";
const activeLinkClass = "text-[#3498DB] font-bold"; // Active link highlight

// Mobile Links Component
const MobileLinks = ({ links }: { links: { to: string, label: string, isButton?: boolean }[] }) => (
    <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-2">
        {links.map(({ to, label, isButton }) => (
            <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                    `block px-4 py-2 ${isButton ? "bg-[#3498DB] text-white text-center rounded-lg hover:bg-[#2980B9]" : linkClass} ${isActive ? activeLinkClass : ""}`
                }
            >
                {label}
            </NavLink>
        ))}
    </div>
);

// Desktop Links Component
const DesktopLinks = ({ links }: { links: { to: string, label: string, isButton?: boolean }[] }) => (
    <div className="hidden md:flex items-center gap-x-8">
        {links.map(({ to, label, isButton }) => (
            <TransitionGroup>
                <CSSTransition timeout={500} classNames="fade">
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `${isButton ? "bg-[#3498DB] text-white px-6 py-2 rounded-lg hover:bg-[#2980B9] transition-colors duration-300 font-roboto" : linkClass} ${isActive ? activeLinkClass : ""}`
                        }
                    >
                        {label}
                    </NavLink>
                </CSSTransition>
            </TransitionGroup >
        ))}
    </div>
);

interface NavBarProps {
    to: string;
    label: string;
    isButton?: boolean;
}

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Links configuration for both desktop and mobile
    const links: NavBarProps[] = [
        { to: "/", label: "Home" },
        { to: "/packages", label: "Packages" },
        { to: "/client-portal", label: "Client Portal" },
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
        { to: "/onboarding", label: "Get Started", isButton: true }
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-[#2C3E50] font-montserrat">
                            IntraSpark.Dev
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <DesktopLinks links={links} />

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C3E50] focus:outline-none">
                            <i className="text-2xl">
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && <MobileLinks links={links} />}
        </nav>
    );
};

export default NavBar;
