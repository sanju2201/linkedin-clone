import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@mui/material"

function Header() {
    return (
    <div className="header">
        <div className="header_left">
        <div className="header_logo">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEUAd7f///8AcbQAdbYAa7KXu9nP4O3M3OsAc7Xl7/YAbrOQttdzpc5MjcH0+fuuyOBnnMkog73s9Pm0zeN9rNK80+aIsdQAaLFYlcbc5vGfv9s/icDF2uode7kof7sAYq7hDdldAAACZklEQVRoge2a27KjIBBF5RKDreL9njj//5djkokjIIZTaR5OlbsqDwFdhW2zG0ICskhmeREgqsgz+eAGy6cKQDBMOBMQVC94yzHBb/H2Aa+8sBd6RQLpB/2QDDLwxYYsyIUvuMiDAjVPtmKo6e0gARyAUx8PJLo+G6JoGKcOHQ99RP4pLCgum1/IRjlqloLCXuiIYxc90XTHg9NIhzdovsNynU3IjJUyUJnwGivqnRGVpY5gJUwnTfjtd8AHE47m9pCZ8ATrhYrUhOPNIjDiglgDxaSxJaarQ63CU9T6Csl23BOyodPiusb7jr4uYHyOmzCsauFnPUOBc/BSoL2KbfShlT0fcZHjczKY0lUFsDfFbF3Ic5uFUSllOTSX1IF/Vyz99kpFNit2GT42CpTFqvuX4/whA3TrSp7JCI3aWlPGk9L0oQscDp5ftcufQ+eh2hrTvYK4aDicGY7wP7dd9hIbdjB2N3i74/vvsR9s3Nzg2ldFmX2h4wY/VG8NOwI8tCYkApxMtqhjwK2VEQMuO49wa1x+AC8v/TT1444LtJbi6A6PORWMCdqNRldjCbozvF7nCr/ofYNlHrnCt/Ow03ttBuMK3zqIsZGS81cjV1KZGTspS7o4wtW79VpC0m/gpeqrtNXgFu9yg1/VXBOJ2k0sv+C4wTX3MN5o8g08Vqcg0/cMJ/yEn/ATfsJP+Ak/4S+4tjVGhesrs9fCjI57rf/hQoPb9i0wRhu9f2uFatva6jsHkQ57d+3Qga7i61WbRgrmveJDvyd5PfjzemTp9bDV3zExk34PuP0ezRNSMX9/KvD3d4i/QB8pnxFRoRMAAAAASUVORK5CYII="/>

        </div>
        <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
          


        </div>
    </div>
    <div className="header_right">
        <Headeroptions Icon={HomeIcon} title="Home"/>
        <Headeroptions Icon={PeopleIcon} title="My Network"/>
        <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
        <Headeroptions Icon={MessageIcon} title="Messaging"/>
        <Headeroptions Icon={NotificationsIcon} title="Notification"/>
        <Headeroptions avatar={Avatar} title="Ritu"/> 
        </div>
    </div>
    )  
} 
export default Header

