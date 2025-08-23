"use client";

import Image from "next/image";
import { BlogIcon, GithubIcon, StackOverflowIcon } from "../Icons";
import { useEffect, useState } from "react";
import Link from "next/link";

export const AboutMe = () => {
  const [totalYears, setTotalYears] = useState<number | null>(null);
  const [remoteYears, setRemoteYears] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    setTotalYears(now.getFullYear() - 2012 - (now.getMonth() + 1 < 3 ? 1 : 0));
    setRemoteYears(now.getFullYear() - 2017 - (now.getMonth() + 1 < 9 ? 1 : 0));
  }, []);

  return (
    <div
      className="max-w-2xl p-6 bg-teal-100 rounded-xl shadow-lg text-description flex flex-col"
    >
      {/* Main content: profile + text */}
      <div className="flex flex-col lg:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Profile picture */}

        <Image
          className="hidden sm:block w-32 h-32 rounded-full border-4 border-primary-500 object-cover mb-4"
          src="https://utfs.io/a/nv7bbljpkp/QaGLtu0B49L81a4fSNuVgOj8x2HhoF0SmDXTtnAqBbkfU4Ls"
          alt="kdlcruz"
          width={128}
          height={128}
        />

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-start space-y-4 text-center md:text-left">
          <p>
            Hi, I’m Kevin Jay Dela Cruz, a full-stack developer with{" "}
            <span className="font-semibold text-title">{totalYears} years</span>{" "}
            of experience (
            <span className="font-semibold text-title">
              {remoteYears} years working remotely
            </span>
            ).
          </p>

          <p>
            I believe that{" "}
            <em className="font-semibold text-title">
              tools are used for solved problems
            </em>{" "}
            — first, we understand the challenge, then we bring every tool
            imaginable to implement the solution.
          </p>

          <p>
            With this mindset, I approach projects with curiosity and strategic
            thinking, turning complex problems into elegant (most of the time), reliable web and
            mobile applications.
          </p>

          {/* Location and phone */}
          <p className="text-sm flex flex-wrap justify-center items-center gap-1"><a
            href="/kdlcruz-cv.pdf"
            download={true}
            className="text-sm text-primary-500"
          >
            Download CV
          </a>
          | 🇵🇭 Marikina, Philippines
          </p>

          
        </div>
      </div>

      {/* Footer: icons left, contact right */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-2 sm:space-y-0">
        <div className="flex space-x-4">
          <a
            href="https://github.com/kdlcruz"
            target="_blank"
            className="button text-primary-500 hover:text-white"
          >
            <GithubIcon />
          </a>
          <a
            href="https://stackoverflow.com/users/2148468/kdlcruz"
            target="_blank"
            className="button text-primary-500 hover:text-white"
          >
            <StackOverflowIcon />
          </a>
          <Link href="/blog" className="button" prefetch>
            <BlogIcon />
          </Link>
        </div>
        <p className="text-sm flex flex-wrap justify-center items-center gap-1">
           <a
            href="mailto:me@kdlcruz.com?subject=Hi Kevin, I'd like to hire you"
            target="_blank"
            className="text-primary-500 text-sm"
          >
            Contact: me@kdlcruz.com
          </a> |
            <a
              href="tel:+639778140228"
              className="text-primary-500 hover:underline"
            >
              📞 +63 977 814 0228
            </a>
          </p>
        
      </div>
    </div>
  );
};
