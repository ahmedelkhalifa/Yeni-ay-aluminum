import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Nav from "../components/Nav";
import heroImg from "../assets/garden_house/1.webp";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import img from "../assets/Hero.webp";
import FeaturesPaper from "../components/FeaturesPaper";
import WhyUs from "../components/WhyUs";
import Steps from "../components/Steps";
import Values from "../components/Values";
import { East, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      <Container maxWidth="lg" sx={{ mb: "100px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 4,
            mb: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
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
            <Typography variant="h4" sx={{ mt: 3, width: "80%" }}>
              {t("about.head")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                width: "80%",
                fontSize: 14,
                color: "text.secondary",
                fontWeight: 500,
              }}
            >
              {t("about.text")}
            </Typography>
          </Box>
        </Box>
        <FeaturesPaper />
        <Box sx={{ mt: "100px" }}>
          <Values />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
            mt: "100px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                position: "relative",
                "&::after": {
                  position: "absolute",
                  content: '""',
                  bottom: -10,
                  left: 0,
                  width: 50,
                  height: 3,
                  bgcolor: "primary.main",
                },
              }}
            >
              {t("faq.title")}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Accordion
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {t("about.FAQs.1.question")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {t("about.FAQs.1.answer")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {t("about.FAQs.2.question")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {t("about.FAQs.2.answer")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {t("about.FAQs.3.question")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {t("about.FAQs.3.answer")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {t("about.FAQs.4.question")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {t("about.FAQs.4.answer")}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flex: 1,
              px: 5,
              py: 5,
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              cursor: "pointer",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,

                backgroundImage: {
                  xs: `linear-gradient(
                      to bottom,
                      rgba(17, 24, 39, 1) 0%,
                      rgba(17, 24, 39, 1) 30%,
                      rgba(17, 24, 39, 0.5)
                    ),
                    url(${img})`,
                  md: `linear-gradient(
                      to right,
                      rgba(17, 24, 39, 1) 0%,
                      rgba(17, 24, 39, 1) 30%,
                      rgba(17, 24, 39, 0) 100%
                    ),
                    url(${img})`,
                },

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                transition: "transform 0.4s ease",
              },

              "&:hover::before": {
                transform: "scale(1.08)",
              },
              transition: "0.3s ease",

              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Box
              sx={{
                zIndex: 100,
                width: { xs: "100%", md: "40%" },
                position: "relative",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "background.default",
                  position: "relative",
                  "&::after": {
                    position: "absolute",
                    content: '""',
                    bottom: -10,
                    left: 0,
                    width: 50,
                    height: 3,
                    bgcolor: "primary.main",
                  },
                }}
              >
                {t("faq.cardTitle")}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "background.default", mt: 3, fontSize: 14 }}
              >
                {t("faq.cardDesc")}
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "50px",
                    color: "background.default",
                  }}
                  endIcon={<East />}
                  onClick={() => {
                    window.open("tel:+905338299257");
                  }}
                >
                  {t("hero.quoteBtn")}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    width: "150px",
                    height: "50px",
                    color: "background.default",
                    borderColor: "background.default",
                  }}
                  endIcon={<East />}
                  onClick={() => navigate("/contact")}
                >
                  {t("hero.contactBtn")}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: "100px " }}>
          <WhyUs />
        </Box>
        <Box sx={{ mt: "100px " }}>
          <Steps />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;
