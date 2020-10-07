import React from 'react';
import ToggleContent from '../modal/ToggleContent';
import Modal from '../modal/Modal';


export default function StartDinnerContainer(props){

    function handleClick(){
props.delete(props.id)
    }

    return(
        <>
        <div className="container">
        <div className="names">
        <h4>{props.day}</h4>
        <h4>{props.name}</h4>
</div>
        <div className="containerButtons">
        <button className="deleteButton" onClick={handleClick}><p>Delete</p></button>
<ToggleContent
toggle= {show => <button className="openButton" onClick={show}><p>Open</p></button>}
content = {hide =>{ return (
    <div className="ok">
<Modal>
<h3>Website</h3>
<div className="modalOverflow">
<h3><a  href={props.website} target="_blank" rel="noopener noreferrer">
{props.website}</a></h3></div>
<h3>Notes</h3>
<div className="modalOverflow">
<h3 >{props.notes}</h3>
</div>
<button className="closeBtn" onClick = {hide}><h3>Close</h3></button> 
</Modal>
</div>
)}}
/>
</div>
<div className = "containerItems" >

{props.recipe}
</div>
</div>
</>
    )
}

