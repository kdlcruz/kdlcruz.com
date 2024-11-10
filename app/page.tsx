import { BgParticles } from "@/components/BgParticles";
import { ReactTyped } from "@/components/ReactTyped";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex-grow pt-16"
      style={{
        background:
          "url(https://utfs.io/a/nv7bbljpkp/QaGLtu0B49L8zbez89d9OmaHcFWAfhQq0BZTG3g6dEsvtbnR) no-repeat top  center fixed rgba(76, 175, 80, 0.3)",
        backgroundSize: "cover",
      }}
    >
      <BgParticles />

      <div className="absolute top-1/2 left-1/2 w-screen text-center z-10 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center">
          <Image
            className="w-30 h-30 rounded-full"
            src="https://utfs.io/a/nv7bbljpkp/QaGLtu0B49L81a4fSNuVgOj8x2HhoF0SmDXTtnAqBbkfU4Ls"
            alt="kdlcruz"
            width={120}
            height={120}
          />
        </div>
        <h1 className="text-primary-500 text-4xl">
          <ReactTyped
            strings={["Kevin Jay Dela Cruz"]}
            typeSpeed={40}
          />
        </h1>
        <p className="text-primary-500 text-xl">
          <ReactTyped
            strings={[
              "Tools are used for solved problems!",
              "Some of my tools",
              "Server Side: NodeJS, NextJS, PHP, HapiJS, Laravel...",
              "Client Side: Typescript, ReactJS, React Native, ReactQuery...",
              'Check "My tools" for complete lists.',
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </p>
        <h5 className="uppercase text-tan-500">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "React Native Developer",
              "Fullstack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h5>
      </div>
    </div>
  );
}
