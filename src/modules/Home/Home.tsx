import { Button, Typography } from "@mui/material";
import { HomeIcon } from "./assets/HomeIcon";
import {
  FooterContainer,
  MainContainer,
  Root,
  TitleContainer,
} from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routes";

export const Home = () => {
  const navigate = useNavigate();
  const redirectToAbout = () => navigate(AppRoutes.ABOUT);

  return (
    <Root>
      <MainContainer>
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
      </MainContainer>
      <FooterContainer>
        <Button variant="outlined" onClick={redirectToAbout}>
          Page #1
        </Button>
        <Button variant="outlined">Page #2</Button>
        <Button variant="outlined">Page #3</Button>
      </FooterContainer>
    </Root>
  );
};
