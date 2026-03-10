import { PropsWithChildren, useState } from "react";
import {
  BackgroundImageType,
  Header,
  HorseContainer,
  LogoContainer,
  LogoText,
  MenuButton,
  Root,
  Title,
  TitleContainer,
} from "./Layout.styles";
import { HorseIcon } from "./assets/HorseIcon";
import { MenuIcon } from "./assets/MenuIcon";
import { CloseIcon } from "./assets/CloseIcon";
import { Menu } from "./components/Menu/Menu";

type LayoutProps = PropsWithChildren<{ source?: BackgroundImageType }>;
export const Layout = ({ children, source }: LayoutProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Root $menuIsOpen={menuIsOpen} $backgroundImage={source || "general"}>
      <Header>
        <LogoContainer>
          <LogoText>SEIGI</LogoText>
        </LogoContainer>
        <HorseContainer>
          <HorseIcon />
        </HorseContainer>
        <TitleContainer>
          <Title>CREATIVITY IN MOTION</Title>
        </TitleContainer>
        <MenuButton onClick={() => setMenuIsOpen((state) => !state)}>
          {menuIsOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </Header>

      {menuIsOpen ? <Menu /> : children}
    </Root>
  );
};
