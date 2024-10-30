import React from "react";
import { useForm } from "@inertiajs/react";

const Form = ({ comment = {}, onSubmit, submitText }) => {
  const form = useForm({
    commenter: comment.commenter || "",
    body: comment.body || "",
  });
  const { data, setData, processing, errors, reset } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={data.commenter}
          onChange={(e) => setData("commenter", e.target.value)}
        />
        {errors.commenter && <div>{errors.commenter}</div>}
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
