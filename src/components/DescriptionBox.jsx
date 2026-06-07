import { Box, Typography } from "@mui/material";
import React from "react";
import { getServices } from "../data/services";
import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

const DescriptionBox = (props) => {
  const { t } = useTranslation();
  const service = getServices(t).find((service) => service.id === props.id);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 20,
        alignItems: "center",
        gap: 0,
      }}
    >
      <Box sx={{ flex: 1, overflow: "hidden", borderRadius: 2, width: "100%", height: "100%" }}>
        <Box
          component={"img"}
          src={service.image2}
          sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
        />
      </Box>
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4">{service.explanation.question}</Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontWeight: 500, fontSize: 14, mt: 1, mb: 3 }}
        >
          {service.explanation.answer}
        </Typography>
        {service.bullets.map((bullet, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
          >
            <FaCircleCheck fontSize={16} color="#FF6B00" />
            <Typography variant="body1" sx={{fontSize: 14, color: "primary.main", fontWeight: 500}}>{bullet}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DescriptionBox;
