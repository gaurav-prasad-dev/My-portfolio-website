import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
   SiMysql,
 
  SiRedis,
} from "react-icons/si";

function TechTime() {
  const techs = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
     { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section
      id="tech"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full text-center">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Technologies I Use
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mt-16">

          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center"
            >
              {/* CARD */}
              <div className="
                w-16 h-16 md:w-20 md:h-20
                bg-white rounded-2xl
                flex items-center justify-center
                shadow-[8px_8px_15px_#d1d5db,-8px_-8px_15px_#ffffff]
                group-hover:shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff]
                transition duration-300
              ">
                <span className="text-2xl md:text-3xl text-gray-700 group-hover:scale-110 transition">
                  {tech.icon}
                </span>
              </div>

              {/* NAME */}
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition">
                {tech.name}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TechTime;