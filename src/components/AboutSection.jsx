import React from "react";
import { motion } from "framer-motion";
import { Code, CreditCard, Cpu, Trophy } from "lucide-react";

function AboutSection() {
  const features = [
    {
      icon: <Code size={28} />,
      title: "Versatile Enterprise",
      desc: "Full-stack proficiency with React, Node.js and databases like MongoDB.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "E-commerce and Payments",
      desc: "Skilled in building e-commerce platforms with secure payment integrations like Razorpay.",
    },
    {
      icon: <Cpu size={28} />,
      title: "Modern Solutions",
      desc: "Focused on cutting-edge solutions with real-world scalable implementations.",
    },
    {
      icon: <Trophy size={28} />,
  title: "Authentication & Security",
  desc: "Implemented JWT, OAuth login, OTP verification, and secure password handling using bcrypt.",
}  
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        >
          About Me
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          I'm a Full Stack Developer who builds fast, scalable web applications,
          specializing in the MERN Stack.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition duration-300 group"
            >
              {/* ICON */}
              <div className="text-gray-700 group-hover:text-black transition">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default AboutSection;