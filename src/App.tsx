import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Dashboard,
  Sidebar,
  Topbar,
  TubingPressure,
  CasingPressure,
  DepthAnalysis,
  Analysis,
} from "./views";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 60, // 1 hour
      refetchInterval: 1000 * 30, // 30 seconds
      refetchOnWindowFocus: false,
      retry: 2,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    // Pass the instance to the client prop
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tubing-pressure" element={<TubingPressure />} />
                <Route path="/casing-pressure" element={<CasingPressure />} />
                <Route path="/depth-analysis" element={<DepthAnalysis />} />
                <Route path="/analysis" element={<Analysis />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
