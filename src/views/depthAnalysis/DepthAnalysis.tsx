import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const DepthAnalysis = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="DepthAnalysis" />
      <TubingPressureGraph />
    </Box>
  );
};

export default DepthAnalysis;
