import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/Style/index.css";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StyledEngineProvider>
);
