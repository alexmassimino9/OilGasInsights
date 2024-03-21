import { Header, DepthGraph } from "../../components";
import { Box } from "@mui/material";

const DepthAnalysis = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="DepthAnalysis" />
      <DepthGraph />
    </Box>
  );
};

export default DepthAnalysis;
