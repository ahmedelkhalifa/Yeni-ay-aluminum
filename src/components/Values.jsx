import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ClassicCard from "./ClassicCard";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { TbUserStar } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";

const Values = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
        {t("about.values.title")}
      </Typography>
      <Grid container spacing={3} sx={{ mt: 8 }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("about.values.1.title")}
            desc={t("about.values.1.text")}
            icon={<IoDiamondOutline fontSize={36} color="#FF6B00" />}
            variant="row"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("about.values.2.title")}
            desc={t("about.values.2.text")}
            icon={<IoShieldCheckmarkOutline fontSize={36} color="#FF6B00" />}
            variant="row"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("about.values.3.title")}
            desc={t("about.values.3.text")}
            icon={<TbUserStar fontSize={36} color="#FF6B00" />}
            variant="row"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("about.values.4.title")}
            desc={t("about.values.4.text")}
            icon={<FaRegHandshake fontSize={36} color="#FF6B00" />}
            variant="row"
            bg={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Values;
