import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { Box } from "@mui/material";
import { About } from "./modules/About/About";
import { AppRoutes } from "./routes/routes";
import { Contact } from "./modules/Contact/Contact";
import { Work } from "./modules/Work/Work";

function App() {
  return (
    <Box height="100vh" maxHeight="100vh" overflow="hidden">
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path={AppRoutes.WORK} element={<Work />} />
        <Route path={AppRoutes.CONTACT} element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
