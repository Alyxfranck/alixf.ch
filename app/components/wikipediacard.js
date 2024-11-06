import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WikipediaCard = () => {
  const [article, setArticle] = useState(null);
  
  const fetchRandomArticle = async () => {
    try {
      const response = await axios.get('/api/randomArticle');
      setArticle(response.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    fetchRandomArticle();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      {article && (
        <>
          <img
            src={article.thumbnail ? article.thumbnail.source : 'https://via.placeholder.com/150'}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold">{article.title}</h2>
          <p className="text-gray-700 mt-2">{article.extract}</p>
          <button
            onClick={fetchRandomArticle}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default WikipediaCard;
