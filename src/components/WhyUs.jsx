import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ClassicCard from "./ClassicCard";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";

const WhyUs = () => {
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
        {t("whyUs.title")}
      </Typography>
      <Grid container spacing={3} sx={{ mt: 8 }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("whyUs.1.title")}
            desc={t("whyUs.1.desc")}
            icon={<IoShieldCheckmarkOutline fontSize={36} color="#FF6B00" />}
            variant="column"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("whyUs.2.title")}
            desc={t("whyUs.2.desc")}
            icon={<FaMedal fontSize={36} color="#FF6B00" />}
            variant="column"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("whyUs.3.title")}
            desc={t("whyUs.3.desc")}
            icon={<AiOutlineTeam fontSize={36} color="#FF6B00" />}
            variant="column"
            bg={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ClassicCard
            title={t("whyUs.4.title")}
            desc={t("whyUs.4.desc")}
            icon={<CiClock2 fontSize={36} color="#FF6B00" />}
            variant="column"
            bg={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
