import { EventHandler, MouseEvent, TouchEvent } from "react";
import * as Icon from "./icons";

export type UIicon = keyof typeof Icon;

type InteractiveIconProps = {
  icon: UIicon;
  onClick: EventHandler<MouseEvent | TouchEvent>;
};

export const IconButton = ({ icon, onClick }: InteractiveIconProps) => {
  const IconComponent = Icon[icon];

  return (
    <button className="icon-button" onClick={onClick}>
      <IconComponent />
    </button>
  );
};
