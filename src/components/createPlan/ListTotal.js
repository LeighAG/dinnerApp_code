import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ListTotal(props){

    const { userData } = useContext(UserContext);
    const[ datesArray, setDatesArray] = useState([])
    const datesArr = datesArray.datesDinner;
    console.log(datesArr)
    const id = userData.user.id
    console.log(id)
useEffect(() => {
    if(id){
  console.log("start", id)
const fetchData = async()=>{
          try {
 
let send = await Axios.get("/dinners/lists", 
{
    headers:{"UserID":id}
});
 let data = send.data
        console.log("sent")
       console.log(data, ' i am data')
       setDatesArray(data) 
       
        }
         catch (err) {
            console.log(err.response)
         }};
         fetchData();
        }}, [userData])

 const deletePlan =async(dates)=>{
    try {
let deleteOnePlan = await Axios.delete("/dinners/lists/delete", 
{
    data:{id, dates }
});
let response = deleteOnePlan.data;
window.location.reload()
console.log(response)
    } catch (err) {
        console.log(err.response)
     }
 }
  console.log(datesArray.datesDinner, "arraydats")


   //array of dates to be released onto page as links
   //filter out id
    

return(
    <>
    <div className= "fullList">
     {datesArr && datesArr.length > 0? datesArr.map((item,key)=>(
         <div className="linkDelete">
         <button onClick = {()=>deletePlan(item.dates)}>Delete</button>
        <Link  key={key} to={`/list/${item.dates}`}>
     <h3>{item.dates}</h3></Link>
  
     </div>
     )
     
     ) : <h3> No lists </h3>
     
     }
     </div>
     </>
    )

};

