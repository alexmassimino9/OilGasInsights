import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";
interface Props {}

const TubingPressure = (props: Props) => {
  return (
    <Box>
      <Header title="Tubing Pressure" />
      <TubingPressureGraph />
    </Box>
  );
};

export default TubingPressure;
