import { Box, Container } from "@mui/material";
import React from "react";
import Nav from "../components/Nav";
import Hero from "./../components/Hero";
import { useTranslation } from "react-i18next";
import heroImg from "../assets/Hero.webp";
import FeaturesPaper from "./../components/FeaturesPaper";
import Footer from "./../components/Footer";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        id="home"
        sx={{ height: { xs: "fit-content", md: "100vh" }, mb: "100px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 0,
          }}
        >
          <Nav active="home" />
          <Box sx={{ flex: 4 }}>
            <Hero
              top={t("home.top")}
              title1={t("home.title1")}
              title2={t("home.title2")}
              sub={t("home.sub")}
              active="home"
              image={heroImg}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              top: { xs: 0, md: -20, lg: -50, zIndex: 100 },
              mt: {xs: 10, md: 0}
            }}
          >
            <Container maxWidth="lg">
              <FeaturesPaper />
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
