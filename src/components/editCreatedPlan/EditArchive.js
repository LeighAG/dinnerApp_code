import React from 'react'

export default function EditArchive(props){
    
const submitEdits = () => {
props.addEditDinnerPlan();
}

return(
       
       <button className="editArchive" onClick = {()=>submitEdits()} ><h3>Save Plan</h3></button>
      
)

}
