import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Nav from "../components/Nav";
import heroImg from "../assets/garden_house/1.webp";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import img from "../assets/hero.webp";
import FeaturesPaper from "../components/FeaturesPaper";
import WhyUs from "../components/WhyUs";
import Steps from "../components/Steps";
import Values from "../components/Values";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        id="about"
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
          <Nav active="about" />
          <Box sx={{ flex: 1 }}>
            <Hero
              top={t("about.top")}
              title1={t("home.title1")}
              title2={t("home.title2")}
              sub={t("home.sub")}
              active="home"
              image={heroImg}
            />
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{mb: "100px"}}>
        <Box
          sx={{ width: "100%", display: "flex", alignItems: "center", gap: 4, mb: 3, flexDirection: {xs: "column", md: "row"} }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 4,
              flex: 1,
            }}
          >
            <Box
              component={"img"}
              src={img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontSize: 14,
                fontWeight: 600,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: 0,
                  height: 3,
                  width: 50,
                  bgcolor: "primary.main",
                },
              }}
            >
              {t("about.whoAreWe")}
            </Typography>
            <Typography variant="h4" sx={{mt: 3, width: "80%"}}>
                {t("about.head")}
            </Typography>
            <Typography variant="body1" sx={{mt: 2, width: "80%", fontSize: 14, color: "text.secondary", fontWeight: 500}}>
                {t("about.text")}
            </Typography>
          </Box>
        </Box>
        <FeaturesPaper />
        <Box sx={{mt: "100px"}}>
            <Values />
        </Box>
        <Box sx={{mt: "100px "}}>
            <WhyUs />
        </Box>
        <Box sx={{mt: "100px "}}>
            <Steps />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;
