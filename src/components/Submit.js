import React from 'react';
import '../style/Submit.css';

function Submit(props){
    return(
        <input type="submit" value={props.value}/>
    )
}

export default Submit;