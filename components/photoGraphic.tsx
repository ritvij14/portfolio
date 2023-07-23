import { Box, Image, Stack, useColorMode } from "@chakra-ui/react";
import React from "react";
import ChakraBox from "./animate_box";

const PhotoGraphic = () => {
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
      w={{ base: "50%", sm: "30%", "2xl": "25%" }}
      h="fit-content"
      position="relative"
    >
      <Box h="full" w="full" role="group">
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark" ? "/images/backend.svg" : "/images/backend.svg"
          }
          alt="backend"
          position={"absolute"}
          bottom={"-1.75rem"}
          right={"0.5rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(-6px, 18px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/blockchain.svg" : ""}
          alt="backend"
          position={"absolute"}
          top={"-1.5rem"}
          right={"-3rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(28px, 6px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/databases.svg" : ""}
          alt="backend"
          position={"absolute"}
          top={"30%"}
          right={"-5.5rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(28px, 14px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/flutter_vector.svg" : ""}
          alt="backend"
          position={"absolute"}
          bottom={"0"}
          left={"0"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(-20px, 2px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/gcloud_vector.svg" : ""}
          alt="backend"
          position={"absolute"}
          top={"-2rem"}
          left={"45%"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(16px, -16px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/js_vector.svg" : ""}
          alt="backend"
          position={"absolute"}
          top={"1rem"}
          left={"-0.5rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(-16px, -16px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/mobile_apps.svg" : ""}
          alt="backend"
          position={"absolute"}
          top={"-3rem"}
          left={"-2.5rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(-8px, -20px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/solana_vector.svg" : ""}
          alt="backend"
          position={"absolute"}
          bottom={"1.5rem"}
          right={"-1.5rem"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(16px, 20px)",
          }}
        />
        <Image
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={colorMode == "dark" ? "/images/websites.svg" : ""}
          alt="backend"
          position={"absolute"}
          left={"-5rem"}
          top={"45%"}
          w={"fit-content"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%) translate(-32px, -14px)",
          }}
        />
        <Box
          borderRadius={1000}
          backgroundColor={"#94CCE4"}
          style={{
            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          }}
          _groupHover={{
            transform: "scale(105%)",
            backgroundColor: "white",
          }}
          _groupFocus={{
            outline: 0,
            transform: "scale(105%)",
            backgroundColor: "white",
          }}
          position="relative"
        >
          <Image
            mixBlendMode={"multiply"}
            _groupHover={{
              mixBlendMode: "none",
              filter: "none",
            }}
            filter={"grayscale(100%) contrast(1)"}
            position="relative"
            borderRadius={1000}
            src={"/images/IMG_4117.jpg"}
            alt="profile_pic"
          />
        </Box>
      </Box>
    </ChakraBox>
  );
};

export default PhotoGraphic;
