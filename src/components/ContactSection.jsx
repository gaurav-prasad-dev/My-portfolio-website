

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import profile from "../assets/gaurav_img.png";

function ContactSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          background: #050508; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 6rem 2rem; position: relative; overflow: hidden;
        }
        .contact-orb {
          position: absolute; bottom: -200px; right: -200px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,200,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-orb-2 {
          position: absolute; top: -100px; left: -150px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(160,100,255,0.04) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 1100px; width: 100%;
          display: grid; grid-template-columns: 340px 1fr;
          gap: 5rem; align-items: center;
          position: relative; z-index: 1;
        }
        /* PROFILE CARD */
        .profile-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px; overflow: hidden;
          position: relative;
        }
        .card-header {
          height: 90px;
          background: linear-gradient(135deg, rgba(0,255,200,0.15), rgba(100,50,255,0.15));
          position: relative;
        }
        .card-header::after {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(
            45deg, transparent, transparent 10px,
            rgba(255,255,255,0.01) 10px, rgba(255,255,255,0.01) 20px
          );
        }
        .card-avatar-ring {
          position: absolute; bottom: -36px; left: 50%;
          transform: translateX(-50%);
          width: 76px; height: 76px; border-radius: 50%;
          border: 3px solid #050508;
          background: rgba(0,255,200,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .card-avatar {
          width: 68px; height: 68px; border-radius: 50%;
          object-fit: cover; border: 2px solid rgba(0,255,200,0.3);
        }
        .card-body { padding: 3rem 1.5rem 1.75rem; text-align: center; }
        .card-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 0.25rem;
        }
        .card-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; color: #00ffc8;
          font-weight: 500; margin-bottom: 1.5rem;
          letter-spacing: 0.03em;
        }
        .card-badges { display: flex; flex-direction: column; gap: 0.5rem; }
        .card-badge {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px; padding: 0.6rem 1rem;
          font-family: 'DM Sans', sans-serif; font-size: 0.78rem;
          color: rgba(255,255,255,0.5); display: flex; align-items: center;
          justify-content: center; gap: 0.5rem;
        }
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #00ffc8;
          box-shadow: 0 0 6px #00ffc8; animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* RIGHT CONTENT */
        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #00ffc8; margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .contact-eyebrow::before {
          content: ''; display: block; height: 1px; width: 24px; background: #00ffc8;
        }
        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem); font-weight: 800;
          color: #fff; letter-spacing: -0.03em; margin-bottom: 1.25rem; line-height: 1.05;
        }
        .contact-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; color: rgba(255,255,255,0.4);
          line-height: 1.75; max-width: 440px; margin-bottom: 2.5rem;
        }
        .contact-links { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-link {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.25rem; border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer; text-decoration: none;
          transition: all 0.35s ease;
          position: relative; overflow: hidden;
        }
        .contact-link::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--link-color);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .contact-link:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
          transform: translateX(4px);
        }
        .contact-link:hover::before { transform: scaleY(1); }
        .link-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          color: var(--link-color); font-size: 1rem; flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .contact-link:hover .link-icon-wrap {
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 15px var(--link-color-alpha);
        }
        .link-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; color: rgba(255,255,255,0.65); font-weight: 500;
          transition: color 0.3s ease;
        }
        .contact-link:hover .link-text { color: #fff; }
        .link-arrow {
          margin-left: auto; color: rgba(255,255,255,0.2);
          font-size: 0.8rem; transition: all 0.3s ease;
        }
        .contact-link:hover .link-arrow { color: var(--link-color); transform: translateX(3px); }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
          .profile-card { max-width: 320px; margin: 0 auto; }
          .contact-heading { text-align: center; }
          .contact-eyebrow { justify-content: center; }
          .contact-desc { text-align: center; margin-left: auto; margin-right: auto; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-orb" />
        <div className="contact-orb-2" />
        <div className="contact-inner">
          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="profile-card">
              <div className="card-header">
                <div className="card-avatar-ring">
                  <img src={profile} alt="Gaurav Kumar" className="card-avatar" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-name">Gaurav Kumar</div>
                <div className="card-role">Full Stack Developer</div>
                <div className="card-badges">
                  <div className="card-badge">
                    <span className="status-dot" />
                    Available for work
                  </div>
                  <div className="card-badge">
                    <FaMapMarkerAlt size={11} />
                    Based in India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-eyebrow">Get in Touch</div>
            <h2 className="contact-heading">Let's Connect</h2>
            <p className="contact-desc">
              Always excited to discuss new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="contact-links">
              <div
                className="contact-link"
                style={{ "--link-color": "#ea4335", "--link-color-alpha": "#ea433533" }}
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gkprasad264@gmail.com", "_blank")}
              >
                <div className="link-icon-wrap"><FaEnvelope /></div>
                <span className="link-text">gkprasad264@gmail.com</span>
                <span className="link-arrow">↗</span>
              </div>

              <a
                href="https://www.linkedin.com/in/cody-gaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{ "--link-color": "#0a66c2", "--link-color-alpha": "#0a66c233" }}
              >
                <div className="link-icon-wrap"><FaLinkedin /></div>
                <span className="link-text">LinkedIn — cody-gaurav</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
