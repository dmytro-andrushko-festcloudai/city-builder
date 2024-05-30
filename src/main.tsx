import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./containers/app/App";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BuilderProvider } from "./builderContext/builderContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BuilderProvider>
        <App />
      </BuilderProvider>
    </ThemeProvider>
  </React.StrictMode>
);
