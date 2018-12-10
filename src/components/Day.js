import React from 'react';
import '../style/Day.css';

function Day(props){
    var date = new Date(props.day.date);
    return(
        <div className={'day weekday-' + props.day.weekday}>
            {date.getDate()}
        </div>
    )
}

export default Day;