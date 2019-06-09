import React from "react";
import ReactDOM from "react-dom";
import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";

import "./styles.css";

const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export default function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <Wrapper>Hello World</Wrapper>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
