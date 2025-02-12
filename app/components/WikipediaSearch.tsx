"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface WikipediaSearchResult {
  title: string;
  snippet: string;
}

const WikipediaSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WikipediaSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchWikipedia = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/search-wikipedia?query=${query}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4rounded-xl shadow-md w-96">
      <input
        type="text"
        className="w-full p-2 border rounded-md"
        placeholder="Search Wikipedia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-full text-white mt-3 py-2 rounded-md "
        onClick={searchWikipedia}   
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
      {results.length > 0 && (
        <div className="mt-4 p-3rounded-lg shadow">
          {results.map((result, index) => (
            <div key={index} className="mb-3">
              <h3
                className="text-lg font-bold cursor-pointer text-blue-500"
                onClick={() => router.push(`/wiki/${encodeURIComponent(result.title.replace(/ /g, "_"))}`)}
              >
                {result.title}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WikipediaSearch;
