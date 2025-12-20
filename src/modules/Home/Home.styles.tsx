import { styled } from "@mui/material";

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

  border: "9px solid #fff",
  borderRadius: 8,
  boxSizing: "border-box",

  height: 122, // Should match HomeIcon height
  width: 240,
});

export const FooterContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});
