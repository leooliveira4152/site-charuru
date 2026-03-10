import { styled, Typography } from "@mui/material";
import { HEADER_HORIZONTAL_PADDING } from "../../Layout.styles";

export const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingBottom: 54,
  paddingLeft: HEADER_HORIZONTAL_PADDING,
});

export const MenuItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 56,
  ":hover": { cursor: "pointer" },
}));

type MenuTextProps = { $isHovered: boolean };
export const MenuText = styled(Typography)<MenuTextProps>(({ $isHovered }) => ({
  fontFamily: "Queering",
  fontSize: 130,
  lineHeight: "105px", // More arbitrary values to match design
  letterSpacing: 3,
  width: "fit-content",
  transformOrigin: "left",

  ...($isHovered && {
    color: "#F23700", // TODO - Place in a common file
  }),
}));
