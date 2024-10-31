import React from "react";
import { Link } from "@inertiajs/react";

import { webArticlesPath } from "web/routes";

import Form from "./_Form";

const New = ({ article }) => {
  const handleSubmit = (form) => {
    form.post(webArticlesPath());
  };

  return (
    <>
      <h1>New Article</h1>
      <Form
        article={article}
        onSubmit={handleSubmit}
        submitText="Create Article"
      />
      <Link href={webArticlesPath()}>List Articles</Link>
    </>
  );
};

export default New;
