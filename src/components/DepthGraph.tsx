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
import { CustomTooltip } from "../views/tubingPressure";
import { Paper, Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useQuery } from "react-query";
import { fetchData } from "../services/fetchData";
import { transformData } from "../utils/transformData";
import { aggregateData } from "../utils/aggregateData";
import { ApiData } from "../types/dataModels";

const DepthOverTimeGraph: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading, error } = useQuery<ApiData, Error>(
    "depthData",
    fetchData,
  );

  const processedData = useMemo(() => {
    if (!data) return [];

    const transformed = transformData(data, "timestamp", "depth", "depth");
    return aggregateData(transformed, 50, "depth");
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Fetching data: {error.message}</div>;

  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        overflow: "hidden",
        backgroundColor: colors.mirage[400],
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
        Depth Over Time
      </Typography>

      <Box sx={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={processedData}>
            <Brush dataKey="name" height={30} stroke={colors.mirage[300]} />
            <XAxis
              dataKey="name"
              tick={{
                fill: theme.palette.primary.main,
                fontSize: 10,
              }}
              tickFormatter={(unixTime) =>
                new Date(unixTime).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              }
              angle={-45}
              textAnchor="end"
              height={40}
            />
            <YAxis
              tick={{
                fill: colors.tasman[900],
              }}
              label={{
                value: "Depth (units)",
                angle: -90,
                position: "insideLeft",
                fill: theme.palette.primary.main,
                fontSize: "1rem",
              }}
            />
            <CartesianGrid stroke={"none"} color={theme.palette.primary.main} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="depth"
              stroke="#ffd34a"
              strokeWidth={2}
              activeDot={{ r: 6, fill: "#0056b3" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default DepthOverTimeGraph;
