import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiSearchAlt } from "react-icons/bi";
import ClassicCard from "./ClassicCard";
import { LuShieldCheck } from "react-icons/lu";
import { BsStack } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { East } from "@mui/icons-material";

const CTACard = () => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={5}
      sx={{
        width: "100%",
        mt: 3,
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        gap: 2,
        py: 2,
        px: 4,
        borderRadius: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <ClassicCard
          variant="row"
          title={t("cta.card.1.title")}
          desc={t("cta.card.1.desc")}
          icon={<BiSearchAlt fontSize={24} color="#FF6B00" />}
        />
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ display: { xs: "block", md: "none" }, borderWidth: 1.5 }}
      />
      <Box sx={{ flex: 1 }}>
        <ClassicCard
          variant="row"
          title={t("cta.card.2.title")}
          desc={t("cta.card.2.desc")}
          icon={<LuShieldCheck fontSize={24} color="#FF6B00" />}
        />
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ display: { xs: "block", md: "none" }, borderWidth: 1.5 }}
      />
      <Box sx={{ flex: 1 }}>
        <ClassicCard
          variant="row"
          title={t("cta.card.3.title")}
          desc={t("cta.card.3.desc")}
          icon={<BsStack fontSize={24} color="#FF6B00" />}
        />
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ display: { xs: "block", md: "none" }, borderWidth: 1.5 }}
      />
      <Box sx={{ flex: 1 }}>
        <ClassicCard
          variant="row"
          title={t("cta.card.4.title")}
          desc={t("cta.card.4.desc")}
          icon={<CiClock2 fontSize={24} color="#FF6B00" />}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "fit-content" } }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", md: "150px" },
            height: "50px",
            color: "background.default",
            mt: { xs: 2, md: 0 },
          }}
          endIcon={<East />}
          onClick={() => {
            window.open("tel:+905338299257");
          }}
        >
          {t("hero.quoteBtn")}
        </Button>
      </Box>
    </Paper>
  );
};

export default CTACard;
