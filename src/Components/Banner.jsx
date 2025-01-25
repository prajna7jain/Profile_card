import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png";
import middle from './middle.jpg'
const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundImage:`URL(${middle})`
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Foodie
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              Get to know your favorite recepies
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
