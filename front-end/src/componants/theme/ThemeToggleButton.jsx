import React from 'react';
import { useTheme } from './ThemeContext';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";




const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (

        <>

            {theme === 'light' ? (
                <DarkModeOutlinedIcon onClick={toggleTheme} />
            ) : (
                <WbSunnyOutlinedIcon onClick={toggleTheme} />
            )}


        </>


    );
};

export default ThemeToggleButton;
// Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
/*
{theme ? (

                <DarkModeOutlinedIcon onClick={toggleTheme} />
            ) : (
                <WbSunnyOutlinedIcon onClick={toggleTheme} />
            )}*/ 