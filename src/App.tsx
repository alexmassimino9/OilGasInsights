import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Dashboard, Sidebar, Topbar} from './views'
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [theme, colorMode] = useMode();
  return (
<>
<ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="app">
    <Sidebar />
    <main className="content">
    <Topbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </main>
  </div>
</ThemeProvider>
</ColorModeContext.Provider>
</>
  )
}

export default App
