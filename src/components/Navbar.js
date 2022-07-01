import React, { useState } from "react";
import Logo from '../assets/stationaryShopLogo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/components/Navbar.css';
import {useNavigate} from 'react-router-dom';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const signOutClick = () =>{
        auth.signOut(); 
        navigate('/')
    return (
        <div className="navbar">
            <div className="leftSide text-white text-center d-flex" id={openLinks ? "open" : "close"}>
            <img src={Logo} /><div>STATIONARY SHOP | Young Pride Revolution</div>
                <div className="hiddenLinks">
                <Link to="/Home">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Member">Member</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to= "/Sign Out">Signout</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/Home">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Member">Member</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to= "/Sign Out">Signout</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;

