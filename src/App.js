import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Loging'
import Widget from './Widget';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { auth } from './firebase';
import { auth } from 'firebase/app';

function App() {
 const user = useSelector(selectUser);
 const dispatch = useDispatch();
 useEffect(() => {
  auth.onAuthStateChanged((userAuth)=>{
    if (userAuth) {
      //already login
      dispatch(loginuser({
        email:userAuth.email,
        uid:userAuth.uid,
        photoURL:userAuth.photoURL,
        displayName:userAuth.displayName
      }))
    }
    else {
      //logout
      dispatch(logoutuser())
    }
  })
 },
 [])
return (
  <>
  {
  !user ? (<Login/>) : (
<div className="app_wrapper">
  <Header/>
  <div className="app_body">
    <Sidebar/>
    <Feed/>
    <Widget/>
    </div>

  </div>
  )
}
</>
);
}

export default App;