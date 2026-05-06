


import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed; top: 0; width: 100%; z-index: 999;
          transition: all 0.4s ease;
        }
        .nav-root.scrolled {
          background: rgba(5, 5, 8, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 200, 0.08);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          height: 68px; padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: 1.4rem;
          background: linear-gradient(135deg, #00ffc8, #fff 60%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          cursor: pointer;
        }
        .nav-links {
          display: flex; gap: 0.25rem; align-items: center;
        }
        .nav-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          padding: 0.45rem 1.1rem;
          border-radius: 100px;
          border: none; background: transparent;
          color: rgba(255,255,255,0.55);
          cursor: pointer; transition: all 0.3s ease;
          position: relative; letter-spacing: 0.01em;
        }
        .nav-btn:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-btn.active {
          color: #000;
          background: #00ffc8;
          font-weight: 600;
          box-shadow: 0 0 20px rgba(0, 255, 200, 0.35);
        }
        .resume-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 600;
          padding: 0.5rem 1.3rem;
          border-radius: 100px;
          border: 1px solid rgba(0,255,200,0.4);
          background: transparent; color: #00ffc8;
          cursor: pointer; letter-spacing: 0.05em; text-transform: uppercase;
          transition: all 0.3s ease; text-decoration: none;
          display: inline-block;
        }
        .resume-btn:hover {
          background: #00ffc8; color: #000;
          box-shadow: 0 0 25px rgba(0,255,200,0.4);
        }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: #fff; border-radius: 2px; transition: all 0.3s ease;
        }
        .mobile-menu {
          background: rgba(5,5,8,0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0,255,200,0.1);
          padding: 1rem 1.5rem 1.5rem;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .mobile-nav-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; font-weight: 500;
          padding: 0.7rem 1rem; border-radius: 10px;
          border: none; background: transparent;
          color: rgba(255,255,255,0.6); cursor: pointer;
          text-align: left; transition: all 0.3s ease;
        }
        .mobile-nav-btn.active { background: rgba(0,255,200,0.12); color: #00ffc8; }
        .mobile-nav-btn:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .mobile-resume {
          margin-top: 0.5rem; padding: 0.75rem;
          border: 1px solid rgba(0,255,200,0.3);
          border-radius: 10px; color: #00ffc8;
          text-align: center; font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; text-decoration: none; display: block;
          transition: all 0.3s ease;
        }
        .mobile-resume:hover { background: rgba(0,255,200,0.1); }
        @media (max-width: 768px) {
          .nav-links, .nav-links + a, .desktop-resume { display: none !important; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>GP</div>

          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`nav-btn ${active === item.id ? "active" : ""}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* <a href="/resume2.pdf" target="_blank" rel="noopener noreferrer" className="mobile-resume">
  Resume ↗
</a> */}//

  {/* View Resume */}
  {/* <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="mobile-resume"
  >
    View Resume
  </a> */}
  <a
  href="/resume.pdf"
  className="mobile-resume"
>
    Resume ↗
</a>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-btn ${active === item.id ? "active" : ""}`}
              >
                {item.name}
              </button>
            ))}
            <a href={resume} target="_blank" rel="noopener noreferrer" className="mobile-resume">
              Resume ↗
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
