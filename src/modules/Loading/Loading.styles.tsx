import { styled, Typography } from "@mui/material";
import { HOME_ICON_SIZE } from "../../assets/HomeIcon";

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
  gap: 16,
});

export const TitleContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "4.5px solid #fff",
  borderRadius: 4,
  boxSizing: "border-box",

  height: HOME_ICON_SIZE,
  width: 140,
});

export const TitleText = styled(Typography)({
  fontFamily: "Queering",
  fontWeight: 700,
  lineHeight: "normal",
  fontSize: 48,
});

export const FooterContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});
