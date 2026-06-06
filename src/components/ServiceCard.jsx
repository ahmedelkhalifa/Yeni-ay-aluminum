import React from "react";
import { getServices } from "../data/services";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { East } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ServiceCard = (props) => {
  const { t } = useTranslation();
  const service = getServices(t).find((service) => service.id === props.id);
  const Icon = service.icon;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        px: 3,
        pb: 3,
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        cursor: "pointer",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,

          backgroundImage:
            props.id === 1
              ? `linear-gradient(
              to right,
              rgba(17, 24, 39, 1),
              rgba(17, 24, 39, 0.4)
            ),
            url(${service.image})`
              : `linear-gradient(
              to top,
              rgba(17, 24, 39, 1),
              rgba(17, 24, 39, 0.5)
            ),
            url(${service.image})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          transition: "transform 0.4s ease",
        },

        "&:hover::before": {
          transform: "scale(1.08)",
        },
        transition: "0.3s ease",

        "&:hover": {
            transform: "translateY(-5px)"
        },

        display: "flex",
        alignItems: "flex-end",
      }}
      component={"label"}
      onClick={() => navigate(`/services/${service.id}`)}
    >
      <Box
        sx={{ width: { xs: "100%", md: service.id === 1 ? "50%" : "100%" }, zIndex: 10 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: service.id === 1 ? "column" : "row",
            gap: service.id === 1 ? 1 : 2,
            alignItems: service.id === 1 ? "flex-start" : "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: 0,
              width: 30,
              height: 2,
              bgcolor: "primary.main",
            },
          }}
        >
          <Box>
            <Icon fontSize={36} color="#FF6B00" />
          </Box>
          <Typography variant="h6" sx={{ color: "background.default" }}>
            {service.name}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "background.default", fontSize: 14, mt: 3 }}
        >
          {service.short}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "100%", md: "200px" },
            height: "50px",
            mt: 2,
            color: "background.default",
            borderColor: "background.default",
            display: { xs: "flex", md: service.id === 1 ? "flex" : "none" },
            position: "relative",
            transition: "all 0.3s ease",
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "100%",
                bgcolor: "background.default",
                zIndex: -1,
                transition: "all 0.3s ease"
            },
            "&:hover::before": {
                width: "100%"
            },
            "&:hover": {
                color: "text.primary"
            }
          }}
          endIcon={<East />}
          onClick={() => navigate(`/services/${service.id}`)}
        >
          {t("services.button")}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceCard;
