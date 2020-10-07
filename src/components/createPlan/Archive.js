import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";


export default function Archive(props){

const[days1, setDay1] = useState("");
const[days2, setDay2] = useState("");
let [...dinnerPlan] = props.dinner;

const { userData } = useContext(UserContext);
const history = useHistory();
const UserID= userData.user.id;


function createDay1(){
    const{day, month, year} = props.date1;
    const day1 = `${month}-${day}-${year}`;
    console.log(day, month, year)
     setDay1(day1);
   
};

function createDay2(){
    const{day, month, year} = props.date2;
    const day2 = `${month}-${day}-${year}`;
     setDay2(day2); 
     
};

useEffect(()=>{
  createDay2();
  createDay1();
},[props.date1, props.date2])


const dates = `${days1}-${days2}`;
console.log(dates, 'full')
console.log(dinnerPlan)
const addDinnerPlan = async () => {

    
    try {
      
      const dinnersInfo = { dates, dinnerPlan, UserID};
     const savedDinner = await Axios.post("/dinners/archive", 
      dinnersInfo, 
      
      );
     
      history.push("/lists");
      console.log(savedDinner)
    } catch (err) {
        console.log("req" + err)
    
    }
  };
    return(
      <>
      <div className="archiveAndReturn">
        <div className="archive">
       
<button onClick={()=> addDinnerPlan()}><h3>Save Plan</h3></button>
        </div>
       
        </div>
        </>
    )

};

