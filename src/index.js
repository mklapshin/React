import { ThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"

const theme = createTheme({
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App count={1} users={[{ id: "string" }]} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)


/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/