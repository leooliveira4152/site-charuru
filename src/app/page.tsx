import { Box, Typography } from "@mui/material";
import { HomeIcon } from "./assets/HomeIcon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box display="flex" flexDirection="row" gap={4.5}>
      <HomeIcon />
      <Box className={styles["title-container"]}>
        <Typography
          fontFamily="Queering"
          fontSize={90}
          fontWeight={700}
          lineHeight="normal"
          marginBottom="auto"
          marginTop="auto"
          height="100px"
        >
          SEIGI
        </Typography>
      </Box>
    </Box>
  );
}
