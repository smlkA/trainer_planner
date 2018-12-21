import React from 'react';
import '../style/Day.css';



let Day = (props) =>
        <div className={props.className} onClick={props.toggleSelectedDay.bind(this, props.day)}>
            {new Date(props.day.date).getDate()}
        </div>
        
export default Day;