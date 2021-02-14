import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/context";
import { PermissionsContextProvider } from "./context/permissions_context";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <PermissionsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PermissionsContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
