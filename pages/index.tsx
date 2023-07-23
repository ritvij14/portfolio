import { Box, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro";
import SocialsBar from "../components/socialsBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ritvij Kumar Sharma</title>
        <link rel="icon" href="/images/logo_blue.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <SocialsBar />
      <Box w={{ "2xl": "50vw", base: "65vw" }} mx="auto">
        <Intro />
        <About />
        <Experience />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
