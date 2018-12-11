import React from 'react';
import Day from './Day';
import '../style/Month.css';

function Month(props){

    const listDay = props.days.map(function(item, i){
        let className='day';

        if(i === 0){
            className+=' weekday-' + item.weekday;
        }

        if(item.weekend){
            className+=' weekend'
        }

        if(item.active){  //TODO
            className+=' inactive'
        }
        
        return(
            <Day day={item} key={i} className={className}/>
        )
    });

    return(
        <div className='month'>
            <h1 className='month__header'>{props.name}</h1>
            <div className='nameWeekDay'>
                <div className='weekday'>Sun</div>
                <div className='weekday'>Mon</div>
                <div className='weekday'>Tue</div>
                <div className='weekday'>Wed</div>
                <div className='weekday'>Thu</div>
                <div className='weekday'>Fri</div>
                <div className='weekday'>Sat</div>
            </div>
            <div className='month__days'>
                {listDay}
            </div>
        </div>
    )
}

export default Month;