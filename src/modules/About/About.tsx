import { Box, Grid, Typography } from "@mui/material";
import { Layout } from "../../components/Layout/Layout";
import { Logo, SectionTitle, TextSection, WrapperGrid } from "./About.styles";
import {
  AfterEffectsIcon,
  BlenderIcon,
  ClipStudioIcon,
  DavinciResolveIcon,
  IllustratorIcon,
  PhotoshopIcon,
  PremiereIcon,
  Spine2DIcon,
} from "../../assets/toolsets";

// About is settled with a "all labels -> all values" instead of multiple "label -> value" sections
// so we can align each row just like figma

export const About = () => {
  return (
    <Layout source="about">
      <WrapperGrid container>
        <TextSection>
          <SectionTitle>HEY THERE! I'M</SectionTitle>
        </TextSection>
        <TextSection>
          <SectionTitle>ABOUT ME</SectionTitle>
        </TextSection>
        <TextSection>
          <SectionTitle>TOOLSET</SectionTitle>
        </TextSection>
        <TextSection>
          <Logo>SEIGI</Logo>
        </TextSection>
        <TextSection>
          {/* Width is forced so line-breaking always have a consistent layout */}
          <Typography
            fontFamily="Inter"
            fontSize={16}
            fontWeight={400}
            maxWidth={280}
          >
            I work with motion design and audiovisual content, combining
            creativity and technique to bring ideas to life.
          </Typography>
        </TextSection>
        <TextSection>
          {/* Again, width is forced so line-breaking always have a consistent layout */}
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={2}
            width={220}
          >
            <PhotoshopIcon />
            <IllustratorIcon />
            <PremiereIcon />
            <AfterEffectsIcon />
            <Spine2DIcon />
            <DavinciResolveIcon />
            <ClipStudioIcon />
            <BlenderIcon />
          </Box>
        </TextSection>
      </WrapperGrid>
    </Layout>
  );
};
