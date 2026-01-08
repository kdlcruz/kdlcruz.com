import React from "react";
import projectsJson from "@/data/projects.json";
import { Project } from "@/data/types";
import { Card } from "flowbite-react";
import {
  AndroidIcon,
  AppleIcon,
  GithubIcon,
  NpmIcon,
  WebIcon,
} from "@/components/Icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kdlcruz projects",
  description: "Tools are used for solved problems!",
};

const projects: Project[] = projectsJson;

const customTheme = {
  root: {
    base: "flex rounded-lg border border-[5px] border-cardBorder bg-outer-space-900 shadow-md",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg h-60 object-cover",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-teal-900 text-center text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 w-full h-full">
        {projects.map((project) => (
          <div key={project.title} className="col-span-1">
            <Card
              className="max-w-md"
              imgAlt={project.description}
              imgSrc={project.image}
              theme={customTheme}
            >
              <h5 className="text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.type.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-amber-200 text-amber-800 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-normal text-tan-500">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {/* Frontend pills */}
                <div className="mt-3">
                  <strong className="text-xs block mb-1">Frontend:</strong>
                  <div className="flex flex-wrap gap-2">
                    {project.frontend.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend pills */}
                <div className="mt-3">
                  <strong className="text-xs block mb-1">Backend:</strong>
                  <div className="flex flex-wrap gap-2">
                    {project.backend.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 border-t-[5px] border-cardBorder pt-4">
                {project.links.ios && (
                  <a
                    href={project.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AppleIcon />
                  </a>
                )}
                {project.links.android && (
                  <a
                    href={project.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AndroidIcon />
                  </a>
                )}
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebIcon />
                  </a>
                )}
                {project.links.npm && (
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NpmIcon />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
