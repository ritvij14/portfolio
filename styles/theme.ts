import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    "nav-logo": `'Source Code Pro', monospace`,
    poppins: `'Poppins', sans-serif`,
  },
});

export default theme;
