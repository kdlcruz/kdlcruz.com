import Link from "next/link";
import {
  CustomFlowbiteTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { GithubIcon, StackOverflowIcon } from "../Icons";

const pages = ["Home", "Work History", "Projects"];

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "bg-darkgray-700 px-2 py-2.5 sm:px-4 shadow-md z-10",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "text-tan-500 text-base font-medium",
      off: "text-tan-500 text-base font-medium",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm fill-tan-500 md:hidden",
    icon: "h-6 w-6 shrink-0 fill-tan-500",
  },
};

export default function NavBar() {
  return (
    <Navbar fluid rounded theme={customTheme}>
      <NavbarBrand
        as={Link}
        href="mailto:me@kdlcruz.com?subject=Hi Kevin, I'd like to hire you"
        target="_blank"
      >
        <span className="text-primary-500 text-sm">
          Contact: me@kdlcruz.com
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {pages.map((page) => (
          <NavbarLink
            key={`nav-${page}`}
            as={Link}
            href={page.toLowerCase().replace(" ", "-").replace("home", "/")}
          >
            {page}
          </NavbarLink>
        ))}
        <NavbarLink>
          <div className="flex space-x-4">
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
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
