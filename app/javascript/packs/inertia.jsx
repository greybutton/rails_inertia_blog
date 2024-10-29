import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";

const app = () =>
  createInertiaApp({
    resolve: (name) => require(`./web/${name}`),
    setup({ el, App, props }) {
      const container = document.getElementById(el.id);
      const root = createRoot(container);
      root.render(<App {...props} />);
    },
  });

document.addEventListener("DOMContentLoaded", () => {
  app();
});
