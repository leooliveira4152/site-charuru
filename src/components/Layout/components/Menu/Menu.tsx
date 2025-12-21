import React, { useState } from "react";
import { AppRoutes } from "../../../../routes/routes";
import { MenuItem, MenuText, Root } from "./Menu.styles";
import { ArrowIcon } from "../../assets/ArrowIcon";
import { HomeIcon } from "../../../../assets/HomeIcon";
import { useNavigate } from "react-router-dom";

const menuOptions: Array<{ label: string; link: AppRoutes }> = [
  { label: "HOME", link: AppRoutes.HOME },
  { label: "WORK", link: AppRoutes.WORK },
  { label: "ABOUT", link: AppRoutes.ABOUT },
  { label: "CONTACT", link: AppRoutes.CONTACT },
];

export const Menu = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Root>
      {menuOptions.map((option, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <MenuItem
            key={index}
            onClick={() => navigate(option.link)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {isHovered && <ArrowIcon />}
            <MenuText $isHovered={isHovered}>{option.label}</MenuText>
            {isHovered && <HomeIcon />}
          </MenuItem>
        );
      })}
    </Root>
  );
};
