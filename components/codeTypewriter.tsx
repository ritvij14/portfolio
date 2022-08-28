import { Box, Text } from "@chakra-ui/react";
import { useTypewriter } from "react-simple-typewriter";
import "@fontsource/noto-sans-mono/400.css";
import { CursorProps } from "react-simple-typewriter/dist/Components/Cursor";

const CodeTypewriterHook = () => {
  const { text, count } = useTypewriter({
    words: [
      "build mobile apps",
      "create websites",
      "play with databases",
      "setup servers",
      "deploy smart contracts",
    ],
    loop: 0,
    delaySpeed: 500,
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });

  return (
    <Box fontFamily="noto" fontSize={{ base: "sm", md: "lg", lg: "xl" }}>
      <Box>
        <Text as="span">{"<"}</Text>
        <Text as="span" color="#00AFFA">
          code
        </Text>
        <Text as="span">{">"}</Text>
      </Box>
      <Text as="span">&emsp;I can </Text>
      <Text as="span">{text}</Text>
      <Cursor />
      <Box>
        <Text as="span">{"</"}</Text>
        <Text as="span" color="#00AFFA">
          code
        </Text>
        <Text as="span">{">"}</Text>
      </Box>
      <br />
    </Box>
  );
};

const Cursor = ({ cursorStyle = "_" }: CursorProps): JSX.Element => {
  return (
    <Text
      as="span"
      pos="relative"
      fontFamily="inherit"
      color="#00AFFA"
      lineHeight="inherit"
      left="3px"
      top="0"
      opacity={1}
    >
      {cursorStyle}
    </Text>
  );
};

export default CodeTypewriterHook;