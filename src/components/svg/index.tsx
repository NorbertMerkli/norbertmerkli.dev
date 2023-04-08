import { EventHandler, MouseEvent } from "react";

import * as Icons from "./icons";

export type IconName = keyof typeof Icons;

type IconProps = {
  icon: IconName;
  onClick?: EventHandler<MouseEvent>;
  href?: string;
};

type IconButtonProps = Omit<IconProps, "href">;
type IconLinkProps = Omit<IconProps, "onClick">;
type PassiveIconProps = Omit<IconProps, "href" | "onClick">;

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  const IconComponent = Icons[icon];

  return (
    <button onClick={onClick} className="icon-button">
      <IconComponent />
    </button>
  );
};

export const IconLink = ({ icon, href }: IconLinkProps) => {
  const IconComponent = Icons[icon];

  return (
    <a href={href} className="icon-link">
      <IconComponent />
    </a>
  );
};

export const PassiveIcon = ({ icon }: PassiveIconProps) => {
  const IconComponent = Icons[icon];

  return (
    <div className="passive-icon">
      <IconComponent />
    </div>
  );
};
