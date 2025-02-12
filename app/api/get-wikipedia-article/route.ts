import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import sanitizeHtml from "sanitize-html";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json({ error: "Title parameter is required" }, { status: 400 });
  }

  try {
    console.log(`Fetching Wikipedia article for: ${title}`);

    // Fetch Wikipedia article in raw HTML format
    const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${title.replace(/ /g, "_")}`);
    
    if (!wikiResponse.ok) {
      console.warn(`Wikipedia API error ${wikiResponse.status} for "${title}"`);
      return NextResponse.json({ error: `Wikipedia API error: ${wikiResponse.status}` }, { status: 500 });
    }

    const htmlContent = await wikiResponse.text();

    if (!htmlContent.trim()) {
      console.warn(`Empty Wikipedia response for "${title}"`);
      return NextResponse.json({ error: "Wikipedia returned an empty response" }, { status: 500 });
    }

    // Parse Wikipedia HTML using JSDOM
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    if (!document.body) {
      console.error(`Wikipedia response does not contain a valid body for "${title}"`);
      return NextResponse.json({ error: "Wikipedia returned an unexpected response format" }, { status: 500 });
    }

    // **Dynamically remove all unnecessary elements (scripts, styles, metadata, tables, etc.)**
    document.querySelectorAll("script, style, noscript, meta, iframe, form, button, header, footer, nav, aside, svg").forEach(el => el.remove());

    // **Remove all attributes (class, id, style) from elements**
    document.querySelectorAll("*").forEach(el => {
      for (const attr of Array.from(el.attributes)) {
        el.removeAttribute(attr.name);
      }
    });

    // **Extract clean inner HTML after dynamic cleanup**
    let cleanedHtml = document.body.innerHTML;

    // **Sanitize HTML to ensure no hidden scripts/styles remain**
    cleanedHtml = sanitizeHtml(cleanedHtml, {
        allowedTags: [
          "p", "h1", "h2", "h3", "h4", "h5", "h6",
          "a", "strong", "em", "ul", "ol", "li", "blockquote", "code", "pre", "img",
          
        ],
        allowedAttributes: {
          "a": ["href", "title", "target", "rel"], // Allow external link attributes
          "img": ["src", "alt", "width", "height"], // Ensure images keep their dimensions
        },
        disallowedTagsMode: "discard", // Prevent breaking content
      });
      

    // **Convert sanitized HTML to Markdown dynamically**
    const turndownService = new TurndownService({
      headingStyle: "atx",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
    });

    // **Ensure all remaining inline elements are removed**
    turndownService.addRule("removeUnwanted", {
      filter: ["sup", "span", "abbr", "cite"],
      replacement: () => "",
    });

    const markdownContent = turndownService.turndown(cleanedHtml);

    console.log(`Successfully converted "${title}" to Markdown`);

    return NextResponse.json({ content: markdownContent });
  } catch (error) {
    console.error(`Unexpected server error for "${title}":`, error);
    return NextResponse.json({ error: "Unexpected server error while fetching Wikipedia content", details: error.message }, { status: 500 });
  }
}
