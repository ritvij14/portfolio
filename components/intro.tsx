import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";
import ChakraBox from "./animate_box";

const Intro = () => {
  return (
    <ChakraBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: "easeIn",
      }}
      mx="15rem"
      my="8%"
    >
      <Text fontFamily="poppins" fontSize="5xl" fontWeight="600">
        Hello there! 👋🏽 I am Ritvij
      </Text>
      <Text fontFamily="poppins" fontSize="2xl" fontWeight="400" mt="2rem">
        Passionate Software Engineer with keen interest in developing mobile
        applications, full-stack web technologies and blockchain.
        <br /> <br />
        Currently working and building for Creator DAOs at{" "}
        <Link color="blue.500" href="https://crowdpad.io" isExternal>
          CrowdPad
        </Link>
        .
      </Text>
    </ChakraBox>
  );
};

export default Intro;
