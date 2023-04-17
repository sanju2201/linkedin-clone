import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Loging'

function App() {
 const user = null;
return (
  <>
  {
  user ? (<Login/>) : (
<div className="app_wrapper">
  <Header/>
  <div className="app_body">
    <Sidebar/>
    <Feed/>
    </div>

  </div>
  )
}
</>
);
}

export default App;