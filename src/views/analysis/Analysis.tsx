import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const Analysis = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="Analysis" />
      <TubingPressureGraph />
    </Box>
  );
};

export default Analysis;
