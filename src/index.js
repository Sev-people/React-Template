import App from "./App.js";
import ReactDOM from 'react-dom/client';
import React from "react";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);