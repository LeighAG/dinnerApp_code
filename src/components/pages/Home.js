  
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {

const { userData } = useContext(UserContext);



  return (
    <div className="page">
      {userData.user && userData.user.id !== undefined? (
          <>
        <h1>Welcome {userData.user.displayName}!</h1>
        <h2>Would you like to <Link to="/create">create</Link> a plan 
        or go to your <Link to="/lists">list</Link> of plans?</h2>
        </>
      ) : (
        <>
          <h1>Welcome to your dinner planning app.</h1>
          <h2>Use this tool to record and store your weekly dinner plans!</h2>
          <h2>To begin, please <Link to="/login">log in</Link> or 
          <Link to="/register"> register</Link></h2>
          
        </>
      )}
    </div>
  );
}