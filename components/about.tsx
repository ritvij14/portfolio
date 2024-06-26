import { Link, Text, useColorMode } from "@chakra-ui/react";

import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import ChakraBox from "./animate_box";

const About = () => {
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
      mt={"17%"}
    >
      <Text
        mt="auto"
        fontFamily="jost"
        fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
        color={colorMode == "dark" ? "#F2EAFF" : "#041118"}
        fontWeight="700"
        _after={{
          borderTopColor: "white",
          borderTopWidth: "2px",
        }}
      >
        About Myself
      </Text>

      <Text
        fontFamily="jost"
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        fontWeight="400"
        mt="1rem"
        borderLeftColor={"#5FC7F3"}
        borderLeftWidth={6}
        borderLeftRadius={4}
        borderRightRadius={8}
        paddingX={4}
        paddingY={4}
        color={colorMode === "dark" ? "#F2EAFF" : "black"}
        backgroundColor={colorMode === "dark" ? "#001D2D" : "#D2EAFF59"}
      >
        My coding journey began way back in high-school when I was introduced to
        Java programming language. Since then its been an amazing experience
        learning about mobile apps, web pages, backend servers, databases and
        blockchains.
        <br />
        <br />
        Fast forward to today, I have worked on several projects, for startups,
        an NGO and also for research purposes, including one paper published
        from my college thesis project.
        <br /> Currently, I work as a Software Engineer at{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://kendal.ai"
          isExternal
        >
          Kendal AI
        </Link>
        , while also working on side projects, freelance gigs and taking part in
        communities like{" "}
        <Link
          color={colorMode === "dark" ? "#5FC7F3" : "#00AFFA"}
          href="https://superteam.fun/"
          isExternal
        >
          SuperteamDAO
        </Link>
        .
      </Text>
    </ChakraBox>
  );
};

export default About;
