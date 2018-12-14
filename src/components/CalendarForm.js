import React from 'react';
import Month from './Month';
import '../style/Calendar.css';

function Calendar(props){
    const listMonth = [];

    for(let key in props.calendar){
        listMonth.push(<Month days={props.calendar[key]} name={key} key={key} click={props.click}/>);
    }

    return(
        <div className='form'>
            <div className='calendar'>
                {listMonth}
            </div>
            <button>Generate</button>
            <button>Clear</button>
        </div>
        
    ); 
    
}

export default Calendar;