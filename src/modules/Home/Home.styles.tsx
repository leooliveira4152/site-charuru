import { styled, Typography } from "@mui/material";
import { HOME_ICON_SIZE } from "./assets/HomeIcon";

export const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 36,

  boxSizing: "border-box",
  height: "100%",
  padding: 24,
});

export const MainContainer = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 36,
});

export const TitleContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "9px solid #fff",
  borderRadius: 8,
  boxSizing: "border-box",

  height: HOME_ICON_SIZE,
  width: 240,
});

export const TitleText = styled(Typography)({
  fontFamily: "Queering",
  fontWeight: 700,
  lineHeight: "normal",
  fontSize: 90,
  paddingTop: 6,
  WebkitTextStroke: "1px #fff",
});

export const FooterContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});
