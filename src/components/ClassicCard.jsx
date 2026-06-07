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
        gap: 2,
        p: props.bg === true ? 3 : 0,
        bgcolor: props.bg === true ? "background.paper" : "",
        boxShadow: props.bg === true ? 10 : 0,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          width: props.variant === "row" ? "50px" : "70px",
          height: props.variant === "row" ? "50px" : "70px",
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
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: props.variant === "row" ? 14 : 18,
            fontWeight: 600,
            textAlign: props.variant === "row" ? "left" : "center",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: props.variant === "row" ? 10 : 12,
            fontWeight: 500,
            color: "text.secondary",
            mt: props.variant === "row" ? 0 : 1,
            textAlign: props.variant === "row" ? "left" : "center",
          }}
        >
          {props.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassicCard;
