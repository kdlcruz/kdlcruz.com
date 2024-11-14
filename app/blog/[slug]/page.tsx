import MarkdownPreview from "@/components/MarkdownPreview";
import { fetchBlog } from "@/utils/fetchBlog";
import { Metadata } from "next";



export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const slug = (await params).slug
  const markdownContent = await fetchBlog(slug)

  const title = markdownContent.match(/^#\s+(.*)/)
  const description = markdownContent.match(/##\s+(.*)/)
 
  return {
    title: title?.[1] ?? 'kdlcruz blog',
    description: description?.[1] ?? 'kdlcruz blog description'
  }
}

export default async function BlogContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug
  const markdownContent = await fetchBlog(slug)

  return (
    <div className="bg-outer-space-900 text-white">
      <div className="max-w-3xl mx-auto py-10 px-5">
        <MarkdownPreview markdown={markdownContent} />
      </div>
    </div>
  );
}
