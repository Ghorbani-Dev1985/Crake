import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/Style/index.css";
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";


const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#581c87'
    },
    secondary: {
      main: '#a855f7'
    },
  },
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Dana',
      'Tahoma'
    ].join(','),
    letterSpacing: 'normal',
    fontSize : 16,
    htmlFontSize: 16,
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiInputLabel: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: "orange",
        "&$focused": { // increase the specificity for the pseudo class
          color: "purple"
        }
      }
    },
    MuiTextField:{
      root:  {
        '& label.Mui-focused': {
              color: '#581c87',
              borderRadius: '10px',
            },
    }
  },
}
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);
