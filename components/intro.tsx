import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import "@fontsource/jost/400.css";
import "@fontsource/jost/600.css";
import ChakraBox from "./animate_box";
import PhotoGraphic from "./photoGraphic";

const Intro = () => {
  const { colorMode } = useColorMode();

  return (
    <Box w="full" mt={"13%"}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <ChakraBox
          flex={2}
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
            fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
            color={colorMode == "dark" ? "#5FC7F3" : "#041118"}
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
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            color={colorMode == "dark" ? "#5FC7F3" : "#041118"}
            textShadow={
              colorMode == "dark"
                ? "0px 0px 76px rgba(188, 251, 195, 0.3)"
                : "10px 15px 50px #8D8D8D"
            }
          >
            I am Ritvij Sharma
          </Text>
          <Text
            fontWeight={{ base: "400", sm: "500" }}
            w={{ base: "100%", md: "80%" }}
            mt="1rem"
            fontSize={{ base: "lg", md: "2xl" }}
            color={colorMode === "dark" ? "#F2EAFF" : "black"}
            mb={{ base: "2rem", md: "0" }}
          >
            Passionate Software Engineer with keen interest in developing mobile
            applications, full-stack web apps and blockchain.
            <br /> <br />
            Currently building for Real Estate Agents and Brokerages at{" "}
            <Link
              color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
              href="https://kendal.ai"
              isExternal
            >
              Kendal AI
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
