import { Paper, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { tokens } from "../theme";
const PressureGauge = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    { name: "Tubing", value: 80, color: colors.green[500] },
    { name: "Casing", value: 45, color: colors.purple[500] },
    { name: "Empty", value: 125 - 80 - 45, color: theme.palette.grey[500] },
  ];

  const totalPossiblePressure = 125;
  const cx = 150;
  const cy = 150;
  const iR = 60;
  const oR = 100;

  // needle props
  const needleValue = 80;
  const needleColor = colors.mirage[900];

  // Calculate needle position
  const needleLength = oR - iR;
  const angle = (needleValue / totalPossiblePressure) * 360; // Full circle for gauge
  const endAngleRad = (angle * Math.PI) / 180;
  const needleX = cx + needleLength * Math.cos(Math.PI - endAngleRad);
  const needleY = cy + needleLength * Math.sin(Math.PI - endAngleRad);

  return (
    <Paper
      style={{ padding: theme.spacing(3), margin: theme.spacing(3) }}
      elevation={3}
    >
      <Typography
        variant="h6"
        style={{
          marginBottom: theme.spacing(2),
          color: theme.palette.text.primary,
        }}
      >
        Pressure Gauge
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            startAngle={90}
            endAngle={-270}
            paddingAngle={5}
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <line
            x1={cx}
            y1={cy}
            x2={needleX}
            y2={needleY}
            stroke={needleColor}
            strokeWidth="2"
          />
          <circle cx={cx} cy={cy} r="5" fill={needleColor} />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default PressureGauge;
