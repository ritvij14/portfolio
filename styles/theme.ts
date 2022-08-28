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
        "white",
        "linear-gradient(342.55deg, #041118 58.12%, #092331 88.45%);"
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
