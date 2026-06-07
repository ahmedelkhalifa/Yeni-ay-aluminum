import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logoDark.png";
import { useTranslation } from "react-i18next";
import {
  Email,
  Facebook,
  Instagram,
  LocationOnOutlined,
  Phone,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            py: 3,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Box sx={{ flex: 2 }}>
            <Box component={"img"} src={logo} sx={{ height: "70px" }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: 14,
                color: "background.default",
                lineHeight: 1.8,
              }}
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Divider
            orientation="horizontal"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              width: "100%",
            }}
          />
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
              <Box
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/#home")}
                  sx={{
                    cursor: "pointer",
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
                  component="div"
                  onClick={() => navigate("/#services")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.services")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/about")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.about")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/contact")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Divider
            orientation="horizontal"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              width: "100%",
            }}
          />
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
              <Box
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/services/1")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.aluminum")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/services/2")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.balcony")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/services/3")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.terrace")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/services/4")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
                    color: "background.default",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {t("footer.sliding")}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  onClick={() => navigate("/services/5")}
                  sx={{
                    fontSize: 14,
                    cursor: "pointer",
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Divider
            orientation="horizontal"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              width: "100%",
            }}
          />
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
                {t("footer.contactDetails")}
              </Typography>
              <Box
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone
                    fontSize="medium"
                    sx={{ color: "background.default" }}
                  />
                  <Typography
                    variant="body1"
                    component={"a"}
                    href="tel:+905338299257"
                    sx={{
                      fontSize: 14,
                      color: "background.default",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                  >
                    {t("footer.phone")}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Email
                    fontSize="medium"
                    sx={{ color: "background.default" }}
                  />
                  <Typography
                    variant="body1"
                    component={"a"}
                    href="#"
                    sx={{
                      fontSize: 14,
                      color: "background.default",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                  >
                    {t("footer.email")}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOnOutlined
                    fontSize="medium"
                    sx={{ color: "background.default" }}
                  />
                  <Typography
                    variant="body1"
                    component={"a"}
                    href="#"
                    sx={{
                      fontSize: 14,
                      color: "background.default",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                  >
                    {t("footer.address")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            py: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: 14, fontWeight: 500, color: "background.default" }}
          >
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 14, fontWeight: 500, color: "primary.main" }}
          >
            {t("footer.arcstack")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
