import { Box, Typography } from "@mui/material";
import { Layout } from "../../components/Layout/Layout";
import {
  EmailContainer,
  EmailText,
  FollowMeContainer,
  SocialsContainer,
  Wrapper,
} from "./Contact.styles";
import { TwitterIcon } from "../../assets/socials/TwitterIcon";
import { LinkedinIcon } from "../../assets/socials/LinkedinIcon";

export const Contact = () => {
  return (
    <Layout source="contact">
      <Wrapper>
        <Typography fontFamily="Queering" fontSize={96} lineHeight="83px">
          HIT ME UP AND LET'S
          <br />
          COOK SOME IDEAS!
        </Typography>

        <EmailContainer>
          <Typography fontFamily="Inter" fontWeight={700}>
            E-MAIL:
          </Typography>
          {/* TODO - Add mailto link */}
          <EmailText>SEIGISATO18@GMAIL.COM</EmailText>{" "}
        </EmailContainer>

        <SocialsContainer>
          <FollowMeContainer>
            <Typography fontFamily="Queering" fontSize={24} fontWeight={700}>
              FOLLOW ME!
            </Typography>
          </FollowMeContainer>
          <TwitterIcon />
          <LinkedinIcon />
        </SocialsContainer>
      </Wrapper>
    </Layout>
  );
};
