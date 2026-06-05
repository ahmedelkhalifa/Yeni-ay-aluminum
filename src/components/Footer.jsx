import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logoDark.png";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          py: 3,
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Box component={"img"} src={logo} sx={{ height: "70px" }} />
          <Typography
            variant="body1"
            sx={{ fontSize: 14, color: "background.default", lineHeight: 1.8 }}
          >
            {t("footer.sub")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "background.default",
              gap: 2,
              mt: 3,
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid",
                borderColor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <IconButton>
                <Instagram
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid",
                borderColor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <IconButton>
                <Facebook
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid",
                borderColor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <IconButton>
                <YouTube
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid",
                borderColor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <IconButton>
                <WhatsApp
                  fontSize="medium"
                  sx={{ color: "background.default" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: 18,
                color: "background.default",
                fontWeight: 600,
              }}
            >
              {t("footer.links")}
            </Typography>
            <Box sx={{mt: 2, display: "flex", flexDirection: "column", gap: 1}}>
              <Typography
                variant="body1"
                component={"a"}
                href="#home"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.home")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#services"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.services")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#about"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.about")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#contact"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.contact")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flex: 1.5, display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: 18,
                color: "background.default",
                fontWeight: 600,
              }}
            >
              {t("footer.servicesCol")}
            </Typography>
            <Box sx={{mt: 2, display: "flex", flexDirection: "column", gap: 1}}>
              <Typography
                variant="body1"
                component={"a"}
                href="#home"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.aluminum")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#services"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.balcony")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#about"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.terrace")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#contact"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.sliding")}
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="#contact"
                sx={{
                  fontSize: 14,
                  color: "background.default",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {t("footer.maintainance")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 2 }}></Box>
      </Container>
    </Box>
  );
};

export default Footer;
