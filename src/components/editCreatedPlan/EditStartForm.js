import React, { useState } from 'react';

export default function EditStartForm(props) {
    const [dinnerDay, setDinnerDay] = useState({
        day: "",
        name: "",
        recipe: "",
        website: "",
        notes: ""
    })
    
    // const[dinnerArray, setDinnerArray] = useState([])
    // console.log(dinnerArray)

    function onChange(event) {
        const { name, value } = event.target;
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
            <button onClick={(event)=> submitDay(event)}>Add</button>
         
            </form>
            </div>
         
            
            </>
        )
    }
    
    

