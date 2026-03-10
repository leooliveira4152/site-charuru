import { Button } from "@mui/material";
import { HomeIcon } from "../../assets/HomeIcon";
import {
  FooterContainer,
  MainContainer,
  Root,
  TitleContainer,
  TitleText,
} from "./Loading.styles";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routes";

// TODO - Add eslint
// TODO - Loading is not implemented yet (loades are too fast to see the loading screen, need to add some delay to test it)

export const Loading = () => {
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
