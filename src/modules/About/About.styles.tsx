import {
  Grid,
  GridProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const WrapperGrid = styled(Grid)({
  height: "100%",
  width: "100%",
  display: "flex",
  alignContent: "flex-end",
  padding: "48px 24px",
  gap: 16
});

export const TextSection = styled((props: GridProps) => (
  <Grid size={3.5} {...props} />
))({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const SectionTitle = (props: TypographyProps) => (
  // Figma has weight of 700 but 600 seems closer to the design
  <Typography fontFamily="Inter" fontSize={18} fontWeight={600} {...props} />
);

export const Logo = styled(Typography)({
  fontFamily: "Queering",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "128px",
  lineHeight: "90px",
  transform: "scaleX(1.25)",
  transformOrigin: "left",
});
