import React from "react";
import ReactDOM from "react-dom";
import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import "./styles.css";

const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

const padding = theme("layout", {
  compact: "0.5rem",
  cozy: "1.5rem"
});

const buttonFontSize = theme.variants("layout", "kind", {
  small: { compact: "0.9rem", cozy: "1.2rem" },
  medium: { compact: "1rem", cozy: "1.3rem" },
  large: { compact: "2rem", cozy: "1.4rem" }
});

const Button = styled.button`
  font-size: ${buttonFontSize};
`;

Button.propTypes = {
  kind: PropTypes.oneOf(["small", "medium", "large"])
};

Button.defaultProps = {
  kind: "large"
};

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: ${padding};
`;

export default function App() {
  return (
    <ThemeProvider theme={{ mode: "dark", layout: "compact" }}>
      <Wrapper>
        Welcome
        <Button>Sign in</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
