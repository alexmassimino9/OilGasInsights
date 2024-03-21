import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const CasingPressure = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="Casing Pressure" />
      <TubingPressureGraph />
    </Box>
  );
};

export default CasingPressure;
