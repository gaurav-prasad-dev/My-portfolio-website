


import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1photo.png";

function ProjectsSection() {
  const projects = [
    {
      title: "Study Mantra",
      subtitle: "EdTech Platform",
      desc: "A full-stack MERN platform for students to buy courses and instructors to sell courses. Features authentication, Razorpay payments, Cloudinary media storage, and a rating system.",
      image: project1,
      tech: ["MERN Stack", "Razorpay API", "Cloudinary", "JWT Auth"],
      liveUrl: "https://study-time-final-frontend-app.vercel.app/",
      githubUrl: "https://github.com/gaurav-prasad-dev/Study-time-final",
      accentColor: "#00ffc8",
      number: "01",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-section {
          background: #080810; min-height: 100vh;
          padding: 6rem 2rem; position: relative; overflow: hidden;
        }
        .projects-bg-dot {
          position: absolute; top: 10%; right: 5%;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,200,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .projects-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .projects-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem; justify-content: center;
        }
        .projects-eyebrow::before, .projects-eyebrow::after {
          content: ''; display: block; height: 1px; width: 24px; background: #00ffc8;
        }
        .projects-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 800;
          color: #fff; text-align: center; letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .projects-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; color: rgba(255,255,255,0.35);
          text-align: center; margin-bottom: 5rem;
        }
        .project-item {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center; margin-bottom: 6rem;
        }
        .project-item:last-child { margin-bottom: 0; }
        .project-img-wrap {
          position: relative; border-radius: 20px; overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          aspect-ratio: 16/10;
        }
        .project-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease; display: block;
        }
        .project-img-wrap:hover img { transform: scale(1.04); }
        .img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,8,16,0.7) 0%, transparent 50%);
          pointer-events: none;
        }
        .project-number {
          font-family: 'Syne', sans-serif;
          font-size: 5rem; font-weight: 800; line-height: 1;
          color: rgba(255,255,255,0.04); margin-bottom: 0.5rem;
          letter-spacing: -0.05em;
        }
        .project-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 0.75rem;
        }
        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800;
          color: #fff; letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .project-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: rgba(255,255,255,0.4);
          line-height: 1.75; margin-bottom: 1.75rem;
        }
        .tech-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
        .tech-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem; font-weight: 500;
          padding: 0.35rem 0.85rem; border-radius: 100px;
          background: rgba(0,255,200,0.07);
          border: 1px solid rgba(0,255,200,0.15);
          color: rgba(0,255,200,0.7);
          letter-spacing: 0.03em;
          transition: all 0.3s ease;
        }
        .tech-pill:hover { background: rgba(0,255,200,0.15); color: #00ffc8; }
        .project-links { display: flex; gap: 0.75rem; }
        .link-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 600;
          padding: 0.7rem 1.5rem; border-radius: 100px;
          background: #00ffc8; color: #000;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s ease; letter-spacing: 0.02em;
          display: inline-flex; align-items: center; gap: 0.4rem;
        }
        .link-primary:hover { background: #fff; box-shadow: 0 0 25px rgba(0,255,200,0.35); transform: translateY(-2px); }
        .link-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          padding: 0.7rem 1.5rem; border-radius: 100px;
          background: transparent; color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.12);
          text-decoration: none; cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex; align-items: center; gap: 0.4rem;
        }
        .link-ghost:hover { border-color: rgba(255,255,255,0.3); color: #fff; transform: translateY(-2px); }
        .project-divider {
          height: 1px; margin-bottom: 6rem;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }
        @media (max-width: 768px) {
          .project-item { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-bg-dot" />
        <div className="projects-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="projects-eyebrow">My Work</div>
            <h2 className="projects-heading">My Projects</h2>
            <p className="projects-sub">Handcrafted projects that showcase real-world skills in action.</p>
          </motion.div>

          {projects.map((p, i) => (
            <div key={i}>
              <motion.div
                className="project-item"
                style={{ direction: i % 2 !== 0 ? "rtl" : "ltr" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div style={{ direction: "ltr" }}>
                  <div className="project-img-wrap">
                    <img src={p.image} alt={p.title} />
                    <div className="img-overlay" />
                  </div>
                </div>

                <div style={{ direction: "ltr" }}>
                  <div className="project-number">{p.number}</div>
                  <div className="project-subtitle">{p.subtitle}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="tech-pills">
                    {p.tech.map((t, j) => <span key={j} className="tech-pill">{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link-primary">Live Demo ↗</a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="link-ghost">GitHub →</a>
                  </div>
                </div>
              </motion.div>
              {i < projects.length - 1 && <div className="project-divider" />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
