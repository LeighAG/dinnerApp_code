import React, {useState, useEffect } from 'react';
import Home from './components/pages/Home';
import NotFoundPage from './components/pages/NotFoundPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Create from './components/pages/Create';
import Lists from './components/pages/Lists';
import DinnerPage from './components/pages/DinnerPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Axios from 'axios';
//allows access to browser router
//switch- look at URL and make decision
//route determines single route 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserContext from './context/UserContext';
import './style.css';

export default function App() {
    //app needs to check if there is a token,
    //and if so, log them in
const [userData, setUserData] = useState({
token: undefined,
user: {displayName:undefined, id:undefined}
    });

//checks if there is a token to validate member
//determines if we are logged in
useEffect(() => {
const checkLoggedIn = async()=>{

let token = localStorage.getItem("auth-token");
//need to create auth token variable if it doesn't exist
if(token === null){
    localStorage.setItem("auth-token", "");
    token = "";

};
const tokenRes = await Axios.post('/users/tokenIsValid',
null,
{headers: { "x-auth-token": token } } 
);
if(tokenRes.data){
    const userRes = await Axios.get('/users/',
    {headers: {"x-auth-token": token},
});
setUserData({
    token,
    user: userRes.data,
});
}
};
checkLoggedIn();
},[]);

    return (
<>
<BrowserRouter>
<UserContext.Provider value = {{userData, setUserData}}>
<Header />
<Switch>
<Route exact path="/" component={Home}></Route>
<Route exact path="/register" component={Register}></Route>
<Route exact path="/login" component={Login}></Route>
<Route exact path="/create" component={Create}></Route>
<Route exact path="/lists" component={Lists}></Route>
<Route exact path="/list/:dates"  component={DinnerPage}/>
<Route path="*" component={NotFoundPage} />
</Switch>
<Footer />
</UserContext.Provider>
</BrowserRouter>
</>
    )
}
