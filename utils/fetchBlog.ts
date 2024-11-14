import { unstable_cache } from "next/cache";

export const fetchBlog =  unstable_cache(async (id: string) => {
  const url = `https://utfs.io/a/ghmdstw1ud/${id}`;

  const res = await fetch(url);
  const markdownContent = await res.text();

  return markdownContent
})