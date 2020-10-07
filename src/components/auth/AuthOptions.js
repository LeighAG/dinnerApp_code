import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function AuthOptions() {

const {userData, setUserData} = useContext(UserContext);

const history = useHistory();
//history instance that you may use to navigate.
const register = ()=> history.push('/register');
const login = ()=> history.push('/login');
const logout = ()=> {
    history.push('/');
  setUserData({
        token: undefined,
        user: undefined
    });
    localStorage.setItem('auth-token', '');
    
}
    return(
 //in the logged in option, make two more buttons for create dinner, and see archived list      
<nav className = "auth-options">
{userData.user && userData.user.id !== undefined? 
    <button onClick={logout}>Log out</button>
 : 
    <>
    <button onClick={register}>Register</button>
    <button onClick={login}>Log In</button>
    </>
     }
</nav>

    )
};
