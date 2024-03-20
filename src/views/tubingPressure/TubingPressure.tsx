import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const TubingPressure = () => {
  return (
    <Box>
      <Header title="Tubing Pressure" />
      <TubingPressureGraph />
    </Box>
  );
};

export default TubingPressure;
