import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getServices } from "../data/services";
import { useTranslation } from "react-i18next";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { NavigateNext } from "@mui/icons-material";
  import { useLocation } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import WhyUs from "../components/WhyUs";
import FAQs from "../components/FAQs";

const Links = ({name}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
      <Typography
        component="label"
        onClick={() => navigate("/#home")}
        sx={{
          color: "primary.main",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        {t("nav.home")}
      </Typography>

      <Typography
        component="label"
        onClick={() => navigate("/#services")}
        sx={{
          color: "primary.main",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        {t("nav.services")}
      </Typography>

      <Typography color="text.primary">{name}</Typography>
    </Breadcrumbs>
  );
};

const ServicePage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const service = getServices(t).find((service) => service.id === Number(id));

  return (
    <>
      <Box
        sx={{ height: { xs: "fit-content", md: "100vh" }, mb: "100px", overflow: "hidden" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 0,
          }}
        >
          <Nav active="services" />
          <Box sx={{ flex: 1 }}>
            <Hero
              top={<Links name={service.name} />}
              title1={service.name}
              title2={""}
              sub={service.description}
              active="services"
              image={service.image}
            />
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{mb: "100px"}}>
          <DescriptionBox id={service.id}/>
          <Box sx={{mt: "100px"}}>
            <FAQs id={service.id} />
          </Box>
          <Box sx={{mt: "100px"}}>
            <Steps />
          </Box>
          <Box sx={{mt: "100px"}}>
            <WhyUs />
          </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ServicePage;
