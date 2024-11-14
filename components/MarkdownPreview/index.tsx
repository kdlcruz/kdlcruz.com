import { remark } from 'remark';
import html from 'remark-html';

async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

type Props = {
  markdown: string;
};

export default async function MarkdownPreview({ markdown }: Props) {
  const content = await renderMarkdown(markdown);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="markdown-preview"
    />
  );
}
