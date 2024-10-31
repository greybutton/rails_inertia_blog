import React from "react";

import { webArticlePath } from "web/routes";

import Form from "./_Form";

const Edit = ({ article }) => {
  const handleSubmit = (form) => {
    form.put(webArticlePath(article));
  };

  return (
    <>
      <h1>Edit Article</h1>
      <Form
        article={article}
        onSubmit={handleSubmit}
        submitText="Update Article"
      />
    </>
  );
};

export default Edit;
