import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.css";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import theme from "./Styles/theme/index";

// import { store } from "./Store/store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ThemeProvider>
  </BrowserRouter>
);
