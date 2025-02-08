import { HStack, Image, Spacer, Text, useStatStyles } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useState } from "react";



const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} padding="4px" borderRadius="10px" boxSize="50px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
