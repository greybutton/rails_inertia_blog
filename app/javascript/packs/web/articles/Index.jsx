import React from "react";
import { Link } from "@inertiajs/react";

const Articles = ({ articles }) => (
  <>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}><Link href={article.web_article_path}>{article.title}</Link></li>
      ))}
    </ul>
  </>
);

export default Articles;
