import React from 'react';
import Day from './Day';
import '../style/Month.css';

function Month(props){

    const listDay = props.days.map(function(item, i){
        // var date = new Date(item.date);
        return(
            <Day day={item} key={i}/>
        ) 
    });

    return(
        <div className='calendar__month'>
            <h1>{props.name}</h1>
            <div className='nameWeekDay'>
                <div className='weekday'>Sun</div>
                <div className='weekday'>Mon</div>
                <div className='weekday'>Tue</div>
                <div className='weekday'>Wed</div>
                <div className='weekday'>Thu</div>
                <div className='weekday'>Fri</div>
                <div className='weekday'>Sat</div>
            </div>

            {listDay}
        </div>
    )
}

export default Month;