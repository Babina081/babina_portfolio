import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// reportWebVitals();

// ReactDOM.render(
//   <ThemeProvider >
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );

// const root = document.getElementById('root');
// const container = createRoot(root);

// // Use the new createRoot API to create a root level container
// container.render(<App />);
