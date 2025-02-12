import { CustomMDX } from "app/components/mdx";

async function getWikipediaArticle(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const decodedSlug = decodeURIComponent(slug);

  const response = await fetch(`${baseUrl}/api/get-wikipedia-article?title=${decodedSlug}`);

  if (!response.ok) {
    return `## Error Loading Article\n\nAn unexpected error occurred while fetching **${decodedSlug.replace(/_/g, " ")}**. Please try again later.`;
  }

  let { content } = await response.json();

  // **Step 1: Remove Wikipedia’s raw CSS and unwanted styles**
  content = content.replace(/\.mw-parser-output[^{]*\{[^}]+\}/g, ""); // Remove CSS rules
  content = content.replace(/@media[^{]*\{[^}]+\}/g, ""); // Remove media queries
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/g, ""); // Remove inline <style> blocks
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/g, ""); // Remove inline scripts

  // **Step 2: Fix broken internal Wikipedia links**
  content = content.replace(/href="\/wiki\/([^"]+)"/g, (_, link) => {
    const formattedLink = link.replace(/\s/g, "_"); // Convert spaces to underscores
    return `href="./${formattedLink}"`; // Convert to relative Markdown link
  });
  // **Step 6: Fix problem characters in DOIs and citations**
  content = content.replace(/<([^ >]+)>/g, "`<$1>`"); // Wrap `<DOI>` in backticks to prevent MDX breaking

  return content; // Return cleaned Markdown
}

export default async function WikiPage({ params }: { params: { slug: string } }) {
  const markdownContent = await getWikipediaArticle(params.slug);
  const pageTitle = decodeURIComponent(params.slug).replace(/_/g, " ");

  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {pageTitle}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {new Date().toLocaleDateString()} {/* Placeholder date */}
        </p>
      </div>
      <article className="prose max-w-none">
        <CustomMDX source={markdownContent} />
      </article>
    </section>
  );
}
