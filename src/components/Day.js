import React from 'react';
import '../style/Day.css';

function Day(props){
    let date = new Date(props.day.date);
    return(
        <div className={props.className}>
            {date.getDate()}
        </div>
    )
}

export default Day;