import {
  CasingPressureGraph,
  Header,
  TubingPressureGraph,
  DepthGraph,
} from "../../components";
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      {/* Header */}
      <Header title="Dashboard" />

      {/* Grids & Charts */}
      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {/* Row 1 */}

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ width: "100%", flexGrow: 1 }}>
            <TubingPressureGraph />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ width: "100%", flexGrow: 1 }}>
            <CasingPressureGraph />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ width: "100%", flexGrow: 1 }}>
            <DepthGraph />
          </Box>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={4} md={4}>
          <TubingPressureGraph />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <TubingPressureGraph />
        </Grid>

        {/* Row 3: Insightful Row */}
        <Grid item xs={12}>
          <TubingPressureGraph />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
