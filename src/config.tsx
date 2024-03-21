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
  MAX_POINTS: 200,
  LOGO: logo,
  mockURL: "http://localhost:3500/0",
  API_URL:
    "https://api.boresite.io/storage/v1/object/public/assessment/data.json#",
};

export default Config;
