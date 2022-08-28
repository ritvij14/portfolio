import { Box, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Ritvij Kumar Sharma</title>
        <link rel="icon" href="/images/logo_blue.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Intro />
      <About />
      <Footer />
    </Box>
  );
};

export default Home;
