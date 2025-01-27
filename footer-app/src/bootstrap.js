import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

const mount = () => {
  const container = document.getElementById("root");
  if (!container) return;
  
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

mount();
