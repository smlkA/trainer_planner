import React from 'react';
import Day from './Day';
import '../style/Month.css';

const creatListEmptyDays = (num) => {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(
            <div className="day" key={i}></div>
        )
    }
    return arr;
}

function Month(props){

    const listWeekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
        (item, i) => {
            return(
                <div className='weekday' key={i}>{item}</div>
            )
        });

    const numEmptyDays = (props.days[0].weekday === 0) ? 6 : props.days[0].weekday - 1;

    const listDays = props.days.map((item, i) => {
        let className='day';

        if(item.weekend){
            className+=' weekend'
        }

        if(item.inactive){
            className+=' inactive'
        }
        
        return(
            <Day day={item} key={i} className={className}/>
        )
    });

    return(
        <div className='month'>
            <h2 className='month__header'>{props.name}</h2>
            <div className='nameWeekDay'>
                {listWeekdays}
            </div>
            <div className='month__days'>
                {creatListEmptyDays(numEmptyDays)}
                {listDays}
            </div>
        </div>
    )
}

export default Month;