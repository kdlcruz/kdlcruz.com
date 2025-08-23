"use client";

import Image from "next/image";
import Link from "next/link";
import workHistoryJson from "@/data/work-history.json";
import { WorkHistory } from "@/data/types";
import { CustomFlowbiteTheme, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

const workHistory: WorkHistory[] = workHistoryJson.splice(0, 3) as WorkHistory[];

const customTheme: CustomFlowbiteTheme["timeline"] = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700",
    },
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6",
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: "",
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-300",
      },
      time: {
        base: "block mb-2 text-sm font-normal leading-none text-tan-500",
      },
      title: {
        base: "flex items-center mb-1 text-3xl text-primary-500 font-bold",
      },
    },
  },
};

export const Experience = () => {
  return (
    <div className="max-h-[75vh] overflow-auto max-w-2xl p-6 bg-teal-900 rounded-xl shadow-lg text-description flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Latest</h2>
        <Link
          href="/work-history"
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
          prefetch
        >
          View All
        </Link>
      </div>

      <Timeline>
        {workHistory?.map((detail) => (
          <TimelineItem key={detail.companyName}>
            <TimelinePoint />
            <div className="absolute bg-blue-100 rounded-full -start-4  justify-center items-center w-8 h-8 flex">
              {detail.cover ? (
                <Image
                  className="w-8 h-8 rounded-full"
                  alt={detail.companyName}
                  src={detail.cover || ""}
                  width={80}
                  height={80}
                />
              ) : (
                <p className="text-2xl text-white">
                  {detail.companyName.charAt(0).toUpperCase()}
                </p>
              )}
            </div>
            <TimelineContent>
              <TimelineTitle theme={customTheme?.item?.content?.title} className="text-white">
                {detail.companyName} - {detail.position}
              </TimelineTitle>

              <TimelineTime theme={customTheme?.item?.content?.time}>
                {detail.employmentDate}
              </TimelineTime>
              <TimelineBody theme={customTheme?.item?.content?.body}>
                {detail.description}
              </TimelineBody>
              <div className="flex flex-wrap gap-4">
                {detail.techs.map((tech) => (
                  <span
                    key={`${detail.companyName}-${tech.name}`}
                    className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full"
                  >
                    {tech.name}
                  </span>
                ))}
                
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
