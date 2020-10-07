import React from "react";
import ToggleContent from '../modal/ToggleContent';
import PlanModal from '../dinnerPage/PlanModal';
import PlanEdit from "./PlanEdit";

export default function PlanContainer (props){
  
   

    return(
        <>
        <div className="containAll">
       
<div className="containerArch">
<div className="namesArch">
<h3>{props.day}</h3>
<h3>{props.name}</h3>
</div>
<div className="recipeArch">
<h3>{props.recipe}</h3>
</div>
</div>
<div className= "containButtons">
        
        <ToggleContent
        toggle= {show => <button onClick={show} ><h3>Open</h3></button>}
        content = {hide =>{ return (
           <PlanModal>
           <div className="archWN">
           <h3>Website</h3>
        <h3><a href={props.website} rel={'external'} target="_blank" rel="noopener noreferrer">{props.website}</a></h3>
      <h3>Notes</h3>
        <PlanEdit
        id={props.id}
        key={props.key}
        notes={props.notes}
        title={props.title}
        dates = {props.dates}
        ></PlanEdit>
        </div>
        <button className="closeBtnArch" onClick = {hide}>Close</button>
            
        </PlanModal>
        )}}
        /> 
         </div> 
</div>



        </>
        
    )
    
};



