import { Box, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Intro />
      <About />
      <Footer />
    </Box>
  );
};

export default Home;
