import { Link, Text, useColorMode } from "@chakra-ui/react";
import "@fontsource/jost/500.css";
import ChakraBox from "./animate_box";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <ChakraBox
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        delay: 0.2,
        duration: 0.2,
        ease: "easeIn",
      }}
      w="100%"
      mb="7%"
    >
      <Text
        textAlign={"center"}
        color={colorMode == "dark" ? "#F2EAFF" : "#041118"}
      >
        Designed and developed by{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://github.com/ritvij14/portfolio"
          isExternal
        >
          Ritvij Kumar Sharma.
        </Link>
        <br />
        Built using{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://nextjs.org"
          isExternal
        >
          NextJS
        </Link>
        ,{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://chakra-ui.com/"
          isExternal
        >
          Chakra UI
        </Link>{" "}
        and{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://www.typescriptlang.org/"
          isExternal
        >
          Typescript
        </Link>
        . Deployed using{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://vercel.com/"
          isExternal
        >
          Vercel
        </Link>
        .
      </Text>
    </ChakraBox>
  );
};

export default Footer;
