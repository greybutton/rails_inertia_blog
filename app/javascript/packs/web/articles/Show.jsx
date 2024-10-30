import React from "react";
import { Link } from "@inertiajs/react";

const Article = ({ article, edit_web_article_path, web_article_path }) => {
  const handleDestroy = (e) => {
    if (!confirm("Are you sure?")) {
      e.preventDefault();
    }
  };

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <ul>
        <li>
          <Link href={edit_web_article_path}>Edit Article</Link>
        </li>
        <li>
          <Link
            href={web_article_path}
            onClick={handleDestroy}
            method="delete"
            as="button"
            type="button"
          >
            Delete Article
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Article;
