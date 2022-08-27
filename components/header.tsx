import { Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import "@fontsource/source-code-pro";
import ChakraBox from "./animate_box";
import ColorModeToggle from "./themeToggle";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
    >
      <Flex
        direction="row"
        w="100%"
        justify="space-between"
        alignItems="center"
        px="4rem"
        py="2rem"
      >
        <Image
          src={
            colorMode == "dark"
              ? "/images/logo_blue.svg"
              : "/images/logo_black.svg"
          }
          alt="ritvij_memoji"
        />

        <ColorModeToggle />
      </Flex>
    </ChakraBox>
  );
};

export default Header;
