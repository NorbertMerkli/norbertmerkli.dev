import { EventHandler, MouseEvent } from "react";

import * as Icons from "./icons";

type IconName = keyof typeof Icons;
type IconProps = { icon: IconName };
type IconButtonProps = IconProps & { onClick: EventHandler<MouseEvent> };
type IconLinkProps = IconProps & { href: string };

export const PassiveIcon = ({ icon }: IconProps) => {
  const IconComponent = Icons[icon];

  return (
    <div className="passive-icon">
      <IconComponent />
    </div>
  );
};

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