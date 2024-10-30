import React from "react";
import { Link } from "@inertiajs/react";

import Form from "./_Form";

const New = ({ article, web_articles_path }) => {
  const handleSubmit = (form) => {
    form.post(web_articles_path);
  };

  return (
    <>
      <h1>New Article</h1>
      <Form
        article={article}
        onSubmit={handleSubmit}
        submitText="Create Article"
      />
      <Link href={web_articles_path}>List Articles</Link>
    </>
  );
};

export default New;
