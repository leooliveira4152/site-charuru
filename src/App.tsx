import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { Box } from "@mui/material";
import { About } from "./modules/About/About";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <Box height="100vh" maxHeight="100vh" overflow="hidden">
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
