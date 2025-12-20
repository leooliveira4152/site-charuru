import { Button } from "@mui/material";
import { HomeIcon } from "./assets/HomeIcon";
import {
  FooterContainer,
  MainContainer,
  Root,
  TitleContainer,
  TitleText,
} from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routes";

// TODO - Add eslint

export const Home = () => {
  const navigate = useNavigate();
  const redirectToAbout = () => navigate(AppRoutes.ABOUT);

  return (
    <Root>
      <MainContainer>
        <HomeIcon />
        <TitleContainer>
          <TitleText>SEIGI</TitleText>
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
