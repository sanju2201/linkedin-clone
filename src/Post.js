import React from 'react'
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import "./css/post.css"
function Post() {
    return (
        <div className="posts">
            <div className="post_header">
            <div className="post_headerLeft">
                <Avatar/>
                <div className="post_profile_dtl">
                    <h3>Ritu</h3>
                    </div>
                </div>
                  <MoreVertIcon/>            
             </div>
        
        </div>
    )
}
export default Post