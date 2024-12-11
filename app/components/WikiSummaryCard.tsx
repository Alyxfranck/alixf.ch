"use client";

import React, { useState, useEffect } from "react";

interface WikiSummary {
  title: string;
  thumbnail?: {
    source: string;
  };
  extract: string;
  content_urls: {
    desktop: {
      page: string;
    };
  };
}

const SkeletonCard: React.FC = () => (
  <div className="wiki-summary-card skeleton">
    <div className="skeleton-thumbnail" />
    <div className="skeleton-title" />
    <div className="skeleton-extract" />
  </div>
);

const WikiFeed: React.FC = () => {
  const [articles, setArticles] = useState<WikiSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const fetchArticles = async (page: number) => {
    setLoading(true);
    try {
      // Fetch multiple random articles or paginated content
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/random/summary?page=${page}`
      );
      const data = await response.json();
      setArticles((prevArticles) => [...prevArticles, data]); // Append new articles
    } catch (err) {
      setError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(page); // Fetch initial articles
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      setPage((prevPage) => prevPage + 1); // Trigger loading new articles
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="wiki-feed">
      {articles.map((article, index) => (
        <div key={index} className="wiki-summary-card">
          {article.thumbnail && (
            <img
              src={article.thumbnail.source}
              alt={article.title}
              className="thumbnail"
            />
          )}
          <h2>{article.title}</h2>
          
          {expanded[index] ? (
            <>
              <p>{article.extract}</p>
              <a
                href={article.content_urls.desktop.page}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <button onClick={() => toggleExpand(index)}>Less</button>
            </>
          ) : (
            <p>{article.extract.substring(0, 95)}... <button onClick={() => toggleExpand(index)}>More</button></p>
          )}
        </div>
      ))}
      {loading &&
        Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
};

export default WikiFeed;
