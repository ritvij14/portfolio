import React from "react";
import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

import ChakraBox from "./animate_box";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      mx="12rem"
      mb="5rem"
      color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
    >
      <Flex>
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
          w="53%"
        >
          <Text mt="auto" fontFamily="jost" fontSize="4xl" fontWeight="700">
            About Myself
          </Text>

          <Text fontFamily="jost" fontSize="xl" fontWeight="600" mt="2rem">
            Hello! My name is Ritvij. I am an engineering student from India and
            I love building digital products. My interest in coding started from
            my school days when we used to write programs in Java. <br />
            <br /> Fast-forward to today, and I’ve worked on a wide variety of
            projects, like mobile apps for an NGO and research purposes,
            projects in multiple startups and applications for students of my
            own college.
          </Text>
        </ChakraBox>
        <ChakraBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            delay: 0.4,
            duration: 0.2,
            ease: "easeIn",
          }}
          alignSelf="center"
        >
          <Image
            src={
              colorMode == "dark"
                ? "/images/about_vector_dark.svg"
                : "/images/about_vector.svg"
            }
            alt="ritvij_memoji"
            ml="1rem"
          />
        </ChakraBox>
      </Flex>
    </Box>
  );
};

export default About;
