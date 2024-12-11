import WikiFeed from "app/components/WikiSummaryCard";

export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Wikireels 
        </h1>
        <p className="mb-4">
          This is a simple wiki feed that fetches articles from Wikipedia. Scroll down to load endless articles.
        </p>
        <div className="my-8">
          <WikiFeed/>
        </div>
      </section>
    );
  }