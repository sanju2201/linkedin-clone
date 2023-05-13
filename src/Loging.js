import React, { useState } from 'react'
import "./css/login.css"
import { auth } from './firebase';
import { loginuser } from './features/userSlice';
import { useDispatch } from 'react-redux';
function  Login() {
    const [signup, setSignup] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch= useDispatch();

    const register = (e)=>{
        e.preventDefault();

        if(!name)
        {
            return alert("Name is required")

        }
        if(!photoURL)
        {
            return alert("PhotoURL is required")

        }
        if(!email)
        {
            return alert("Email is required")

        }
        if(!password)
        {
            return alert("Password is required")

        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
            photoURL:photoURL        
            }).then(()=>{
                dispatch(loginuser({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL:photoURL,
                    displayName:name
                }))
        })

        }).catch(error=>alert(error));
        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");
        }
        const signIn=(e)=>{
            e.preventDefault();
          if(!email)
        {
            return alert("Email is required")

        }
        if(!password)
        {
            return alert("Password is required")

        }
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginuser({
                email:user.email,
                uid:user.uid,
                photoURL:user.photoURL,
                displayName:user.displayName
            }))
            
        }).catch(error=>alert(error));
    }
    return (
        <>
        <div className="loginScreen">
            <img src="data:image/png;base64,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"/>
           {
            signup===true ? ( <form onSubmit={register}>
                <input type="text" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="text" placeholder="Profile pic URL" value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <input type="Submit" value="Sign Up"/>
                
                <h4>Already a member ?<span onClick={e=>setSignup(false)}>Login Here</span></h4>
                </form>) 
                : 
                (<form onSubmit={signIn}>
    <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
    <input type="Submit" value="Sign In"/>

    <h4>Not a member ?<span onClick={e=>setSignup(true)}>Register Here</span></h4>
</form>)
 }
 </div>
</>
    )
}
export default Login