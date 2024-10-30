import React from "react";
import { Link } from "@inertiajs/react";

const Articles = ({ articles, new_web_article_path }) => (
  <>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}><Link href={article.web_article_path}>{article.title}</Link></li>
      ))}
    </ul>
    <Link href={new_web_article_path}>New Article</Link>
  </>
);

export default Articles;
