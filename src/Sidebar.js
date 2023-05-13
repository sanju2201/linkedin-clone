import React from 'react'
import "./css/sidebar.css"
import { Avatar } from "@mui/material"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Sidebar() {
    
    const user = useSelector(selectUser);

    return(
            <div className="sidebar">
            <div className="sidebar_profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHAOLTjGuaYNHWh0ja5iDfSbo88AcvzNHFMXlTyCJSQ&usqp=CAU&ec=48600112"/>

            <div className="profile_details">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
                <p>Student</p>
                </div>
            <div className="profile_stats">
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className="stat_number">100</span>
            </div> 
            </div>
            
            <div className="sidebar_group">
                <p>Group</p>
                <p>Event</p>
                <p className="hash"><span>#</span>Follow Hashtag</p>
                <p className="hash"><span>#</span>Marketing</p>
                <p className="hash"><span>#</span>Web Development</p>
           </div>
        </div>
    )
}
export default Sidebar
