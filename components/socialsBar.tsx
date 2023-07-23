import React from "react";
import { Link, Tooltip, VStack } from "@chakra-ui/react";
import { IoDocument, IoLogoTwitter } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrDocument, GrMail } from "react-icons/gr";
import { useColorMode } from "@chakra-ui/react";
import ChakraBox from "./animate_box";

const SocialsBar = () => {
  const { colorMode } = useColorMode();

  return (
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
      position={"fixed"}
      bottom={0}
      ml="7%"
      float="left"
    >
      <VStack
        _after={{
          content: `""`,
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6rem",
          width: "2px",
          borderRadius: 5,
          mt: 6,
          background: colorMode == "dark" ? "#D2EAFF" : "#041118",
        }}
        spacing="2rem"
        mt={{ base: "2rem", sm: "0" }}
      >
        <Tooltip hasArrow label="E-Mail" placement="end" ml="0.5rem">
          <Link
            href="mailto:ritvij2001@gmail.com"
            isExternal
            color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
            _hover={{
              transform: "scale(1.25)",
              color: "#00AFFA",
            }}
          >
            <GrMail size="16px" />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="Twitter" placement="end" ml="0.5rem">
          <Link
            href="https://twitter.com/ritvij14_"
            isExternal
            color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
            _hover={{
              transform: "scale(1.25)",
              color: "#00AFFA",
            }}
          >
            <IoLogoTwitter size="16px" />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="GitHub" placement="end" ml="0.5rem">
          <Link
            href="https://github.com/ritvij14"
            isExternal
            color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
            _hover={{
              transform: "scale(1.25)",
              color: "#00AFFA",
            }}
          >
            <FaGithub size="16px" />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="LinkedIn" placement="end" ml="0.5rem">
          <Link
            href="https://www.linkedin.com/in/rks-1410"
            isExternal
            color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
            _hover={{
              transform: "scale(1.25)",
              color: "#00AFFA",
            }}
          >
            <FaLinkedinIn size="16px" />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="Resume" placement="end" ml="0.5rem">
          <Link
            href="https://drive.google.com/file/d/1lK3I6pqOAmrLJquBx_0EuZsjdGodngfm/view?usp=sharing"
            isExternal
            color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
            _hover={{
              transform: "scale(1.25)",
              color: "#00AFFA",
            }}
          >
            <IoDocument size="16px" />
          </Link>
        </Tooltip>
      </VStack>
    </ChakraBox>
  );
};

export default SocialsBar;
