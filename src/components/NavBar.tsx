import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} padding="4px" borderRadius="10px" boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
