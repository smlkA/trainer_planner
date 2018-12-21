import React from 'react';
import Month from './Month';
import CalendarButton from './CalendarButton';
import '../style/Calendar.css';

const Calendar = (props) => {
    const listMonth = [];

    for(let key in props.calendar){
        listMonth.push(<Month days={props.calendar[key]} name={key} key={key}
                         click={props.click} selectedDays={props.selectedDays}
                         isGenerateValue={props.isGenerateValue}/>);
    }

    return(
        <div className='form'>
            <div className='calendar'>
                {listMonth}
            </div>
            <CalendarButton isGenerateValue={props.isGenerateValue} generate={props.generate} clear={props.clear}/>
        </div>
    ); 
    
}

export default Calendar;