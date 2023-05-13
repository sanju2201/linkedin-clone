import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
useEffect(()=>{
auth.onAuthStateChange((userAuth)=>{
  if(userAuth) {
    //login 
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
},[])
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="ap-wrapper">
      <Header/>
      <div className="app-body">
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
