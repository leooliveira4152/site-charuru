import { styled, Typography } from "@mui/material";
import { HEADER_HORIZONTAL_PADDING } from "../../Layout.styles";

export const Root = styled("div")({
  // Forcing the menu to be on the center of the screen
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",

  display: "flex",
  flexDirection: "column",
  paddingLeft: HEADER_HORIZONTAL_PADDING,
});

export const MenuItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 40,
  ":hover": { cursor: "pointer" },
}));

type MenuTextProps = { $isHovered: boolean };
export const MenuText = styled(Typography)<MenuTextProps>(({ $isHovered }) => ({
  fontFamily: "Queering",
  fontWeight: 700,
  fontSize: 96,
  lineHeight: "100%",
  width: "fit-content",
  transformOrigin: "left",

  ...($isHovered && {
    color: "#F23700", // TODO - Place in a common file
  }),
}));
