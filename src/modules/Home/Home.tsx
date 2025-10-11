import { Box, Typography } from "@mui/material";
import { HomeIcon } from "./assets/HomeIcon";
import { TitleContainer } from "./Home.styles";

export const Home = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={4.5}>
      <HomeIcon />
      <TitleContainer>
        <Typography
          fontFamily="Queering"
          fontWeight="700"
          lineHeight="normal"
          variant="h1"
        >
          SEIGI
        </Typography>
      </TitleContainer>
      {/* <Home /> */}
    </Box>
  );
};
