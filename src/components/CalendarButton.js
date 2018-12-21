import React from 'react';

const CalendarButton = (props) => 
        !props.isGenerateValue ? 
            <button onClick={props.generate}>Generate</button> : 
            <button onClick={props.clear}>Clear</button>


export default CalendarButton;