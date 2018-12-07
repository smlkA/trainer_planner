import React from 'react';
import '../style/Day.css';

function Day(props){
    return(
        <div className="day">
            {props.day}
        </div>
    )
}

export default Day;