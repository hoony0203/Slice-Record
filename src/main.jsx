import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter basename="/Slice-Record">
    <App />
  </BrowserRouter>
  //</React.StrictMode>
);
