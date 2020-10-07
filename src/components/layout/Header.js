import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import UserContext from '../../context/UserContext';
import NavButtons from "./NavButtons";



export default function Header() {
    const {userData} = useContext(UserContext);
  
    return (
        <header id="header">
        <Link  to="/">
        <h1 className="title">Dinner App</h1>
        </Link>
        {userData.user && userData.user.id !== undefined? <NavButtons/>: null}
         <AuthOptions />
         </header>
    )
};
