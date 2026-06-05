import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";
import {
  ApartmentOutlined,
  GppGoodOutlined,
  SentimentSatisfiedAltOutlined,
  SupportAgent,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const FeaturesPaper = () => {
    const {t} = useTranslation();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 5,
        borderRadius: 3,
        boxShadow: 20,
        zIndex: 100,
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FeatureCard
            icon={<ApartmentOutlined fontSize="large" />}
            number={"500+"}
            text={t("features.projects")}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FeatureCard
            icon={<GppGoodOutlined fontSize="large" />}
            number={"15+"}
            text={t("features.experience")}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FeatureCard
            icon={<SentimentSatisfiedAltOutlined fontSize="large" />}
            number={"100%"}
            text={t("features.happy")}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FeatureCard
            icon={<SupportAgent fontSize="large" />}
            number={"24/7"}
            text={t("features.support")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesPaper;
