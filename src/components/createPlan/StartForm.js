import React, { useState } from 'react';
import Archive from './Archive'


export default function StartForm(props){
//is there a better way to do this?
const date1 = `${props.day1.month}/${props.day1.day}/${props.day1.year}`
const date2 = `${props.day2.month}/${props.day2.day}/${props.day2.year}`

const [dinnerDay, setDinnerDay] = useState({
    day: "",
    name: "",
    recipe: "",
    website: "",
    notes: ""
})


function onChange(event) {
    const { name, value } = event.target;
// const{count, setCount} = ()
    setDinnerDay(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    
  }

  function submitDay(event) {
    props.onAdd(dinnerDay);
    setDinnerDay({
        day: "",
        name: "",
        recipe: "",
        website: "",
        notes: "",
        // number:
    });
    event.preventDefault();
  }


    return (
        <>
        <div className ="formContain">
        <h1>Create Plan for {date1} to {date2}</h1>
        <h2>Fill out the form and click Add.</h2>
          <div className="goBack">
        <button onClick={()=>{props.setCreateDone(false); props.setDinner([])}}><h3>Go Back</h3></button>
        </div> 
        <div className= "formTemplate">
        <form>
        <select name="day" value={dinnerDay.day} onChange={onChange}>
<option value="none" >Select Day</option>
<option value ="Sunday" >Sunday</option>
<option value ="Monday">Monday</option>
<option value ="Tuesday">Tuesday</option>
<option value ="Wednesday">Wednesday</option>
<option value ="Thursday">Thursday</option>
<option value ="Friday">Friday</option>
<option value = "Saturday">Saturday</option>
</select> 
<div className="textRows">
<div className = "textSplitRows">
        <textarea rows="3"  cols="35" placeholder="Who is cooking?" value={dinnerDay.name} name="name" onChange= {onChange}></textarea>
        <textarea rows="3"  cols="35" placeholder="Name of the recipe" value={dinnerDay.recipe} name="recipe" onChange= {onChange}></textarea>
        </div>
        <div className= "textFullRows">
        <textarea rows="3"  cols="35" placeholder="Copy and paste website: https://website.com" value={dinnerDay.website} name="website"onChange= {onChange}></textarea>
        <textarea rows="3"  cols="35" placeholder="Notes" name="notes" value={dinnerDay.notes} onChange= {onChange}></textarea>
        </div>
        </div>
        <br></br>
        <button onClick={submitDay}>Add</button>
     
        </form>
        </div>
        </div>
        
        </>
    )
}

