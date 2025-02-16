import { HStack, Image, Spacer, Text, useStatStyles } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/"); // Redirige vers la route souhaitée
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
