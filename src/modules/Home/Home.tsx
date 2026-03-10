import { Box } from "@mui/material";
import { Layout } from "../../components/Layout/Layout";

export const Home = () => {
  return (
    <Layout source="home">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        fontSize={200}
      >
        Home Module
      </Box>
    </Layout>
  );
};
