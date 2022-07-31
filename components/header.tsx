import { Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import "@fontsource/source-code-pro";
import ChakraBox from "./animate_box";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="row"
      w="100%"
      justify="space-between"
      alignItems="center"
      backgroundColor={colorMode == "light" ? "white" : "#1A202C"}
      px="6rem"
      py="2rem"
      boxShadow="lg"
    >
      <ChakraBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      >
        <Text
          variant="unstyled"
          fontSize="2xl"
          fontWeight="medium"
          fontFamily="nav-logo"
        >
          {"<>ritvij</>"}
        </Text>
      </ChakraBox>

      {/* <ColorModeToggle /> */}
    </Flex>
  );
};

export default Header;
