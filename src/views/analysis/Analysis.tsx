import { Header, PressureComparisonGraph } from "../../components";
import { Box } from "@mui/material";

const Analysis = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="Analysis" />
      <PressureComparisonGraph />
    </Box>
  );
};

export default Analysis;
