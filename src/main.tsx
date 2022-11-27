import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { MainRoutes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainRoutes />
);
