import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/widget.css"
function Widget() {
  return (
   <>    <div className="widget">
      <div className="widget_top">
        <div className="widget_header">
           <h4>LinkedIn News</h4>
              <InfoIcon/>
        </div>
       <div className="widget_body">
         <ul className="widget_options">
          <li>
             <h4>Job Search</h4>
             <p>6 days ago</p>
          </li>
          <li>
             <h4>Course Offer</h4>
             <p>2 days ago</p>
          </li>
          <li>
             <h4>Job App</h4>
             <p>14 days ago</p>
          </li>
          </ul>
      </div>
    </div>

    <div className="widget_bottom">
    <div className="widget_header">
      <h4>Today's Offer</h4>
      <InfoIcon/>
        </div>
        <div className="widget_body">
        <ul className="widget_options">
            <li>
            <h4>BUY!!</h4>
            <p>Discount 50%</p>
            </li>

            <li>
            <h4>Hurry! Hurry!!</h4>
            <p>Discount 30%</p>
            </li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Widget
