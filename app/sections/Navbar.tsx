"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const nextState = !prev;
      if (typeof window !== "undefined") {
        document.body.style.overflow = nextState ? "hidden" : "";
      }
      return nextState;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  const navLinks = [
    { name: "Search Cars", href: "/search" },
    { name: "Sell Your Car", href: "/sell" },
    { name: "Finance", href: "/finance" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`} role="banner">
        <nav className="navbar-inner" aria-label="Main navigation">
          <Link href="/" className="navbar-logo" aria-label="AutoMarket home">
            AutoMarket
          </Link>
          
          <div className="navbar-links desktop-only">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link href="/list" className="nav-cta">
            List Your Car
          </Link>

          <button
            className={`hamburger mobile-only ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
        {/* Show CTA in mobile menu overlay as specified */}
        <Link
          href="/list"
          className="mobile-nav-link"
          style={{ color: "#FF4D00" }}
          onClick={closeMenu}
        >
          List Your Car
        </Link>
      </div>
    </>
  );
}
