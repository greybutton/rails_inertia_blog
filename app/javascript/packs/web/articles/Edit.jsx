import React from "react";

import Form from "./_Form";

const Edit = ({ article, web_article_path }) => {
  const handleSubmit = (form) => {
    form.put(web_article_path);
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
