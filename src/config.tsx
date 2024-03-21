import {
  Dashboard as DashboardIcon,
  Analytics,
  Insights,
  TrendingDown,
  Troubleshoot,
} from "@mui/icons-material";
import logo from "./assets/logo.png";
const Config = {
  SIDEBAR_ITEMS: [
    {
      id: 1,
      page: "Dashboard",
      url: "/",
      icon: <DashboardIcon />,
      description: "Overview of key metrics and performance indicators.",
    },
    {
      id: 2,
      page: "Tubing Pressure",
      url: "/tubing-pressure",
      icon: <Analytics />,
      description:
        "Visualizations: Line charts displaying tubing pressure over time, with options to filter by time range (e.g., last 24 hours, last week, custom range). Analysis Tools: Allow users to overlay other data types (e.g., depth) on the chart for correlation analysis.",
    },
    {
      id: 3,
      page: "Casing Pressure",
      url: "/casing-pressure",
      icon: <Insights />,
      description:
        "Visualizations: Similar to the Tubing Pressure Page, focused on casing pressure. Provide visual comparisons between tubing and casing pressures over selected time periods. Features: Highlight anomalies or significant changes, with tooltips or annotations explaining possible reasons or suggestions for further investigation.",
    },
    {
      id: 4,
      page: "Depth Analysis",
      url: "/depth-analysis",
      icon: <TrendingDown />,
      description:
        "Purpose: Analyze changes in depth over time, which could be related to drilling or operational activities. Visualizations: Graph depth over time, potentially as a scatter plot or line chart, with detailed zoom options to inspect changes closely.",
    },
    {
      id: 5,
      page: "Combined Analysis",
      url: "/analysis",
      icon: <Troubleshoot />,
      description:
        "Integration of multiple data sources and analyses for comprehensive insights.",
    },
  ],
  DRAWER_WIDTH: 240,
  LOGO: logo,
  data: {
    headers: ["timestamp", "depth", "tubing_pressure", "casing_pressure"],
    units_of_measure: ["unix_seconds", "feet", "psi", "psi"],
    data: [
      [
        1710126750, 1710126755, 1710126760, 1710126765, 1710126770, 1710126775,
        1710126780, 1710126785, 1710126790,
      ],
      [
        5449.5, 5449.5, 5449.5, 5449.5, 5449.5, 5449.5, 5449.5, 5449.5, 5449.5,
        5449.5, 5449.5, 5481, 5481, 5481, 5481, 5481, 5481, 5481, 5481, 5481,
      ],
      [
        131.625782, 121.531915, 124.483104, 129.057572, 124.347935, 122.618273,
        122.823529, 124.987484, 120.809762, 122.520651, 119.550688, 127.453066,
      ],
      [
        3326.275344, 3322.428035, 3324.614518, 3319.709637, 3320.428035,
        3314.939925, 3311.299124, 3270.73592, 3266.428035, 3271.165207,
      ],
    ],
  },
};

export default Config;
