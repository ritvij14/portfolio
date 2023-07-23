import {
  Box,
  Flex,
  Text,
  useColorMode,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  useMediaQuery,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import ChakraBox from "./animate_box";

const Experience = () => {
  const { colorMode } = useColorMode();
  const [isMobileFrame] = useMediaQuery("(max-width: 480px)");
  const companies = ["CrowdPad", "Huddle01", "AgNext Tech", "Lifespark Tech"];
  const workTime = [
    "May 2022 - Present",
    "July 2021 - April 2022",
    "June 2021 - July 2021",
    "April 2020 - June 2020",
  ];
  const work = [
    [
      "Post-Pivot: Working on end-to-end development of Creator Discovery webapp, and all related backend functionality",
      "Pre-Pivot: Worked on mobile app for web3 social media application allowing users to invest in their favourite creators and creators to create their own crypto tokens. Built end-to-end Flutter Application with blockchain features based on Solana.",
    ],
    [
      "Created a Flutter package for Huddle 01 which can be used for building WebRTC based mobile applications.",
      "Part of the core team working on the web platform",
      "Worked on features like wallet integrations, NFTs, ENS, polls and quizzes, NFT tipping in livestream, NFT Token gating in meetings etc.",
    ],
    [
      "Worked on re-design and re-engineering of Laboratory Information Management System(LIMS) for AgNext.",
    ],
    [
      "Worked on android mobile app for helping people with COVID Scenario by tracking GPS and Bluetooth of mobile devices and warning about proximity.",
    ],
  ];

  return (
    <Box
      mt={"17%"}
      mb="5rem"
      color={colorMode == "dark" ? "#D2EAFF" : "#041118"}
    >
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
        mb="2rem"
      >
        <Text
          mt="auto"
          fontFamily="jost"
          fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
          fontWeight="700"
        >
          Work Experience
        </Text>
      </ChakraBox>
      <ChakraBox
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          delay: 0.3,
          duration: 0.2,
          ease: "easeIn",
        }}
      >
        <Tabs orientation={isMobileFrame ? "horizontal" : "vertical"}>
          <TabList
            overflowX="auto"
            overflowY="hidden"
            w={{ base: "100%", md: "25%" }}
            justifyContent={{ md: "space-evenly" }}
          >
            {companies.map((company) => (
              <Tab key={companies.indexOf(company)} justifyContent="start">
                {company}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {work.map((workPoints, index) => (
              <TabPanel key={index} paddingY={0}>
                <Text
                  mt={{ base: "1rem", sm: 0 }}
                  fontFamily="jost"
                  fontSize={"lg"}
                  mb={2}
                  fontWeight="600"
                >
                  {workTime[index]}
                </Text>
                <UnorderedList>
                  {workPoints.map((point, index) => (
                    <ListItem key={index}>{point}</ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </ChakraBox>
    </Box>
  );
};

export default Experience;
