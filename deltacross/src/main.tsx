import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("load", function () {
  var rootFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize
  );
  if (rootFontSize % 2 === 0) {
    document.documentElement.style.fontSize = rootFontSize - 1 + "px";
  }
});
