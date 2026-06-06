import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiSearchAlt } from "react-icons/bi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaBuilding } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Card = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: { xs: "100%", md: "100%" },
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "80px",
          height: "80px",
          borderRadius: 6,
          boxShadow: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2
        }}
      >
        {props.icon}
      </Box>
      <Typography
        variant="body1"
        sx={{ color: "primary.main", fontWeight: 700, fontSize: 18 }}
      >
        {props.number}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.primary", fontWeight: 700, fontSize: 18 }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
        }}
      >
        {props.desc}
      </Typography>
    </Box>
  );
};

const Steps = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -10,
            height: 2,
            width: 50,
            transform: "translateX(-50%)",
            bgcolor: "primary.main",
          },
        }}
      >
        {t("steps.title")}
      </Typography>
      <Box sx={{ position: "relative", mt: 8 }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 40, // center of the icon box
            left: "10%",
            right: "10%",
            height: "2px",
            bgcolor: "#FF6B00",
            zIndex: 0,
          }}
        />
        <Grid container spacing={8} sx={{ mt: 8, justifyContent: "center", zIndex: 100 }}>
          <Grid size={{ xs: 6, md: 12 / 5 }}>
            <Card
              icon={<BiSearchAlt fontSize={36} color="#FF6B00" />}
              number={"01"}
              title={t("steps.1.title")}
              desc={t("steps.1.desc")}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 12 / 5 }}>
            <Card
              icon={<TbRulerMeasure fontSize={36} color="#FF6B00" />}
              number={"02"}
              title={t("steps.2.title")}
              desc={t("steps.2.desc")}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 12 / 5 }}>
            <Card
              icon={<FaBuilding fontSize={36} color="#FF6B00" />}
              number={"03"}
              title={t("steps.3.title")}
              desc={t("steps.3.desc")}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 12 / 5 }}>
            <Card
              icon={
                <HiOutlineWrenchScrewdriver fontSize={36} color="#FF6B00" />
              }
              number={"04"}
              title={t("steps.4.title")}
              desc={t("steps.4.desc")}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 12 / 5 }}>
            <Card
              icon={
                <IoIosCheckmarkCircleOutline fontSize={36} color="#FF6B00" />
              }
              number={"05"}
              title={t("steps.5.title")}
              desc={t("steps.5.desc")}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Steps;
