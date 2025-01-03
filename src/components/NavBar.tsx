import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} padding="4px" borderRadius="10px" boxSize="50px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
