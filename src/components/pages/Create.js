import React, { useState }  from 'react'
import StartPlan from "../createPlan/StartPlan";
import StartForm from "../createPlan/StartForm";
import StartDinnerContainer from "../createPlan/StartDinnerContainer";
import Archive from "../createPlan/Archive";

export default function Create(){

    const [createDone, setCreateDone] = useState(false);
  
    const[date1, setDate1] = useState("");
    const[date2, setDate2] = useState("");
  
  function start(a,b){
    const day1 = a;
    const day2 =b;
    console.log(day1, day2, 'maincreate')
    setCreateDone(true);
    setDate1(day1);
    setDate2(day2);
  };
  
  const [dinner, setDinner] = useState([]);
  
    function addDinner(newDinner) {
      setDinner(prevDinners => {
        return [...prevDinners, newDinner];
      });
    }
  function deleteNote(id){
  setDinner(prevDinners =>{return(
    prevDinners.filter((dinnerItem, index)=>{
      return index !== id
    })
  )}
   
  )
  }
 
    return (
      <>
      
      {createDone ? 
      <>
      <div className="createContainer">
        <StartForm 
        day1 = {date1} 
        day2 = {date2}
        onAdd = {addDinner}
        setCreateDone ={setCreateDone}
        setDinner = {setDinner}
      />
      <Archive 
         dinner={dinner}
         date1={date1}
         date2 ={date2}
         
         setDinner = {setDinner}
       />
      <div className="dinnerContainer">
      {dinner.map((item, index)=> <StartDinnerContainer 
      key={index}
      id={index}
      day={item.day}
        name={item.name}
  recipe ={item.recipe}
  website={item.website}
  notes={item.notes}
  delete={deleteNote}
      />)}
      </div>
      </div>
       </>
       : <StartPlan 
      createIt={start} createDone={createDone}/>
      }
  
  </>
    );
    
  }
  
  
  
