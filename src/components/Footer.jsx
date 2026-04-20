

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600&family=DM+Sans:wght@400&display=swap');
        .footer {
          background: #050508;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 2.5rem 2rem;
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: 1.1rem;
          background: linear-gradient(135deg, #00ffc8, rgba(255,255,255,0.5));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }
        .footer-socials { display: flex; gap: 1rem; }
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4); font-size: 0.9rem;
          text-decoration: none; transition: all 0.3s ease;
        }
        .footer-social-btn:hover {
          background: rgba(0,255,200,0.08);
          border-color: rgba(0,255,200,0.2);
          color: #00ffc8; transform: translateY(-2px);
        }
        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem; color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }
      `}</style>
      <footer className="footer">
        <div className="footer-logo">GP</div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/cody-gaurav" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/gaurav-prasad-dev" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
            <FaGithub />
          </a>
          <div className="footer-social-btn" style={{ cursor: "pointer" }}
            onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gkprasad264@gmail.com", "_blank")}>
            <FaEnvelope />
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Gaurav Kumar · All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
