// ============================================================
// MiModex — Entry Point
// ============================================================
import React from "react";
import ReactDOM from "react-dom/client";
import "animal-island-ui/style";
import "@/styles/global.css";
import { Cursor } from "animal-island-ui";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cursor>
      <App />
    </Cursor>
  </React.StrictMode>
);
