import React from "react";
import profile from "../assets/gaurav_img.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/gauravResumeFinal.pdf";
function HomeSection() {
  return (
  <section
  id="home"
  className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 flex items-center justify-center px-4"
>
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              Gaurav Prasad
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Backend Developer",
              2000,
             
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl font-semibold text-gray-700"
          />

          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            I build scalable web applications, real-time systems, and modern backend
            architectures using Node.js, React, and cloud technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href={resume} download>
  <button className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition">
    Download Resume ⬇️
  </button>
</a>
{/* 
            <button className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200 transition">
              Contact Me
            </button> */}

            <button
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // highlight effect
      section.classList.add("ring-4", "ring-purple-400");

      setTimeout(() => {
        section.classList.remove("ring-4", "ring-purple-400");
      }, 1500);
    }
  }}
  className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200 transition"
>
  Contact Me
</button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* GLOW */}
            <div className="absolute w-[400px] sm:w-[500px] md:w-[550px] h-[400px] sm:h-[500px] md:h-[550px] bg-gray-300 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"></div>

            {/* IMAGE */}
            <img
  src={profile}
  alt="profile"
  className="relative w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px] rounded-full object-cover shadow-2xl 
  transform transition-transform duration-700 ease-out 
  group-hover:scale-125"
/>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default HomeSection;