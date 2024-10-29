import React from "react";

const Article = ({ article }) => (
  <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
  </>
);

export default Article;
