import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
//import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useTheme } from '../theme/ThemeContext';
import ThemeToggleButton from "../theme/ThemeToggleButton";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function Navbar() {
    const { theme } = useTheme();
    const { currentUser } = useContext(AuthContext);

    return (
        <div className={`navbar ${theme}`}>
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Lamacircle</span>
                </Link>
                <HomeOutlinedIcon />
                <GridViewOutlined />
                <ThemeToggleButton />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="search" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src={currentUser.profilePic} alt="profile" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar