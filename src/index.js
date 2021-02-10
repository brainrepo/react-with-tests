import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {I18nContextProvider} from "./contexts/i18nContext";
import { ReduxProvider } from "./redux/Store"

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
    <I18nContextProvider>
      <Router>
        <App />
      </Router>
    </I18nContextProvider>
    </ReduxProvider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
