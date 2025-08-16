import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.scss";
import "./assets/css/tailwind.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        style={{ fontSize: "14px" }}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
);
