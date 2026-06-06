import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import CTACard from "../components/CTACard";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 16,
                    color: "primary.main",
                    letterSpacing: 3,
                    position: "relative",
                    fontWeight: 500,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: 0,
                      width: 50,
                      height: 2,
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  {t("services.top")}
                </Typography>
                <Typography variant="h3" sx={{ mt: 3 }}>
                  {t("services.title")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    fontSize: 14,
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {t("services.desc")}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: "280px" }}>
            <ServiceCard id={2} />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: "280px" }}>
            <ServiceCard id={3} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "280px" }}>
            <ServiceCard id={1} />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: "280px" }}>
            <ServiceCard id={4} />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: "280px" }}>
            <ServiceCard id={5} />
          </Grid>
        </Grid>
        <CTACard />
      </Container>
    </Box>
  );
};

export default Services;
