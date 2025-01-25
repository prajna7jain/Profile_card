import { Box, Typography } from "@mui/material";
import React from "react";
import pic from './pic1.jpeg'
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url(${pic})`
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: "linear-gradient(144deg, #8000ff4a, #00ff7178)",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
          Welcome to
Recipe Book
 website
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "white" }}
        >
          Food is the best   therapy
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
         
        </Typography>
      </Box>
    </Box>
  );
}
