import React from "react";

const Articles = ({ articles }) => (
  <>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  </>
);

export default Articles;
