import { Box, color, Image, Stack, useColorMode } from "@chakra-ui/react";
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
      w={{ base: "80%", md: "40%", lg: "35%", "2xl": "25%" }}
      h="fit-content"
      position="relative"
    >
      <Box h="full" w="full" role="group">
        <Image
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/backend.svg"
              : "/images/backend_white.svg"
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/blockchain.svg"
              : "/images/blockchain_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/databases.svg"
              : "/images/db_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/flutter_vector.svg"
              : "/images/flutter_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/gcloud_vector.svg"
              : "/images/gcloud_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/js_vector.svg"
              : "/images/js_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/mobile_apps.svg"
              : "/images/mobile_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          borderRadius={16}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/solana_vector.svg"
              : "/images/solana_white.svg"
          }
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
          zIndex={2}
          visibility={{ base: "hidden", xl: "visible" }}
          src={
            colorMode == "dark"
              ? "/images/websites.svg"
              : "/images/websites_white.svg"
          }
          alt="backend"
          borderRadius={16}
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
          border={`${colorMode === "light" ? "1px solid #CFCFCF" : "none"}`}
          backgroundColor={`${colorMode == "dark" && "#94CCE4"}`}
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
          shadow={"0px 40px 30px 0px rgba(25, 25, 46, 0.10)"}
        >
          <Image
            mixBlendMode={"multiply"}
            _groupHover={{
              mixBlendMode: "none",
              filter: "none",
            }}
            filter={
              colorMode === "dark" ? "grayscale(100%) contrast(1)" : "none"
            }
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
