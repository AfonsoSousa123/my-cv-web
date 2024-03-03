import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Css Files
import "./assets/css/magnific-popup.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/templatemo-first-portfolio-style.css";
import "./assets/css/bootstrap-icons.css";

// JS files
// import "@popperjs/core"
// import "./assets/js/jquery.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.sticky.js";
// import "./assets/js/click-scroll.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/magnific-popup-options.js";
// import "./assets/js/custom.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
