import { Button, IconButton, styled, Typography } from "@mui/material";

// Some heights and widths are hardcoded here for simplicity (we don't need to make a scalable system for this project)
// When changing something check for the consistency

export const HEADER_CONTENT_HEIGHT = 59;
export const HEADER_HORIZONTAL_PADDING = 90;
const BACKGROUND_IMAGE_URL = `url("${process.env.PUBLIC_URL}/assets/about-bg.png")`;
type OpenMenuProps = { $menuIsOpen: boolean };

export const Root = styled("div")<OpenMenuProps>(({ theme, $menuIsOpen }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  backgroundSize: "cover",
  backgroundPosition: "center",

  height: "100%",
  boxSizing: "border-box",

  ...($menuIsOpen
    ? {
        // TODO - Filter is not perfect, improve it later
        backgroundImage:
          "linear-gradient(rgba(0, 32, 96, 0.5), rgba(0, 32, 96, 0.5)), " +
          BACKGROUND_IMAGE_URL,
      }
    : { backgroundImage: BACKGROUND_IMAGE_URL }),
}));

export const Header = styled("div")<OpenMenuProps>(
  ({ theme, $menuIsOpen }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,

    paddingTop: 66,
    paddingBottom: 55,
    paddingLeft: HEADER_HORIZONTAL_PADDING,
    paddingRight: HEADER_HORIZONTAL_PADDING,

    ...($menuIsOpen && {
      backgroundColor: "#15151F",
    }),
  })
);

// Logo container styles

// TODO - Overlapping with background image in lower screens
const LOGO_BORDER_SPACING = -4; // Arbitrary
export const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "fit-content",
  paddingLeft: 28,
  paddingRight: 28,
  position: "relative",

  // Outer rounded border using pseudo-element
  "::before": {
    content: '""',
    position: "absolute",
    top: LOGO_BORDER_SPACING,
    left: LOGO_BORDER_SPACING,
    right: LOGO_BORDER_SPACING,
    bottom: LOGO_BORDER_SPACING,
    border: "4px solid #fff",
    borderRadius: 4,
  },
}));

export const LogoText = styled("div")({
  fontFamily: "Queering",
  fontWeight: 700,
  lineHeight: "normal",
  fontSize: 40,
  letterSpacing: 1,
});

// Horse container styles

export const HorseContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#fff",
  borderRadius: 4,
  height: HEADER_CONTENT_HEIGHT,
  width: HEADER_CONTENT_HEIGHT,
});

// Title styles

export const TitleContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Queering",
  fontWeight: 700,
  fontSize: 80,
  lineHeight: HEADER_CONTENT_HEIGHT + "px",
  color: "#FFFFFF",
}));

// Menu button styles

export const MenuButton = styled(IconButton)(({ theme }) => ({ padding: 0 }));
