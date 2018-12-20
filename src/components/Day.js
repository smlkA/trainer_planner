import React from 'react';
import '../style/Day.css';



let Day = (props) => {
    let date = new Date(props.day.date);

    let handleClick = () => {
        const obj ={};
        for(let key in props.day){
            obj[key] = props.day[key];
        }
        props.click(obj);
    }

    return(
        <div className={props.className} onClick={handleClick}>
            {date.getDate()}
        </div>
    )
}

export default Day;