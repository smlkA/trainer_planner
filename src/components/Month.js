import React from 'react';
import Day from './Day';
import '../style/Month.css';


const Month = (props) => {

    const listWeekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const createListEmptyDays = (num) => {
        let arr = [];
        for(let i = 0; i < num; i++){
            arr.push(
                <div className="day" key={i}></div>
            )
        }
        return arr;
    }

    return(
        <div className='month'>
            <h2 className='month__header'>{props.name}</h2>
            <div className='nameWeekDay'>
                {listWeekdays.map((item) => <div className='weekday' key={item}>{item}</div>)}
            </div>
            <div className='month__days'>
                {createListEmptyDays(props.days[0].weekday)}
                {props.days.map((item) => {
                    let className='day';

                    props.selectedDays.forEach((elem) => {
                        if(elem.date === item.date){
                            className+=' selected'
                        }
                    })

                    if(item.weekend){
                        className+=' weekend'
                    }

                    if(item.inactive){
                        className+=' inactive'
                    }

                    return(
                        <Day day={item} key={item.date} className={className} 
                                toggleSelectedDay={!props.generateValue && !item.weekend && !item.inactive ? 
                                    props.toggleSelectedDay : () => {}}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Month;