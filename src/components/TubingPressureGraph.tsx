import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "../views/tubingPressure"; // Adjust import path as necessary
import { Paper, Typography, Box, useTheme } from "@mui/material";
import Config from "../config"; // Adjust import path as necessary

// Define interfaces for the expected structure of Config.data
interface ConfigStructure {
  headers: string[];
  units_of_measure: string[];
  data: number[][];
}

interface ChartData {
  timestamp: string;
  tubingPressure: number;
}

const TubingPressureGraph: React.FC = () => {
  const theme = useTheme();
  const data: ChartData[] = useMemo(() => {
    const configData: ConfigStructure = Config.data as ConfigStructure;

    const timestampIndex = configData.headers.indexOf("timestamp");
    const tubingPressureIndex = configData.headers.indexOf("tubing_pressure");

    return configData.data[timestampIndex].map((time, index) => ({
      timestamp: new Date(time * 1000).toLocaleString("en-US", {
        hour12: false,
      }),
      tubingPressure: configData.data[tubingPressureIndex][index],
    }));
  }, []);

  return (
    <Paper sx={{ p: 2, m: 1, overflow: "hidden" }} elevation={3}>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Tubing Pressure Over Time
      </Typography>
      <Box sx={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorPressure" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
              tickFormatter={(timestamp) =>
                new Date(timestamp).toLocaleTimeString("en-US", {
                  hour12: true,
                  timeStyle: "short",
                })
              }
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              label={{
                value: "Pressure (psi)",
                angle: -90,
                position: "insideLeft",
                fill: theme.palette.text.secondary,
              }}
            />
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.palette.divider}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="tubingPressure"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
              fillOpacity={1}
              fill="url(#colorPressure)"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default TubingPressureGraph;
