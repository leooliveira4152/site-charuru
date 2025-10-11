import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
