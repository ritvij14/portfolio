import { Box, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
import "@fontsource/jost/600.css";
import "@fontsource/jost/400.css";
import ChakraBox from "./animate_box";

const Intro = () => {
  const { colorMode } = useColorMode();

  return (
    <Box ml="12rem" mt="8%" mb="13%" w="60%">
      <ChakraBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: "easeIn",
        }}
        fontFamily="jost"
        fontSize="6xl"
        fontWeight="600"
        color={colorMode == "dark" ? "#00AFFA" : "#041118"}
        textShadow={
          colorMode == "dark"
            ? "0px 0px 76px rgba(188, 251, 195, 0.3)"
            : "0px 20px 38px #8D8D8D"
        }
      >
        Hello there! 👋🏽 I am Ritvij
      </ChakraBox>
      <br />
      <ChakraBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.2,
          delay: 0.6,
          ease: "easeIn",
        }}
        fontFamily="jost"
        fontSize="2xl"
        fontWeight="600"
        mt="2rem"
        color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
      >
        Passionate Software Engineer with keen interest in developing mobile
        applications, full-stack web technologies and blockchain.
        <br /> <br />
        Currently working and building for Creator DAOs at{" "}
        <Link color="#00AFFA" href="https://crowdpad.io" isExternal>
          CrowdPad
        </Link>
        .
      </ChakraBox>
    </Box>
  );
};

export default Intro;
