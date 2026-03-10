import { styled, Typography } from "@mui/material";
import { LogoContainer } from "../../components/Layout/Layout.styles";

export const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingLeft: 28,
  paddingBottom: 60,
  height: "100%",
});

export const EmailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 150,
});

export const EmailText = styled(Typography)({
  fontFamily: "Queering",
  fontSize: 96,
  fontWeight: 700,
  lineHeight: "83px",
  textDecoration: "underline",
  textDecorationThickness: 4,
  textUnderlineOffset: 12,
});

export const SocialsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  marginTop: 128,
});

export const FollowMeContainer = styled(LogoContainer)({
  paddingLeft: 12,
  paddingRight: 12,
  // Taking 8px from each side of the border, and 4px from the gap between text and border
  marginTop: 4,
  height: 34,
});
