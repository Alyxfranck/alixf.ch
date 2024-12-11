import WikiFeed from "app/components/WikiSummaryCard";

export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Welcome to Wikireels 
        </h1>
        <p className="mb-4">
          this Project is an approach to critising our excessive use of short form content on a daily basis.
          This continous Feed of wikipedia aritcles is a way to encourage to turn to better sources of information.
        </p>
        <div className="my-8">
          <WikiFeed/>
        </div>
      </section>
    );
  }