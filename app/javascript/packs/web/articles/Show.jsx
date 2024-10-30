import React from "react";
import { Link } from "@inertiajs/react";

const Article = ({ article, edit_web_article_path }) => (
  <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <ul>
      <li>
        <Link href={edit_web_article_path}>Edit Article</Link>
      </li>
    </ul>
  </>
);

export default Article;
