"use client";

import { useState } from "react";
import Link from "next/link";
import { GithubIcon, StackOverflowIcon } from "../Icons";

const pages = ["Home", "Work History", "Projects"];

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 fill-tan-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkgray-700 text-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="mailto:me@kdlcruz.com?subject=Hi Kevin, I'd like to hire you"
            target="_blank"
            className="hidden md:block text-sm text-primary-500 hover:underline keychainify-checked"
          >
            Contact: me@kdlcruz.com
          </a>

          <div className="flex md:hidden">
            <a
              href="mailto:me@kdlcruz.com?subject=Hi Kevin, I'd like to hire you"
              target="_blank"
              className="text-sm text-primary-500 hover:underline keychainify-checked"
            >
              Contact: me@kdlcruz.com
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            {pages.map((page) => (
              <Link
                prefetch
                key={`web-${page}`}
                href={page.toLowerCase().replace(" ", "-").replace("home", "/")}
                className="text-tan-500 hover:text-white"
              >
                {" "}
                {page}
              </Link>
            ))}
            <a
              href="https://github.com/kdlcruz"
              target="_blank"
              className="button  hover:text-white"
            >
              <GithubIcon />
            </a>
            <a
              href="https://stackoverflow.com/users/2148468/kdlcruz"
              target="_blank"
              className="button  hover:text-white"
            >
              <StackOverflowIcon />
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-white hover:bg-gray-700"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <Link
                prefetch
                key={`mobile-${page}`}
                href={page.toLowerCase().replace(" ", "-").replace("home", "/")}
                className="block px-3 py-2 rounded-md text-base font-medium text-tan-500 hover:text-white hover:bg-gray-700"
              >
                {page}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <a
                href="https://github.com/kdlcruz"
                target="_blank"
                className="button hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href="https://stackoverflow.com/users/2148468/kdlcruz"
                target="_blank"
                className="button hover:text-white"
              >
                <StackOverflowIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
