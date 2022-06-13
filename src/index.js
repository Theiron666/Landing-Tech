import React from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "./router/AppRouter";

import "animate.css";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<AppRouter />);
