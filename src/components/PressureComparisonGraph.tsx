import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Paper, Typography, Box, useTheme } from "@mui/material";
import { useQuery } from "react-query";
import { fetchData } from "../services/fetchData";
import { transformData } from "../utils/transformData";
import { aggregateData } from "../utils/aggregateData";
import { ApiData, ChartData } from "../types/dataModels";

const PressureComparisonGraph = () => {
  const theme = useTheme();
  const {
    data: apiData,
    isLoading,
    error,
  } = useQuery<ApiData, Error>("pressureData", fetchData);
  const [processedData, setProcessedData] = useState<ChartData[]>([]);

  useEffect(() => {
    if (!apiData) return;

    // merge tubing and casing pressures with explicit typing
    const processAndMergeData = () => {
      const transformedTubing = transformData(
        apiData,
        "timestamp",
        "tubing_pressure",
        "tubingPressure",
      );
      const aggregatedTubing = aggregateData(
        transformedTubing,
        50,
        "tubingPressure",
      ).map((item) => ({
        ...item,
        tubingPressure: Math.round((item.tubingPressure as number) * 100) / 100,
      }));

      const transformedCasing = transformData(
        apiData,
        "timestamp",
        "casing_pressure",
        "casingPressure",
      );
      const aggregatedCasing = aggregateData(
        transformedCasing,
        50,
        "casingPressure",
      ).map((item) => ({
        ...item,
        casingPressure: Math.round((item.casingPressure as number) * 100) / 100,
      }));

      const combinedData = aggregatedTubing.map((item, index) => ({
        ...item,
        casingPressure: aggregatedCasing[index]?.casingPressure ?? 0,
      }));

      setProcessedData(combinedData);
    };

    processAndMergeData();
  }, [apiData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Paper
      sx={{
        p: 2,
        m: 1,
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      }}
      elevation={3}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Tubing vs. Casing Pressure Over Time
      </Typography>
      <Box sx={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={processedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fill: theme.palette.text.secondary }}
            />
            <YAxis tick={{ fill: theme.palette.text.secondary }} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="tubingPressure"
              stroke={"#FF204E"}
              fill={"#FF204E"}
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="casingPressure"
              stroke={"blue"}
              fill={"blue"}
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PressureComparisonGraph;
