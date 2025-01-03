import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platfrom } from "../hooks/useGames";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platfrom[];
}
export const PlateformList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    "ps-vita": FaPlaystation,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    xbox: FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    mac: FaApple,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <span title={platform.slug}>
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        </span>
      ))}
    </HStack>
  );
};
