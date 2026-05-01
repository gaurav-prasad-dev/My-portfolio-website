

import React from "react";
import { motion } from "framer-motion";
import { Code, CreditCard, Cpu, Trophy } from "lucide-react";

function AboutSection() {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Versatile Enterprise",
      desc: "Full-stack proficiency with React, Node.js and databases like MongoDB — building end-to-end solutions that scale.",
      color: "#00ffc8",
    },
    {
      icon: <CreditCard size={24} />,
      title: "E-commerce & Payments",
      desc: "Skilled in building e-commerce platforms with secure payment integrations like Razorpay for real-world commerce.",
      color: "#ff9f43",
    },
    {
      icon: <Cpu size={24} />,
      title: "Modern Solutions",
      desc: "Focused on cutting-edge architectures with real-world scalable implementations and cloud-ready deployments.",
      color: "#a29bfe",
    },
    {
      icon: <Trophy size={24} />,
      title: "Auth & Security",
      desc: "Implemented JWT, OAuth, OTP verification, and secure password handling with bcrypt for production-grade apps.",
      color: "#fd79a8",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          min-height: 100vh; background: #080810;
          display: flex; align-items: center; justify-content: center;
          padding: 6rem 2rem; position: relative; overflow: hidden;
        }
        .about-bg-line {
          position: absolute; top: 50%; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,200,0.1), transparent);
          pointer-events: none;
        }
        .about-container { max-width: 1100px; width: 100%; position: relative; z-index: 1; }
        .about-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem; justify-content: center;
        }
        .about-eyebrow::before, .about-eyebrow::after {
          content: ''; display: block; height: 1px; width: 24px; background: #00ffc8;
        }
        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 800; color: #fff; text-align: center;
          letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .about-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem; color: rgba(255,255,255,0.4);
          text-align: center; max-width: 500px; margin: 0 auto 4rem;
          line-height: 1.7;
        }
        .about-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
        }
        .feature-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 2rem;
          transition: all 0.4s ease; position: relative; overflow: hidden;
          cursor: default;
        }
        .feature-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--card-color), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .feature-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .feature-card:hover::before { opacity: 1; }
        .card-glow {
          position: absolute; bottom: -30px; right: -30px;
          width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, var(--card-color) 0%, transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .feature-card:hover .card-glow { opacity: 0.12; }
        .card-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--card-color);
          transition: all 0.3s ease;
        }
        .feature-card:hover .card-icon-wrap {
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 20px var(--card-color-alpha);
        }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem; font-weight: 700; color: #fff;
          margin-bottom: 0.6rem; letter-spacing: -0.01em;
        }
        .card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; color: rgba(255,255,255,0.4);
          line-height: 1.7;
        }
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-bg-line" />
        <div className="about-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="about-eyebrow">Who I Am</div>
            <h2 className="about-heading">About Me</h2>
            <p className="about-sub">
              A Full Stack Developer who builds fast, scalable web applications — specializing in the MERN Stack with a passion for clean architecture.
            </p>
          </motion.div>

          <div className="about-grid">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="feature-card"
                style={{ "--card-color": item.color, "--card-color-alpha": item.color + "33" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="card-glow" />
                <div className="card-icon-wrap">{item.icon}</div>
                <div className="card-title">{item.title}</div>
                <p className="card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
