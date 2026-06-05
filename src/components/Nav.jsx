import { Language, Menu, PhonelinkRing } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import i18next from "i18next";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Nav = (props) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", py: 1, bgcolor: "background.paper" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box component={"img"} src={logo} sx={{ height: "80px" }} />
          {/* <Typography variant="h5" sx={{ color: "text.primary" }}>
            Yeni Ay Aluminum
          </Typography> */}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              color: props.active === "home" ? "primary.main" : "text.primary",
              position: "relative",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": { color: "primary.main" },
              "&::after":
                props.active === "home"
                  ? {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "100%",
                      height: 3,
                      backgroundColor: "primary.main",
                    }
                  : {},
            }}
          >
            {t("nav.home")}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#services"
            sx={{
              color:
                props.active === "services" ? "primary.main" : "text.primary",
              position: "relative",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": { color: "primary.main" },
              "&::after":
                props.active === "services"
                  ? {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "100%",
                      height: 3,
                      backgroundColor: "primary.main",
                    }
                  : {},
            }}
          >
            {t("nav.services")}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#about"
            sx={{
              color: props.active === "about" ? "primary.main" : "text.primary",
              position: "relative",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": { color: "primary.main" },
              "&::after":
                props.active === "about"
                  ? {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "100%",
                      height: 3,
                      backgroundColor: "primary.main",
                    }
                  : {},
            }}
          >
            {t("nav.about")}
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="#contact"
            sx={{
              color:
                props.active === "contact" ? "primary.main" : "text.primary",
              position: "relative",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": { color: "primary.main" },
              "&::after":
                props.active === "contact"
                  ? {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "100%",
                      height: 3,
                      backgroundColor: "primary.main",
                    }
                  : {},
            }}
          >
            {t("nav.contact")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              color: "text.primary",
            }}
          >
            <IconButton
              onClick={() =>
                i18next.language === "en"
                  ? i18next.changeLanguage("tr")
                  : i18next.changeLanguage("en")
              }
            >
              <Language sx={{ color: "text.primary" }} />
            </IconButton>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              {i18next.language}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            height: "50px",
            width: "200px",
            fontWeight: 600,
            display: { xs: "none", md: "flex" },
          }}
          startIcon={<PhonelinkRing />}
        >
          {t("nav.button")}
        </Button>
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <Menu sx={{ color: "text.primary" }} />
        </IconButton>
      </Container>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
        <Box
          sx={{
            p: 5,
            bgcolor: "background.paper",
            borderRadius: 0,
            width: "200px",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box>
              <Box component={"img"} src={logo} sx={{ height: "80px" }} />
              {/* <Typography variant="h5" sx={{ color: "text.primary" }}>
            Yeni Ay Aluminum
          </Typography> */}
            </Box>
            <Typography
              variant="h6"
              component="a"
              href="#home"
              sx={{
                color:
                  props.active === "home" ? "primary.main" : "text.primary",
                position: "relative",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&::after":
                  props.active === "home"
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: 3,
                        backgroundColor: "primary.main",
                      }
                    : {},
              }}
            >
              {t("nav.home")}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#services"
              sx={{
                color:
                  props.active === "services" ? "primary.main" : "text.primary",
                position: "relative",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&::after":
                  props.active === "services"
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: 3,
                        backgroundColor: "primary.main",
                      }
                    : {},
              }}
            >
              {t("nav.services")}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#about"
              sx={{
                color:
                  props.active === "about" ? "primary.main" : "text.primary",
                position: "relative",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&::after":
                  props.active === "about"
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: 3,
                        backgroundColor: "primary.main",
                      }
                    : {},
              }}
            >
              {t("nav.about")}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#contact"
              sx={{
                color:
                  props.active === "contact" ? "primary.main" : "text.primary",
                position: "relative",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&::after":
                  props.active === "contact"
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "100%",
                        height: 3,
                        backgroundColor: "primary.main",
                      }
                    : {},
              }}
            >
              {t("nav.contact")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                color: "text.primary",
              }}
            >
              <IconButton
                onClick={() =>
                  i18next.language === "en"
                    ? i18next.changeLanguage("tr")
                    : i18next.changeLanguage("en")
                }
              >
                <Language sx={{ color: "text.primary" }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {i18next.language}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Nav;
