import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1photo.png";


function ProjectsSection() {
  const projects = [
    {
      title: "Study Mantra - Edtech Platform",
      desc: "Developed a full-stack MERN platform for students to buy courses and instructors to sell courses. Implemented authentication, Razorpay payments, Cloudinary media storage, and a rating system.",
      image: project1,
      tech: ["MERN Stack", "Razorpay API", "Cloudinary", "JWT Auth"],
      liveUrl: "https://study-time-final-frontend-app.vercel.app/",
      githubUrl: "https://github.com/gaurav-prasad-dev/Study-time-final",
    },

    // You can enable this later
    // {
    //   title: "Event & Movie Booking Platform",
    //   desc: "Built a real-time booking system with seat selection, Redis seat locking, QR-based tickets, and live updates using Socket.io.",
    //   image: project2,
    //   tech: ["Node.js", "Redis", "Socket.io", "JWT", "QR Code"],
    //   liveUrl: "",
    //   githubUrl: "",
    // },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        >
          My Projects
        </motion.h1>

        <p className="text-center text-gray-600 mt-4">
          Here are a few of my best projects that showcase my skills in action
        </p>

        {/* PROJECTS */}
        <div className="mt-16 grid gap-12">
          {/* // change the y-16 //mt-16 space-y-10 */}

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 space-y-4">

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {project.title}
                </h2>

                <p className="text-gray-600">
                  {project.desc}
                </p>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">

                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;