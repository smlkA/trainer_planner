import React from 'react';
import Month from './Month';
// import '../style/Calendar.css';

class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state = {calendar: ''}
    }

    render(){
        const listMonth = [];

        for(let key in this.state.calendar){
            listMonth.push(<Month days={this.state.calendar[key]} name={key} key={key}/>);
        }

        return(
            <div className='calendar'>
                {listMonth}
            </div>
        ); 
    }
}

export default Calendar;