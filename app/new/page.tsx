"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AboutMe } from "@/components/panels/AboutMe";
import { Projects } from "@/components/panels/Projects";

const sections = [
  {
    title: "About Me",
    color: "bg-cyan-700",
    component: <AboutMe />,
  },
  {
    title: "Projects",
    color: "bg-indigo-700",
    component: <Projects />,
  },
  {
    title: "Experience",
    color: "bg-emerald-700",
    component: (
      <div className="text-gray-100 space-y-2 text-left">
        <p>
          <strong>Software Engineer</strong> @ Tech Corp (2020 - Present)
        </p>
        <p>
          <strong>Frontend Developer</strong> @ Startup Inc (2018 - 2020)
        </p>
      </div>
    ),
  },
];

export default function PortfolioLayout() {
  const [active, setActive] = useState("About Me");

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-outer-space-900">
      {sections.map(({ title, component, color }) => {
        const isActive = active === title;
        return (
          <motion.div
            key={title}
            onClick={() => setActive(title)}
            animate={{
              flex: isActive ? 5 : 0.7, // bigger gap between active and inactive
              height: "100%", // keep full height
            }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`flex cursor-pointer m-1 rounded-2xl ${color} ${isActive ? "shadow-xl" : "opacity-70"}`}
          >
            <motion.div
              className="flex flex-col items-center justify-center w-full h-full p-4 text-center overflow-y-auto"
              animate={{
                opacity: isActive ? 1 : 0.6,
                scale: isActive ? 1 : 0.9, // make inactive slightly smaller
              }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={`font-bold mb-4 text-white ${
                  isActive ? "text-2xl" : "text-xl"
                }`}
              >
                {title}
              </h2>
              {isActive && component}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
