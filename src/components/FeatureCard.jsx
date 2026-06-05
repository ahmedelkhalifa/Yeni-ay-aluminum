import { Box, Typography } from "@mui/material";
import React from "react";

const FeatureCard = (props) => {
  return (
    <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: "60px",
          height: "60px",
          border: "2px solid",
          borderColor: "primary.main",
          color: "primary.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.icon}
      </Box>
      <Box sx={{flex: 1}}>
        <Typography variant="h4">{props.number}</Typography>
        <Typography variant="body1" sx={{fontSize: 12, fontWeight: 500}}>{props.text}</Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
