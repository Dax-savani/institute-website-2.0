import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
