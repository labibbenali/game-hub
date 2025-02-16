import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/"); 
  };

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        onClick={handleImageClick}
        padding="4px"
        borderRadius="10px"
        boxSize="50px"
        cursor="pointer"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
