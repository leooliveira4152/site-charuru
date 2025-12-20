import { PropsWithChildren, useState } from "react";
import {
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

type LayoutProps = PropsWithChildren<{}>;
export const Layout = ({ children }: LayoutProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Root $menuIsOpen={menuIsOpen}>
      <Header $menuIsOpen={menuIsOpen}>
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

      {menuIsOpen ? <div>Menu is Open</div> : children}
    </Root>
  );
};
