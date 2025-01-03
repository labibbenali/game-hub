import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ToggleThemeMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <span className="mx-1">
        {colorMode === "light" ? "switch to dark" : "switch to light"}
      </span>
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </div>
  );
};
