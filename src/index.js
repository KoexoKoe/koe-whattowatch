import "./global.css"; //Imported global CSS styling sheet
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App"; //Imported App.jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); //Runs the web from App.jsx - need to be imported
