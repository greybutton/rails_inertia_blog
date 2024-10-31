import React from "react";
import { Link } from "@inertiajs/react";

import { webArticlePath, newWebArticlePath } from "web/routes";

const Articles = ({ articles }) => (
  <>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={webArticlePath(article)}>{article.title}</Link>
        </li>
      ))}
    </ul>
    <Link href={newWebArticlePath()}>New Article</Link>
  </>
);

export default Articles;
