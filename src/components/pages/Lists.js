import React, { useContext, useEffect } from 'react';
import ListTotal from "../createPlan/ListTotal";
import UserContext from "../../context/UserContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
export default function Lists() {

   
    const { userData } = useContext(UserContext);
  
    const id = userData.user.id

    return(
        <>
        <h1 className = "listTitle">Click on a date to see your dinner plan.</h1>
       <ListTotal
           id={id}
       />      

       </>
    )
}

