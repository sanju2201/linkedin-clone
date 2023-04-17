import React from 'react'
// import {Avatar} from "@material-ui/core"
import Post from './Post';
function Feed() {
return (
<div className="feed">
    <div className="feed_input">
        {/* <Avatar/> */}
        <form>
            <input type="text" placeholder="post"/>
            <input type="submit"/>
        </form>
        <div className="feed_option">

        </div>
    </div>
    <Post/>
</div>
)
}
export default Feed