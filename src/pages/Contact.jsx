import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import heroImg from "../assets/doors/1.webp";
import { useTranslation } from "react-i18next";
import ClassicCard from "../components/ClassicCard";
import {
  East,
  Email,
  LocationOnOutlined,
  Phone,
  Send,
  WhatsApp,
} from "@mui/icons-material";
import { CiClock2 } from "react-icons/ci";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Card = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 20,
        p: 4,
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          bgcolor: "rgba(251, 146, 60, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        {props.icon}
      </Box>
      <Typography variant="h6">{props.title}</Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: 16, fontWeight: 700, color: "text.secondary" }}
      >
        {props.sub}
      </Typography>
      <Button
        endIcon={<East />}
        onClick={() => {
          window.open(props.link, "_blank");
        }}
        sx={{ color: "primary.main", fontSize: 14, fontWeight: 700 }}
      >
        {props.button}
      </Button>
    </Box>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  return (
    <>
      <Helmet>
        <title>
          {`İletişim | Yeni Ay Aluminum | Ücretsiz Keşif ve Teklif`}
        </title>

        <meta
          name="description"
          content="KKTC genelinde alüminyum kapı ve pencere sistemleri, balkon kapama, sürme cam ve teras çözümleri için bizimle iletişime geçin. Ücretsiz keşif, hızlı dönüş ve garantili işçilik."
        />

        <meta property="og:title" content="İletişim | Yeni Ay Aluminum" />

        <meta
          property="og:description"
          content="Ücretsiz keşif ve teklif almak için bizimle iletişime geçin."
        />

        <meta property="og:type" content="website" />
      </Helmet>
      <Box
        id="about"
        sx={{ height: { xs: "fit-content", md: "100vh" }, mb: 5 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 0,
          }}
        >
          <Nav active="contact" />
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <Hero
              top={t("contact.top")}
              title1={t("contact.title1")}
              title2={t("contact.title2")}
              sub={t("contact.desc")}
              active="contact"
              image={heroImg}
            />
          </Box>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ mb: "100px" }}>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card
                icon={<Phone fontSize="large" sx={{ color: "primary.main" }} />}
                title={t("contact.phone")}
                sub={"+90 533 829 92 57"}
                button={t("contact.phoneBtn")}
                link="tel:+905338299257"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card
                icon={
                  <WhatsApp fontSize="large" sx={{ color: "primary.main" }} />
                }
                title={t("contact.whatsapp")}
                sub={t("contact.whatsappTxt")}
                button={t("contact.whatsappBtn")}
                link="https://wa.link/1n2i87"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card
                icon={<Email fontSize="large" sx={{ color: "primary.main" }} />}
                title={t("contact.mail")}
                sub={"info@yeniay.com"}
                button={t("contact.mailBtn")}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Card
                icon={
                  <LocationOnOutlined
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                }
                title={t("contact.address")}
                sub={"Mağusa, KKTC"}
                button={t("contact.addressBtn")}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          sx={{ mb: "100px" }}
        >
          <Box
            sx={{
              flex: 1,
              bgcolor: "background.paper",
              boxShadow: 20,
              p: 5,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6">{t("contact.form.title")}</Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 12, color: "text.secondary", fontWeight: 500 }}
            >
              {t("contact.form.sub")}
            </Typography>
            <TextField
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  height: 50,
                },
                mt: 3,
              }}
              variant="outlined"
              inputRef={nameRef}
              placeholder={t("contact.form.name")}
            />
            <TextField
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  height: 50,
                },
                mt: 3,
              }}
              variant="outlined"
              inputRef={phoneRef}
              placeholder={t("contact.form.phone")}
            />
            <TextField
              sx={{
                width: "100%",
                mt: 3,
              }}
              variant="outlined"
              multiline
              minRows={5}
              inputRef={messageRef}
              placeholder={t("contact.form.message")}
            />
            <Button
              variant="contained"
              sx={{ width: "100%", height: "50px", mt: 3 }}
              startIcon={<Send />}
            >
              {t("contact.form.button")}
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "background.paper",
              boxShadow: 20,
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13020.53075921418!2d33.30803132957763!3d35.327526347005644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de12d5e239a349%3A0x6349e58df1fa6c89!2sNusmar%20Market!5e0!3m2!1sen!2s!4v1780848948827!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CiClock2 fontSize={36} color="#FF6B00" />
              <Box>
                <Typography variant="h6">
                  {t("contact.form.working-hours-title")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  {t("contact.form.working-hours")} | 08:00 -18:00
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
        <WhyUs />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
