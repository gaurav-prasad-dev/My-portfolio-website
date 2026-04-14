import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import profile from "../assets/gaurav_img.png";

function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ✅ LEFT CARD (SQUARE) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[320px] h-[380px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-500"
        >

          {/* TOP GRADIENT */}
          <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>

          {/* PROFILE */}
          <div className="flex justify-center -mt-10">
            <img
              src={profile}
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* NAME */}
          <div className="text-center mt-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Gaurav Kumar
            </h2>
            <p className="text-blue-500 text-sm">Full Stack Developer</p>
          </div>

          {/* INFO */}
          <div className="mt-5 space-y-2 px-6 text-sm text-gray-600">
            
            <div className="flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg">
              <FaBriefcase size={14} />
              Available for work
            </div>

            <div className="flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg">
              <FaMapMarkerAlt size={14} />
              Based in India
            </div>

          </div>
        </motion.div>

        {/* ✅ RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's Connect
          </h1>

          <p className="text-gray-600 max-w-md">
            I'm always excited to discuss new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          CONTACT BOXES
          <div className="space-y-3">

            {/* ✅ EMAIL (FIXED) */}
            {/* <a
              href="mailto:gkprasad264@gmail.com?subject=Let's%20Connect&body=Hi%20Gaurav,"
              className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-xl hover:shadow-lg transition"
            >
              <FaEnvelope className="text-gray-700" />
              <span className="text-gray-800 text-sm">
                gkprasad264@gmail.com
              </span>
            </a> */}

            <div
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=gkprasad264@gmail.com",
      "_blank"
    )
  }
  className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-xl hover:shadow-lg transition cursor-pointer"
>
  <FaEnvelope />
  <span>gkprasad264@gmail.com</span>
</div>

            {/* ✅ LINKEDIN (HIDDEN LINK) */}
            <a
              href="https://www.linkedin.com/in/cody-gaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-xl hover:shadow-lg transition"
            >
              <FaLinkedin className="text-blue-600" />
              <span className="text-gray-800 text-sm">
                LinkedIn Profile
              </span>
            </a>

          </div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-4 text-center w-full text-gray-500 text-sm">
        © 2026 Gaurav Kumar. All Rights Reserved
      </div>
    </section>
  );
}

export default ContactSection;