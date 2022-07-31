import React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {
  FaFileAlt,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { IoMailSharp } from "react-icons/io5";
import ChakraBox from "./animate_box";

const About = () => {
  return (
    <ChakraBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.3,
        delay: 1,
        ease: "easeIn",
      }}
      mx="15rem"
      mb="5rem"
    >
      <Text mt="auto" fontFamily="poppins" fontSize="5xl" fontWeight="600">
        About Me
      </Text>
      <Flex>
        <Text
          fontFamily="poppins"
          fontSize="xl"
          w="60%"
          fontWeight="400"
          mt="2rem"
        >
          Hello! I am Ritvij Kumar Sharma. I am an engineering student from
          India and I love building digital products. My interest in coding
          started from my school days when we used to write programs in Java.{" "}
          <br />
          <br /> Fast-forward to today, and I’ve worked on a wide variety of
          projects, like mobile apps for an NGO and research purposes, projects
          in multiple startups and applications for students of my own college.
        </Text>
        <Image
          src="/images/intro-pic.png"
          alt="ritvij_memoji"
          h="20rem"
          w="20rem"
          ml="5rem"
        />
      </Flex>
      <SimpleGrid
        mt="2rem"
        mx="10rem"
        spacingX="1rem"
        textAlign="center"
        columns={5}
        fontFamily="poppins"
      >
        <Flex
          bg="gray.600"
          p="0.6rem"
          borderRadius="5rem"
          justifyContent="space-around"
        >
          <FaFileAlt size="1.5rem" />
          Resume
        </Flex>
        <Flex
          bg="red.600"
          p="0.6rem"
          borderRadius="5rem"
          justifyContent="space-around"
        >
          <IoMailSharp size="1.5rem" />
          E-Mail
        </Flex>
        <Flex
          bg="blue.700"
          p="0.6rem"
          borderRadius="5rem"
          justifyContent="space-around"
        >
          <FaLinkedin size="1.5rem" />
          LikedIn
        </Flex>
        <Flex
          bg="black"
          p="0.6rem"
          borderRadius="5rem"
          justifyContent="space-around"
        >
          <FaGithub size="1.5rem" />
          GitHub
        </Flex>
        <Flex
          bg="blue.600"
          p="0.6rem"
          borderRadius="5rem"
          justifyContent="space-around"
        >
          <FaTwitter size="1.5rem" />
          Twitter
        </Flex>
      </SimpleGrid>
    </ChakraBox>
  );
};

export default About;
