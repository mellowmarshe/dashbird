import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    );
};

export default ThemeToggle;
