import { useState } from "react";
import { siteData } from "../Data/Site";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          {siteData.shortName}
        </a>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          Let's Connect
          <span>↗</span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;