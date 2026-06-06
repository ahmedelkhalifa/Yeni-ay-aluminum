import { Box, Typography } from "@mui/material";
import React from "react";


const ClassicCard = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: props.variant === "row" ? "row" : "column",
        alignItems: props.variant === "row" ? "center" : "center",
        gap: 2
      }}
    >
      <Box
        sx={{
          width: "50px",
          height: "50px",
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.icon}
      </Box>
      <Box sx={{flex: 1}}>
        <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 600 }}>
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 10, fontWeight: 500, color: "text.secondary" }}
        >
          {props.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassicCard;
