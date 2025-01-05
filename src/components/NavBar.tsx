import { HStack, Image, Spacer, Text, useStatStyles } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} padding="4px" borderRadius="10px" boxSize="50px" />
      <SearchInput onSearch={(searchText)=>onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
