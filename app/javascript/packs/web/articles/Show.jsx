import React from "react";
import { Link } from "@inertiajs/react";

import { editWebArticlePath, webArticlePath, webArticleCommentsPath } from "web/routes";

import CommentForm from "./comments/_Form";

const Article = ({ article }) => {
  const handleDestroy = (e) => {
    if (!confirm("Are you sure?")) {
      e.preventDefault();
    }
  };

  const handleCommentSubmit = (form, options) => {
    form.post(webArticleCommentsPath(article), options);
  };

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <ul>
        <li>
          <Link href={editWebArticlePath(article)}>Edit Article</Link>
        </li>
        <li>
          <Link
            href={webArticlePath(article)}
            onClick={handleDestroy}
            method="delete"
            as="button"
            type="button"
          >
            Delete Article
          </Link>
        </li>
      </ul>

      <h2>Comments</h2>
      <ul>
        {article.comments.map((comment) => (
          <li key={comment.id}>
            {comment.commenter}: {comment.body}
          </li>
        ))}
      </ul>

      <h2>Add a comment:</h2>
      <CommentForm onSubmit={handleCommentSubmit} submitText="Add Comment" />
    </>
  );
};

export default Article;
