import { ToolChip } from "@/components/ToolChip";
import { WorkHistory } from "@/data/types";
import workHistoryJson from "@/data/work-history.json";
import Image from "next/image";
import React from "react";
import {
  CustomFlowbiteTheme,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

const workHistory: WorkHistory[] = workHistoryJson as WorkHistory[];

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

export default function WorkHistoryPage() {
  return (
    <div className="bg-outer-space-900 pt-16">
      <div className="flex flex-col space-y-4 p-12">
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
                  <p className="text-2xl text-primary-500">
                    {detail.companyName.charAt(0).toUpperCase()}
                  </p>
                )}
              </div>
              <TimelineContent>
                <TimelineTitle theme={customTheme?.item?.content?.title}>
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
                    <ToolChip
                      key={`${detail.companyName}-${tech.name}`}
                      tech={tech}
                    />
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
