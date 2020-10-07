import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavButtons() {
    const history = useHistory();
    const create = ()=>{ history.push('/create')};
    const lists = ()=> history.push('/lists');

    return(
       <div className="options">
       <button onClick={create}>Create Plan</button>
    <button onClick={lists}>Lists</button>
        </div>
    )
};

