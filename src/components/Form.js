import React from 'react';
import DateInput from './DateInput';
import Submit from './Submit';
import Month from './Month';
import '../style/Form.css';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = { dateStart: '',
                        dateEnd: '',
                        calendar: '',
                        dateStartValid: '',
                        dateEndValid: ''}
    }

    setErrorClass = (value) => {
        return value ? '' : 'empty';
    }

    validateEmpty = () => {
        this.state.dateStart ? this.setState({dateStartValid: true}) : this.setState({dateStartValid: false});
        this.state.dateEnd ? this.setState({dateEnd: true}) : this.setState({dateStartValid: false});

        return this.state.dateStart || this.state.dateEnd;
    }

    dateAutoFill = () => {
        const dateStart = new Date(this.state.dateStart);
        const dateEnd = new Date(this.state.dateEnd);
        const dateNew = new Date(this.state.dateStart);
        dateNew.setMonth(dateStart.getMonth() + 1);

        let date = dateEnd.toISOString().slice(0, 10);

        if (dateEnd < dateStart || dateNew > dateEnd) {
            date = dateNew.toISOString().slice(0, 10);
        }  
        if (dateNew.setMonth(dateNew.getMonth() + 2) < dateEnd){
            date = dateNew.toISOString().slice(0, 10);
        } 

        this.setState({dateEnd: date});
        
    }

    getLastDayOfMonth = (year, month) => {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    getDateRange = (start, end) => {
        let startDate = new Date(start);
        let endDate = new Date(end);
        let months = {};
        let monthEnd = endDate.getMonth();
    
        if(monthEnd < startDate.getMonth()){
            monthEnd += 12;
        }
    
        for(let i = startDate.getMonth(); i <= monthEnd; i++){
            let date = new Date(start);
            date.setMonth(i);
            let nameMonth = date.toLocaleString('en-US', {month: 'long'});
    
            months[nameMonth] = [];
    
            for(let j = 1; j <= this.getLastDayOfMonth(date.getFullYear(), date.getMonth()); j++){
                let obj = {};
    
                date.setDate(j);
    
                obj['date'] = date.toISOString().slice(0, 10);
                obj['weekday'] = date.getDay();
                obj['weekend'] = (date.getDay() === 0 || date.getDay() === 6) ? true : false;
                obj['inactive'] = (date >= startDate && date <= endDate) ? false : true;
                months[nameMonth].push(obj);
            }
        }
        return months;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.validateEmpty()){
            this.dateAutoFill();
            
            this.setState(prevState =>
                ({calendar: this.getDateRange(prevState.dateStart, prevState.dateEnd)})
            );
        }   
    }

    handleChangeStart = (date) => {
        this.setState({dateStart: date});
    }

    handleChangeEnd = (date) => {
        this.setState({dateEnd: date});
    }

    render(){
        const listMonth = [];

        for(let key in this.state.calendar){
            listMonth.push(<Month days={this.state.calendar[key]} name={key} key={key}/>);
        }

        return(
            <div>
                <form action='' className='form' onSubmit={this.handleSubmit}>
                    <DateInput 
                        name='Start' 
                        onDateChange={this.handleChangeStart}
                        date={this.state.dateStart}
                        class={this.setErrorClass(this.state.dateStartValid)} />
                    <DateInput 
                        name='End' 
                        onDateChange={this.handleChangeEnd}
                        date={this.state.dateEnd}
                        class={this.setErrorClass(this.state.dateEndValid)}/>
                    <Submit value='Show'/>
                </form>
                <div className='calendar'>
                    {listMonth}
                </div>
            </div>
        )
    }
}

export default Form;