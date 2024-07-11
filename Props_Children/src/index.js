import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If We want to chage root.

// const myClock = () => {
//   root.render(
//     <div>
//       <p style={{ fontSize: "4rem" }}>{new Date().toLocaleTimeString()}</p>
//       <h2>This Will Not Re-rendered</h2>
//     </div>
//   );
//   setTimeout(myClock, 1000);
// }

// myClock();

// root.render(myClock());
