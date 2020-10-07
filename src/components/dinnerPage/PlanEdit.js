import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import UserContext from "../../context/UserContext";

export default function PlanEdit (props){
    const { userData } = useContext(UserContext);
    const id = userData.user.id
    const arrayIndex = props.id
//  if button is clicked(true), then props.note is editable and has a save button
const[click, setClick] = useState(false)

//on change that will automatically replace text saved in a hook
const[text, setText] = useState("");
//from initial fetch
const[note, setNote] = useState("");


console.log(arrayIndex, 'index')

useEffect(()=>{
    
    const fetchArchiveData = async()=>{
      
    const result =await Axios.get(`/dinners/edit/${props.dates}`,
    {
        headers:{"UserID":id, "id":arrayIndex}
    })
     const body =  result.data;
     setNote(body);
  setText(body)
     
}
     fetchArchiveData();

     }, [] )



const addNoteEdit = async (e) => {
    e.preventDefault();
    setClick(!click);
    const noteChange = { text, id, arrayIndex };
    const result = await Axios.post(`/dinners/editNote/${props.dates}`,noteChange);
    const body = await result.data;
    console.log(body, 'change')
    setNote(body);
    
    
};



return(
    <>
    {click && note? 
    <>
   <textarea className="textB" type="text" value={text} 
onChange = {(event)=>setText(event.target.value)}></textarea>
<button className="saveEdits" onClick={addNoteEdit} >Save</button>
</>
:<p className= "textOverflow">{note.notes}</p>
}
 <br/><button className= "editNoteB"
 onClick={()=>{setClick(!click); setText(note.notes)}}><h3>{click? "Close Edit" : "Edit note"}</h3>
 </button> 
</>
    )
}


