import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { CustomTooltip } from "../views/tubingPressure"; // Ensure this is the correct path
import { Paper, Typography, Box, useTheme } from "@mui/material";
import Config from "../config"; // Ensure this is the correct path
import { tokens } from "../theme";

interface ConfigStructure {
  headers: string[];
  units_of_measure: string[];
  data: number[][];
}

interface ChartData {
  timestamp: string;
  tubingPressure: number;
}
const aggregateData = (data: ChartData[], maxPoints: number): ChartData[] => {
  const interval = Math.ceil(data.length / maxPoints);
  return data.reduce<ChartData[]>((acc, curr, index) => {
    if (index % interval === 0) {
      const end =
        index + interval < data.length ? index + interval : data.length;
      let sum = 0;
      for (let i = index; i < end; i++) {
        sum += data[i].tubingPressure;
      }
      const avg = sum / (end - index);
      acc.push({ timestamp: curr.timestamp, tubingPressure: avg });
    }
    return acc;
  }, []);
};

const TubingPressureGraph: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data: ChartData[] = useMemo(() => {
    const configData: ConfigStructure = Config.data as ConfigStructure;
    const timestampIndex = configData.headers.indexOf("timestamp");
    const tubingPressureIndex = configData.headers.indexOf("tubing_pressure");

    const rawData: ChartData[] = configData.data[timestampIndex].map(
      (time, index) => ({
        timestamp: new Date(time * 1000).toLocaleString("en-US", {
          hour12: false,
        }),
        tubingPressure: configData.data[tubingPressureIndex][index],
      }),
    );

    return aggregateData(rawData, 500);
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
      elevation={3}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{
          color: colors.green[500],
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        Tubing Pressure Over Time
      </Typography>

      <Box sx={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Brush
              dataKey="timestamp"
              height={30}
              stroke={colors.mirage[300]}
            />
            <XAxis
              dataKey="timestamp"
              tick={{
                fill: colors.grey[900],
                fontSize: 10,
              }}
              tickFormatter={(timestamp) =>
                new Date(timestamp).toLocaleTimeString("en-US", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
              angle={-45}
              textAnchor="end"
              height={40}
            />

            <YAxis
              tick={{
                fill: colors.grey[900],
              }}
              label={{
                value: "Pressure (psi)",
                angle: -90,
                position: "insideLeft",
                fill: colors.green[500],
                fontSize: "1rem",
              }}
            />
            <CartesianGrid stroke={"none"} color={colors.grey[100]} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="tubingPressure"
              stroke={colors.green[700]}
              strokeWidth={2}
              activeDot={{ r: 6, fill: colors.tasman[100] }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default TubingPressureGraph;
