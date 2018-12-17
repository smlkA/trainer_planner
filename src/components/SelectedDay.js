import React from 'react';
import '../style/Day.css';



function SelectedDay(props){
    let date = new Date(props.day.date);

    return(
        <div className={'day selected'}>
            {date.getDate()}
        </div>
    )
}

export default SelectedDay;