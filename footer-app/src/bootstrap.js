import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const renderApp = () => {
  const container = document.getElementById("root");
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render standalone
if (!window.remotesLoaded) {
  renderApp();
}

export { renderApp };
