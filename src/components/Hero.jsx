import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import {
  ApartmentOutlined,
  ContactPage,
  East,
  GppGoodOutlined,
  Phonelink,
  PhonelinkRing,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import FeaturesPaper from "./FeaturesPaper.jsx";

const Hero = (props) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        //     backgroundImage: {
        //       xs: `linear-gradient(
        //     to bottom,
        //     rgba(248, 249, 251,1) 0%,
        //     rgba(248, 249, 251,0.95) 60%,
        //     rgba(248, 249, 251,0.85) 85%,
        //     rgba(248, 249, 251, 0.8) 100%
        //   ), url(${props.image})`,
        //       md: "none",
        //     },

        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: { xs: 3, md: 0 },
          pl: { xs: 3, md: 8 },
          m: "auto 0",
          py: { xs: 0, md: 0 },
        }}
      >
        <Box
          sx={{
            fontSize: 16,
            color: "primary.main",
            pl: 2,
            fontWeight: 500,
            letterSpacing: 3,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "3px",
              bgcolor: "primary.main",
            },
          }}
        >
          {props.top}
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              display: "inline-block",
              mt: 2,
              fontSize: { xs: "48px", md: "64px" },
            }}
          >
            {props.title1}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              color: "primary.main",
              position: "relative",
              "&::after": {
                content: '""',
                width: "80px",
                height: "3px",
                bgcolor: "primary.main",
                position: "absolute",
                bottom: -15,
                left: 0,
              },
            }}
          >
            {props.title2}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "100%", md: "80%" },
            fontWeight: 500,
            color: "text.secondary",
            mt: 5,
          }}
        >
          {props.sub}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            mt: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "50px",
              fontWeight: 500,
              borderRadius: 0,
            }}
            startIcon={<PhonelinkRing />}
          >
            {t("hero.quoteBtn")}
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "200px",
              height: "50px",
              fontWeight: 500,
              borderRadius: 0,
              borderWidth: 2,
              borderColor: "grey.400",
              color: "text.primary",
            }}
            endIcon={<East />}
          >
            {t("hero.contactBtn")}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1.2,
          overflow: "hidden",
          borderBottomRightRadius: { xs: 100, md: 0 },
          borderBottomLeftRadius: { xs: 100, md: 0 },
          position: "relative",
          display: { xs: "none", md: "block" },

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 1,

            background: (theme) => ({
              xs: "none",
              md: `linear-gradient(
          to right,
          ${theme.palette.background.default} 0%,
          transparent 50%
        )`,
            }),
          },
        }}
      >
        <Box
          component={"img"}
          src={props.image}
          sx={{
            width: "100%",
            height: { xs: "100%", md: "100%" },
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: { xs: "block", md: "none" },
        }}
      >
        <Box
          component="img"
          src={props.image}
          sx={{
            width: "100%",
            height: 260,
            objectFit: "cover",
          }}
        />

        {/* Arc */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },

            position: "absolute",
            bottom: -80,
            left: "-10%",
            width: "120%",
            height: 160,

            bgcolor: "background.default",

            borderTopLeftRadius: "50%",
            borderTopRightRadius: "50%",

            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
