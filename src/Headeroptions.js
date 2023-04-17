import React from 'react'
import "./css/header.css"
import { Avatar } from "@mui/material"
function Headeroptions({ Icon, title, avatar}) {
    return (
        <div className="header_opions">
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name={avatar}/>
            }      
            <span>{title}</span>
        </div>
    )
}
export default Headeroptions 