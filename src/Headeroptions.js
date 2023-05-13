import React from 'react'
import "./css/header.css"
import { Avatar } from "@mui/material"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import firebase from "firebase"
function Headeroptions({ Icon, title, avatar}) {
    const user = useSelector(selectUser)
    return (
        <div className="header_opions">
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
            }      
            <span>{title}</span>
        </div>
    )
}
export default Headeroptions 