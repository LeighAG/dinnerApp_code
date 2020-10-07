import React, { useEffect, useState, useContext } from 'react'
import Axios from "axios";
import PlanContainer from "../dinnerPage/PlanContainer"
import UserContext from "../../context/UserContext";
import EditStartForm from "../editCreatedPlan/EditStartForm";
import EditPlanContainer from "../editCreatedPlan/EditPlanContainer";
import EditArchive from "../editCreatedPlan/EditArchive";
import { useHistory } from 'react-router-dom';

export default function DinnerPage( {match} ){
  const history = useHistory();

  const { userData } = useContext(UserContext);
    const userID = userData.user.id;
    const name = match.params.dates;

  const[schedule, setSchedule] = useState()
   const[dinners, setDinners] = useState()
  console.log(dinners, name, userID, "my save data")
   const[editButton, setEditButton] = useState(false);
const[move, setMove] = useState(false);

    //format title date
    let search = '-';
    var n = 3;
    let titleDate = name.replace(RegExp("^(?:.*?-){" + n + "}"), 
    function(x){return x.replace(RegExp(search + "$"), " to ")}).replace(/-/gi, '/')
    //

    useEffect(()=>{
      if(userID){
        console.log("start")
        try{
        const fetchData = async()=>{
        
      const result = await Axios.get(`/dinners/list/${name}`, 
      {headers:{"UserID":userID}})
          console.log('sent')
         const body = await result.data;
         if(body.dinnerPlan!== null){ setSchedule(body);}  else {history.push('/NotFound')}
        
        
        }
        fetchData();}
      
        catch (err) {
           console.log(err.response)
        };
      }
       
         }, [userData])
        

         useEffect(()=>{ 
         if(schedule){
           
            setDinners(schedule.dinnerPlan.dinnerPlan);   
          }
          
        }, [schedule] )
      

//delete function
function deleteNote(id){
  setDinners(prevDinners =>{return(
    prevDinners.filter((dinnerItem, index)=>{
      return index !== id
    })
  )}
   
  )
  }

  //addDinner
  function addDinner(newDinner) {
    setDinners(prevDinners => {
      return [...prevDinners, newDinner];
    });
  }

  //archive edited plan
  const addEditDinnerPlan = async () => {
   
    try {
     
      const dinnersEditInfo = { name, dinners, userID};
     const savedEditDinner = await Axios.post("/dinners/edit-archive", 
      dinnersEditInfo 
      );
     
      setEditButton(!editButton);
     
    } catch (err) {
        console.log("req" + err)
    
    }
  };

  //move boxes
  const moveObject =(id)=>{
 let to = id+1;
   let numberOfDeletedElm = 1;
    const elem = dinners.splice(id, numberOfDeletedElm)[0];
    numberOfDeletedElm = 0;
    if(to>dinners.length){
      to = 0;
      dinners.splice(to, numberOfDeletedElm, elem);
    setDinners(dinners)
    } else{
    dinners.splice(to, numberOfDeletedElm, elem);
    setDinners(dinners)}
    setMove(!move);
  }
    return(
        <>
        <div className="dinnerFullContainer">
        <h1 className="dinnerTitle">Dinner Plan for {titleDate}.</h1>
        
{!editButton? 
<>
  <button className ="editDinnerPlanBtn" onClick={()=>setEditButton(!editButton)}>Edit the whole miracle burger</button>
        <div className="dinnerContainer">
        {dinners ? dinners.map((item, index)=> 
        <PlanContainer 
    key={index}
    id={index}
    day={item.day}
    name={item.name}
    notes={item.notes}
    recipe={item.recipe}
   website={item.website}
dates={name}

    />
    )
    
    : null
    }
      </div> 
      </>: <>
      <div className ="formContain">
      <button className ="editDinnerPlanBtn" onClick={()=>setEditButton(!editButton)}>Close Edit</button>
      <EditStartForm
       onAdd = {addDinner}
       />
       
      <EditArchive 
addEditDinnerPlan = {addEditDinnerPlan}
      />
      
      <div className="dinnerContainer">
      {dinners.map((item, index)=> <EditPlanContainer 
        key={index}
    id={index}
    day={item.day}
    name={item.name}
    notes={item.notes}
    recipe={item.recipe}
   website={item.website}
dates={name}
delete={deleteNote}
moveObject={moveObject}
      />)}
      </div>
      </div>
      </>} 
      </div>
      
        </>
    )
}
