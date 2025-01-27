import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

let root;

const mount = () => {
  const container = document.getElementById("root");
  if (!container) {
    console.error("Container element not found");
    return;
  }
  
  try {
    root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error mounting app:", error);
  }
};

// Unmount function for cleanup
const unmount = () => {
  if (root) {
    root.unmount();
  }
};

// Mount immediately
mount();

// Export for container usage
export { mount, unmount };
