import React from 'react';
import Day from './Day';
import SelectedDay from './SelectedDay';
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

    const listWeekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return(
        <div className='month'>
            <h2 className='month__header'>{props.name}</h2>
            <div className='nameWeekDay'>
                {listWeekdays.map((item, i) => <div className='weekday' key={i}>{item}</div>)}
            </div>
            <div className='month__days'>
                {creatListEmptyDays(props.days[0].weekday)}
                {props.days.map((item, i) => {
                    let className='day';

                    if(item.weekend){
                        className+=' weekend'
                    }

                    if(item.inactive){
                        className+=' inactive'
                    }

                    return(
                        !!props.selectedDay && props.selectedDay.indexOf(item) !== -1 ? //TODO: display SelectedDay
                                <SelectedDay day={item} key={i}/> :
                                <Day day={item} key={i} className={className} click={!item.weekend && !item.inactive ? props.click : () => {}}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Month;