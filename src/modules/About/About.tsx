import { Box } from "@mui/material";
import { Layout } from "../../components/Layout/Layout";

export const About = () => {
  return (
    <Layout source="about">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        fontSize={200}
      >
        About Module
      </Box>
    </Layout>
  );
};
