import React from "react";
import ReactDOM, {createPortal} from 'react-dom';


export default function PlanModal ({ children }){
    
    return(
    ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById("modal-root")
    )
    )
};

