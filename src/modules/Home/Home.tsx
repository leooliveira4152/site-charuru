import { Button } from "@mui/material";
import { HomeIcon } from "../../assets/HomeIcon";
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

  return (
    <Root>
      <MainContainer>
        <HomeIcon />
        <TitleContainer>
          <TitleText>SEIGI</TitleText>
        </TitleContainer>
      </MainContainer>
      <FooterContainer>
        <Button variant="outlined" onClick={() => navigate(AppRoutes.ABOUT)}>
          About
        </Button>
        <Button variant="outlined" onClick={() => navigate(AppRoutes.WORK)}>
          Work
        </Button>
        <Button variant="outlined" onClick={() => navigate(AppRoutes.CONTACT)}>
          Contact
        </Button>
      </FooterContainer>
    </Root>
  );
};
