import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import "@fontsource/jost/600.css";
import "@fontsource/jost/400.css";
import ChakraBox from "./animate_box";
import CodeTypewriterHook from "./codeTypewriter";
import PhotoGraphic from "./photoGraphic";

const Intro = () => {
  const { colorMode } = useColorMode();

  return (
    <Box w="full" mt={"10%"}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <ChakraBox
          flex={1}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.2,
            delay: 0.3,
            ease: "easeIn",
          }}
          fontFamily="jost"
        >
          <Text
            fontWeight="400"
            fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
            color={colorMode == "dark" ? "#00AFFA" : "#041118"}
            textShadow={
              colorMode == "dark"
                ? "0px 0px 76px rgba(188, 251, 195, 0.3)"
                : "0px 20px 38px #8D8D8D"
            }
          >
            Hello there! 👋🏽
          </Text>
          <Text
            fontWeight="600"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            color={colorMode == "dark" ? "#00AFFA" : "#041118"}
            textShadow={
              colorMode == "dark"
                ? "0px 0px 76px rgba(188, 251, 195, 0.3)"
                : "10px 15px 50px #8D8D8D"
            }
          >
            I am Ritvij Sharma
          </Text>
          <Text fontWeight="500" w="80%" mt="1rem" fontSize="xl">
            Passionate Software Engineer with keen interest in developing mobile
            applications, full-stack web apps and blockchain.
            <br /> <br />
            Currently building for Creators and Marketing Agencies at{" "}
            <Link color="#00AFFA" href="https://crowdpad.io" isExternal>
              CrowdPad
            </Link>
            .
          </Text>
        </ChakraBox>
        <PhotoGraphic />
      </Flex>
    </Box>
  );
};

export default Intro;
