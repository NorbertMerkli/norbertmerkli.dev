import profilePicture from "@public/profile_picture.jpg";
import Image from "next/image";

export const Avatar = ({ className }: { className?: string }) => (
  <Image
    className={className}
    src={profilePicture}
    alt="Profile picture"
    placeholder="blur"
  />
);
