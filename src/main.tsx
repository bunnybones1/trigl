import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getGameEngine } from "./gameEngine";

const root = ReactDOM.createRoot(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  document.getElementById("root")!
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
getGameEngine();
