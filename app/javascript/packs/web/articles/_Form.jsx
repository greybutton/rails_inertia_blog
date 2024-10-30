import React from "react";
import { useForm } from "@inertiajs/react";

const Form = ({ article, onSubmit, submitText }) => {
  const form = useForm({
    title: article.title || "",
    body: article.body || "",
  });
  const { data, setData, processing, errors } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData("title", e.target.value)}
        />
        {errors.title && <div>{errors.title}</div>}
      </div>
      <div>
        <input
          type="textarea"
          value={data.body}
          onChange={(e) => setData("body", e.target.value)}
        />
        {errors.body && <div>{errors.body}</div>}
      </div>
      <button type="submit" disabled={processing}>
        {submitText}
      </button>
    </form>
  );
};

export default Form;
