import React from 'react';
import '../style/Day.css';



let Day = (props) => {
    let date = new Date(props.day.date);

    return(
        <div className={props.className} onClick={props.toggleSelectedDay.bind(this, props.day)}>
            {date.getDate()}
        </div>
    )
}

export default Day;