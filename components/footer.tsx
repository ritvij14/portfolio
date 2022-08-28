import { Flex, HStack, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import ChakraBox from "./animate_box";
import "@fontsource/jost/500.css";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        w="100%"
        justify="space-between"
        alignItems="center"
        px={{ base: "2rem", sm: "4rem", md: "6rem", lg: "8rem", xl: "12rem" }}
        py="3rem"
        fontFamily="jost"
        fontWeight="500"
        fontSize={{ base: "xs", sm: "sm" }}
        textAlign={{ base: "center", sm: "left" }}
      >
        <Text color={colorMode == "dark" ? "#D2EAFF" : "#041118"}>
          Designed and developed by{" "}
          <Link color="#00AFFA" href="mailto://ritvij2001@gmail.com" isExternal>
            Ritvij Kumar Sharma.
          </Link>
          <br />
          Built using{" "}
          <Link color="#00AFFA" href="https://nextjs.org" isExternal>
            NextJS
          </Link>
          ,{" "}
          <Link color="#00AFFA" href="https://chakra-ui.com/" isExternal>
            Chakra UI
          </Link>{" "}
          and{" "}
          <Link
            color="#00AFFA"
            href="https://www.typescriptlang.org/"
            isExternal
          >
            Typescript
          </Link>
          . Deployed using{" "}
          <Link color="#00AFFA" href="https://vercel.com/" isExternal>
            Vercel
          </Link>
          .
        </Text>
        <HStack spacing="1rem" mt={{ base: "2rem", sm: "0" }}>
          <Link href="https://twitter.com/ritvij14_" isExternal>
            <IoLogoTwitter
              color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
              size="24px"
            />
          </Link>
          <Link href="https://github.com/ritvij14" isExternal>
            <FaGithub
              color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
              size="24px"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rks-1410" isExternal>
            <FaLinkedinIn
              color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
              size="24px"
            />
          </Link>
        </HStack>
      </Flex>
    </ChakraBox>
  );
};

export default Footer;
