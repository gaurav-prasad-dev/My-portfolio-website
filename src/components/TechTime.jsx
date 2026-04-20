

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiRedis } from "react-icons/si";

function TechTime() {
  const techs = [
    { icon: <FaJava />, name: "Java", color: "#f89820" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572b6" },
    { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
    { icon: <FaReact />, name: "React", color: "#61dafb" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
    { icon: <SiExpress />, name: "Express", color: "#fff" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
    { icon: <SiRedis />, name: "Redis", color: "#ff4438" },
    { icon: <FaGithub />, name: "GitHub", color: "#fff" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .tech-section {
          background: #050508; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 6rem 2rem; position: relative; overflow: hidden;
        }
        .tech-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .tech-container { max-width: 900px; width: 100%; position: relative; z-index: 1; }
        .tech-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem; justify-content: center;
        }
        .tech-eyebrow::before, .tech-eyebrow::after {
          content: ''; display: block; height: 1px; width: 24px; background: #00ffc8;
        }
        .tech-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 800;
          color: #fff; text-align: center; letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .tech-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; color: rgba(255,255,255,0.35);
          text-align: center; margin-bottom: 4rem;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.25rem;
        }
        .tech-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 18px; padding: 1.5rem 0.75rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
          cursor: default; transition: all 0.35s ease;
          position: relative; overflow: hidden;
        }
        .tech-card::after {
          content: ''; position: absolute; inset: 0; border-radius: 18px;
          background: radial-gradient(circle at 50% 100%, var(--t-color-alpha) 0%, transparent 70%);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .tech-card:hover {
          border-color: var(--t-color-alpha);
          background: rgba(255,255,255,0.06);
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px var(--t-color-alpha);
        }
        .tech-card:hover::after { opacity: 1; }
        .tech-icon {
          font-size: 2rem; color: var(--t-color);
          transition: all 0.3s ease; position: relative; z-index: 1;
          filter: drop-shadow(0 0 0px var(--t-color));
        }
        .tech-card:hover .tech-icon {
          filter: drop-shadow(0 0 8px var(--t-color));
          transform: scale(1.15);
        }
        .tech-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem; color: rgba(255,255,255,0.35);
          font-weight: 500; letter-spacing: 0.03em;
          position: relative; z-index: 1;
          transition: color 0.3s ease;
        }
        .tech-card:hover .tech-name { color: rgba(255,255,255,0.75); }

        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section id="tech" className="tech-section">
        <div className="tech-noise" />
        <div className="tech-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="tech-eyebrow">My Toolkit</div>
            <h2 className="tech-heading">Technologies I Use</h2>
            <p className="tech-sub">The stack I rely on to build fast, scalable, production-ready applications.</p>
          </motion.div>

          <div className="tech-grid">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                className="tech-card"
                style={{ "--t-color": tech.color, "--t-color-alpha": tech.color + "33" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechTime;
