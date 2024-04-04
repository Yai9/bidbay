import * as React from "react";
import Layout from "./Layout";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/defaultTheme";
import "./App.css";
import { createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <Layout>
          <RoutesList />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
