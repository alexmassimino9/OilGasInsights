import React from "react";
import { Header, TubingPressureGraph } from "../../components";
import { Box, Grid, Typography, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      {/* Header */}
      <Header title="Dashboard" />

      {/* Grids & Charts */}
      <Grid
        container
        spacing={4}
        sx={{ marginTop: "20px", border: "2px solid yellow" }}
      >
        {/* Row 1 */}
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 250,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Tubing Pressure
              </Typography>
              <Box sx={{ width: "100%", flexGrow: 1 }}>
                <TubingPressureGraph />
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Row 2 */}
        <Grid item xs={12} sm={4} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 250,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Tubing Pressure
            </Typography>
            <TubingPressureGraph />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 250,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Tubing Pressure
            </Typography>
            <TubingPressureGraph />
          </Paper>
        </Grid>

        {/* Row 3: Insightful Row */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Tubing Pressure Insights
            </Typography>
            <Box sx={{ width: "100%", minHeight: 300 }}>
              <TubingPressureGraph mode="insightful" />
            </Box>
            <Typography>
              Key Insights: Here you can add text or calculations that summarize
              the trends observed in the tubing pressure over time, note any
              anomalies, or compare current data with historical averages. This
              section can be dynamically generated based on the data.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
