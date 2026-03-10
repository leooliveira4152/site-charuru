import { IconButton, styled, Typography } from "@mui/material";

// Some heights and widths are hardcoded here for simplicity (we don't need to make a scalable system for this project)
// When changing something check for the consistency

export const HEADER_CONTENT_HEIGHT = 42;
export const HEADER_HORIZONTAL_PADDING = 28;

export type BackgroundImageType = "home" | "about" | "general";
type OpenMenuProps = {
  $backgroundImage: BackgroundImageType;
  $menuIsOpen: boolean;
};

const backgroundImages: Record<BackgroundImageType, string> = {
  home: `url("${process.env.PUBLIC_URL}/assets/home-bg.png")`,
  about: `url("${process.env.PUBLIC_URL}/assets/about-bg.jpg")`,
  general: `url("${process.env.PUBLIC_URL}/assets/general-bg.png")`,
};

export const Root = styled("div")<OpenMenuProps>(
  ({ $backgroundImage, $menuIsOpen }) => ({
    display: "flex",
    flexDirection: "column",

    backgroundSize: "cover",
    backgroundPosition: "center",

    height: "100%",
    boxSizing: "border-box",

    minWidth: 1280, // TODO - Make it responsive later

    ...($menuIsOpen
      ? {
          backgroundImage: backgroundImages[$backgroundImage],
          backgroundColor: "rgba(21, 21, 31, 1)",
          backgroundBlendMode: "overlay",
        }
      : { backgroundImage: backgroundImages[$backgroundImage] }),
  }),
);

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,

  paddingTop: 54,
  paddingLeft: HEADER_HORIZONTAL_PADDING,
  paddingRight: HEADER_HORIZONTAL_PADDING,
}));

// Logo container styles

// TODO - Overlapping with background image in lower screens
const LOGO_BORDER_SPACING = -4; // Arbitrary
export const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "fit-content",
  paddingLeft: 20,
  paddingRight: 20,
  position: "relative",

  // Outer rounded border using pseudo-element
  "::before": {
    content: '""',
    position: "absolute",
    top: LOGO_BORDER_SPACING,
    left: LOGO_BORDER_SPACING,
    right: LOGO_BORDER_SPACING,
    bottom: LOGO_BORDER_SPACING,
    border: "3px solid #fff",
    borderRadius: 4,
  },
}));

export const LogoText = styled("div")({
  fontFamily: "Queering",
  fontWeight: 700,
  lineHeight: "100%",
  fontSize: 32,
  letterSpacing: 1,
});

// Horse container styles

export const HorseContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#fff",
  borderRadius: 2.5,
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
  fontSize: 60,
  lineHeight: HEADER_CONTENT_HEIGHT + "px",
  color: "#FFFFFF",
}));

// Menu button styles

export const MenuButton = styled(IconButton)(({ theme }) => ({ padding: 0 }));
