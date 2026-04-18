import React, { useState, useEffect } from "react";
import resume from "../assets/gauravResumeFinal.pdf";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // ✅ Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  // ✅ Active section detection
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 border-b">
      <div className="h-[60px] px-6 flex items-center justify-between">

       
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full transition-all duration-300
              ${
                active === item.id
                  ? "bg-gray-900 text-white shadow-md"
                  : "hover:bg-gray-100 hover:text-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* DESKTOP RESUME BUTTON ✅ */}
        <div className="hidden md:block">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 hover:scale-105 transition">
              Resume
            </button>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition
              ${
                active === item.id
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* MOBILE RESUME BUTTON ✅ */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Resume 📄
            </button>
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;