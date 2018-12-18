import React from 'react';

function CalendarButton(props){
    return(
        props.selectedDays.length === 0 ? 
            <button onClick={props.generate}>Generate</button> : 
            <button onClick={props.clear}>Clear</button>
    )
}

export default CalendarButton;