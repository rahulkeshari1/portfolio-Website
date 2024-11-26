import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much the user has scrolled
      const windowHeight = window.innerHeight; // The height of the viewport
      const docHeight = document.documentElement.scrollHeight; // The total height of the document
  
      const totalScroll = docHeight - windowHeight; // Total scrollable height
      const progress = (scrollTop / totalScroll) * 100; // Percentage of scroll
  
      setScrollProgress(progress > 100 ? 100 : progress); // Ensure it doesn't exceed 100%
  
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">RAHUL KESHARI</div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        &#8942; {/* Unicode for vertical ellipsis */}
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#Projects" onClick={() => setIsMenuOpen(false)}>Projects</a>

        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>

        
      </nav>
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    </header>
  );
};

export default Header;
