import React from 'react'
import "./css/sidebar.css"
import { Avatar } from "@mui/material"
function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar_profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHAOLTjGuaYNHWh0ja5iDfSbo88AcvzNHFMXlTyCJSQ&usqp=CAU&ec=48600112"/>
            <div className="profile-detail">
                <Avatar/>
                <h4>Welcome,Ritu</h4>
                <p>Student</p>
                </div>
            {/* <div className="profile_stat"*/}
            </div> 
        </div>
    )
}
export default Sidebar