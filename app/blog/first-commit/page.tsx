import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kdlcruz Journey to the First Commit",
  description: `When I started my career at Tresmax.PH, my world changed. Fresh out
            of college, I thought I had a pretty good grasp of coding. But when
            it came to collaborating, I had a hilariously naive idea:`,
};

export default function BlogFirstCommit() {
  return (
    <div className="bg-outer-space-900 text-white">
      <div className="max-w-3xl mx-auto py-10 px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-primary-500 mb-4">
            Journey to the First Commit
          </h1>
          <p className="text-lg text-primary-300">Published on Nov 12, 2024</p>
        </div>

        <div className="text-tan-500 leading-relaxed mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-500">
            The Early Days of Collaboration (Or Lack Thereof)
          </h2>
          <p>
            When I started my career at Tresmax.PH, my world changed. Fresh out
            of college, I thought I had a pretty good grasp of coding. But when
            it came to collaborating, I had a hilariously naive idea:
          </p>
          <p className="mb-4">
            Copy-paste the codebase between computers or set up an FTP server so
            everyone could instantly see file updates.
          </p>
          <p>
            In hindsight, this was like trying to build a skyscraper with LEGO
            bricks. The concept of Version Control was completely foreign to me.
            But once I understood how it worked, it blew my mind. No more messy
            file sharing or overwriting someone else’s work. However, we had our
            own set of rules to minimize conflicts:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>&quot;Your code should go under this comment.&quot;</li>
            <li>&quot;Let us know when you’re pushing!&quot;</li>
          </ul>
          <p>It wasn’t perfect, but it got us through the chaos.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-500">
            My First Tech Stack: The Basics of Web Development
          </h2>
          <p>
            I started as a Web Developer, armed with PHP, CSS, and JavaScript.
            Looking back, those early days shaped how I approach projects even
            today. Here are the key lessons that stuck with me:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-300">
            1. Planning Is Everything
          </h3>
          <p>
            I wasn’t just a code monkey; I was part of the planning phase. This
            was eye-opening. Building a website wasn’t just about cranking out
            code. It required:
          </p>
          <ul className="list-decimal pl-6 mt-4 mb-4">
            <li>Understanding user needs</li>
            <li>Coordinating with designers and stakeholders</li>
            <li>Considering scalability and future updates</li>
          </ul>
          <p>
            This experience taught me that a successful project is about more
            than just good code—it’s about teamwork and foresight.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-300">
            2. Early Lessons in CI/CD
          </h3>
          <p>
            While we didn’t have modern Continuous Integration/Continuous
            Deployment pipelines, we managed hundreds of websites with a
            homegrown system.
          </p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>We used an in-house framework to generate code.</li>
            <li>Bash scripts handled deployments to different environments.</li>
          </ul>
          <p>
            It wasn’t seamless or automated like today’s “push-to-main”
            workflows, but it gave me a taste of what automation could achieve.
            Deployments became less tedious, and we avoided human error (most of
            the time).
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-300">
            3. The Beauty of Backend Development
          </h3>
          <p>
            I’ve always known I wasn’t destined to be a designer. Give me a
            mockup, and I’ll bring it to life—but backend development? That’s
            where I thrive.
          </p>
          <p>The backend is like a puzzle:</p>
          <ul className="list-none pl-6 mt-4 mb-4">
            <li>User inputs this ➡️ Return that.</li>
            <li>Keep it efficient and secure.</li>
          </ul>
          <p>
            It’s logical, straightforward, and rewarding. There’s something
            satisfying about crafting an API that just works.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-500">
            The Magic of Version Control
          </h2>
          <p>
            Today, tools like Git are second nature. But back then, even using
            Mercurial felt revolutionary. Collaboration got easier, conflicts
            became manageable, and we could finally track changes and roll back
            mistakes. It was like turning on the lights in a dark room.
          </p>
          <p>
            Would I ever start a new project with Mercurial today? Probably
            not—Git reigns supreme. But those early experiences taught me to
            appreciate how far we’ve come.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-500">
            Final Thoughts
          </h2>
          <p>
            My journey from basic file-sharing hacks to mastering version
            control is a reminder of how quickly the tech world evolves. Every
            challenge, every awkward workaround, has shaped the developer I am
            today.
          </p>
        </div>
      </div>
    </div>
  );
}
