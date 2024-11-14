import { fetchBlog } from "@/utils/fetchBlog";
import { Button, Card } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";
import { UTApi } from "uploadthing/server"

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

type CardData = {
  title: string
  description: string
  link: string
}

export default async function BlogPage() {
  const utapi = new UTApi()
  const files = await utapi.listFiles()
  const cardData: CardData[] = await Promise.all(
    files.files.map(async (file) => {
      const markdownContent = await fetchBlog(file.key)
      const content = markdownContent.replace(/#[\s\S]*?##/, ''); // Clean the content
  
      return {
        title: file.name.replace('.md', ''),
        description: truncateString(content, 250), // Truncate the cleaned content
        link: `/blog/${file.key}`,
      }
    })
  )

  return (
    <div className="bg-outer-space-900 text-center text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4 w-full h-full place-items-center">
        {cardData.map((card) => (
          <Card key={card.title} className="max-w-sm bg-darkgray-700">
            <h5 className="text-2xl font-bold tracking-tight text-primary-500">
              {card.title}
            </h5>
            <p className="font-normal text-tan-500">{card.description}</p>
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
