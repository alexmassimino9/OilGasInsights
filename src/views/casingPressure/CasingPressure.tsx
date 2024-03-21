import { Header, CasingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const CasingPressure = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="Casing Pressure" />
      <CasingPressureGraph />
    </Box>
  );
};

export default CasingPressure;
