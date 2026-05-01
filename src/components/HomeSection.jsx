
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import resume from "../../public/Gaurav_Claude_resume.pdf";
import profile from "../assets/gaurav_img.png";

function HomeSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 200, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // draw faint connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,200,${0.04 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .home-section {
          position: relative; min-height: 100vh;
          background: #050508;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 0 2rem;
        }
        .home-canvas {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
        }
        .home-orb-1 {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,200,0.06) 0%, transparent 70%);
          top: -150px; right: -100px; pointer-events: none;
          animation: orbFloat 8s ease-in-out infinite alternate;
        }
        .home-orb-2 {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%);
          bottom: 0; left: -100px; pointer-events: none;
          animation: orbFloat 10s ease-in-out infinite alternate-reverse;
        }
        @keyframes orbFloat {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(40px) scale(1.1); }
        }
        .home-grid {
          position: relative; z-index: 2;
          max-width: 1200px; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
        }
        .home-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .home-label::before {
          content: ''; display: block; width: 32px; height: 1px; background: #00ffc8;
        }
        .home-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800; line-height: 1.05;
          color: #fff; margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }
        .home-title .name-accent {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.4));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .type-wrapper {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 600; color: #00ffc8;
          min-height: 2.2rem; margin-bottom: 1.5rem;
        }
        .home-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem; line-height: 1.75;
          color: rgba(255,255,255,0.45);
          max-width: 440px; margin-bottom: 2.5rem;
        }
        .home-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600;
          padding: 0.85rem 2rem; border-radius: 100px;
          background: #00ffc8; color: #000;
          border: none; cursor: pointer;
          transition: all 0.3s ease; text-decoration: none;
          display: inline-block; letter-spacing: 0.02em;
        }
        .btn-primary:hover {
          background: #fff; box-shadow: 0 0 30px rgba(0,255,200,0.4);
          transform: translateY(-2px);
        }
        .btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          padding: 0.85rem 2rem; border-radius: 100px;
          background: transparent; color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer; transition: all 0.3s ease;
        }
        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.4); color: #fff;
          background: rgba(255,255,255,0.05); transform: translateY(-2px);
        }
        .home-stats {
          display: flex; gap: 2.5rem; margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .stat-item { font-family: 'Syne', sans-serif; }
        .stat-num {
          font-size: 1.8rem; font-weight: 800; color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem; color: rgba(255,255,255,0.35);
          margin-top: 0.25rem; letter-spacing: 0.05em; text-transform: uppercase;
        }
        .home-image-wrap {
          position: relative; display: flex; justify-content: center; align-items: center;
        }
        .image-ring {
          position: absolute;
          width: 420px; height: 420px; border-radius: 50%;
          border: 1px solid rgba(0,255,200,0.15);
          animation: ringPulse 3s ease-in-out infinite;
        }
        .image-ring-2 {
          width: 360px; height: 360px;
          border: 1px solid rgba(0,255,200,0.08);
          animation: ringPulse 3s ease-in-out infinite reverse;
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.5; }
        }
        .profile-img-wrap {
          position: relative; z-index: 2;
          width: 320px; height: 320px; border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(0,255,200,0.25);
          box-shadow: 0 0 60px rgba(0,255,200,0.12), 0 30px 80px rgba(0,0,0,0.5);
        }
        .profile-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s ease;
        }
        .profile-img-wrap:hover img { transform: scale(1.07); }
        .floating-badge {
          position: absolute; z-index: 3;
          background: rgba(5,5,8,0.9); border: 1px solid rgba(0,255,200,0.2);
          backdrop-filter: blur(10px); border-radius: 12px;
          padding: 0.6rem 1rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
          color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 0.5rem;
          animation: badgeFloat 4s ease-in-out infinite alternate;
        }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #00ffc8;
          box-shadow: 0 0 8px #00ffc8; animation: blink 1.5s ease-in-out infinite; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes badgeFloat {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        .badge-top { top: 10%; right: -5%; }
        .badge-bottom { bottom: 15%; left: -8%; animation-delay: 1s; }

        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .home-image-wrap { order: -1; }
          .image-ring { width: 280px; height: 280px; }
          .image-ring-2 { width: 240px; height: 240px; }
          .profile-img-wrap { width: 220px; height: 220px; }
          .home-btns { justify-content: center; }
          .home-label, .home-stats { justify-content: center; }
          .home-desc { margin-left: auto; margin-right: auto; }
          .badge-top { right: 5%; top: 0; }
          .badge-bottom { left: 0; }
        }
      `}</style>

      <section className="home-section" id="home">
        <canvas className="home-canvas" ref={canvasRef} />
        <div className="home-orb-1" />
        <div className="home-orb-2" />

        <div className="home-grid">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <div className="home-label">Full Stack Developer</div>

            <h1 className="home-title">
              Hi, I'm
              <span className="name-accent">Gaurav Prasad</span>
            </h1>

            <div className="type-wrapper">
              <TypeAnimation
                sequence={["Full Stack Developer", 2000, "MERN Stack Engineer", 2000, "Backend Architect", 2000]}
                speed={50} repeat={Infinity}
              />
            </div>

            <p className="home-desc">
              I build scalable web applications, real-time systems, and modern backend architectures using Node.js, React, and cloud technologies.
            </p>

            <div className="home-btns">
              <a href="/Gaurav_Claude_resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-resume">
  Download Resume
</a>
              <button className="btn-ghost" onClick={() => {
                const s = document.getElementById("contact");
                s?.scrollIntoView({ behavior: "smooth" });
              }}>Contact Me</button>
            </div>

            <div className="home-stats">
              <div className="stat-item">
                <div className="stat-num">1+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">12+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="home-image-wrap" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
            <div className="image-ring" />
            <div className="image-ring image-ring-2" />
            <div className="profile-img-wrap">
              <img src={profile} alt="Gaurav Prasad" />
            </div>
            <div className="floating-badge badge-top">
              <span className="badge-dot" /> Available for work
            </div>
            <div className="floating-badge badge-bottom">
              ⚡ MERN Stack
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomeSection;
