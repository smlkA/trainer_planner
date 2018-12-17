import React from 'react';
import '../style/Day.css';



function Day(props){
    let date = new Date(props.day.date);

    let handleClick = (e) => {
        props.click(e, props.day);
    }

    return(
        <div className={props.className} onClick={handleClick}>
            {date.getDate()}
        </div>
    )
}

export default Day;