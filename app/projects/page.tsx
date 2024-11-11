import React from "react";
import projectsJson from "@/data/projects.json";
import { linkTypes, Project } from "@/data/types";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { ToolChip } from "@/components/ToolChip";
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

const projects: Project[] = projectsJson as Project[];

const customTheme: CustomFlowbiteTheme["card"] = {
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

const linkIcon = {
  [linkTypes.github]: <GithubIcon />,
  [linkTypes.npm]: <NpmIcon />,
  [linkTypes.android]: <AndroidIcon />,
  [linkTypes.ios]: <AppleIcon />,
  [linkTypes.web]: <WebIcon />,
};

export default function ProjectsPage() {
  return (
    <div className="bg-outer-space-900 text-center text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 w-full h-full">
        {projects.map((project) => (
          <div key={project.name} className="col-span-1">
            <Card
              className="max-w-md"
              imgAlt={project.description}
              imgSrc={project.cover}
              theme={customTheme}
            >
              <h5 className="text-2xl font-bold tracking-tight text-primary-500">
                {project.name}
              </h5>
              <p className="font-normal text-tan-500">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.techs.map((tech) => (
                  <ToolChip key={`${project.name}-${tech.name}`} tech={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 border-t-[5px] border-cardBorder pt-4">
                {project.links.map((link) => (
                  <a
                    key={project.name + link.linkType}
                    href={link.link}
                    target="_blank"
                    className="button text-tan-500 hover:text-white"
                  >
                    {linkIcon[link.linkType]}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
