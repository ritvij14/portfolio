import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode(
        "#F2F8F8",
        "linear-gradient(134deg, #1C2A34 0%, #111A20 100%, #111A20 100%);"
      )(props),
      fontFamily: mode(`'Jost', sans-serif`, `'Jost', sans-serif`)(props),
      overflow: "scroll",
    },
  }),
};

const theme = extendTheme({
  config,
  fonts: {
    "nav-logo": `'Source Code Pro', monospace`,
    jost: `'Jost', sans-serif`,
    poppins: `'Poppins', sans-serif`,
    noto: `'Noto Sans Mono', monospace`,
  },
  styles,
});

export default theme;
