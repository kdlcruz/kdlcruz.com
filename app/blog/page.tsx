import { Button, Card } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";

const cardData = [
  {
    title: "Journey to the First Commit",
    description: `When I started my career at Tresmax.PH, my world changed. Fresh out of college, I thought I had a pretty good grasp of coding. But when it came to collaborating, I had a hilariously naive idea:

Copy-paste the codebase between computers or set up an FTP server so everyone could instantly see file updates.`,
    link: "/blog/first-commit",
  },
  {
    title:
      "Juggling Multiple Projects",
    description: `About a year into my first job, I dove into the world of side projects. My first gig? A modest $4 an hour. It wasn’t about the money; it was about the learning. Each task was a stepping stone toward something bigger—a brighter opportunity in the future. At the time, burnout wasn’t on my radar. I was fueled by the thrill of growth and the belief that every ounce of effort would pay off down the line.`,
    link: "/blog/juggling-projects",
  },
];

const truncateString = (str: string, n: number) => {
  if (str.length > n) {
    return str.slice(0, n) + '...';
  }
  return str;
}

export const metadata: Metadata = {
  title: "kdlcruz blogs",
  description: "Personal experience, ideas and some random thigns",
};

export default function BlogPage() {
  return (
    <div className="bg-outer-space-900 text-center text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4 w-full h-full place-items-center">
        {cardData.map((card) => (
          <Card key={card.title} className="max-w-sm bg-darkgray-700">
            <h5 className="text-2xl font-bold tracking-tight text-primary-500">
              {card.title}
            </h5>
            <p className="font-normal text-tan-500">{truncateString(card.description, 250)}</p>
            <Button as={Link} href={card.link}>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
