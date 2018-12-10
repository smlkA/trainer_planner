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
                        calendar: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.dateAutoFill = this.dateAutoFill.bind(this);
        this.validateEmpty = this.validateEmpty.bind(this);
        this.dateRange = this.dateRange.bind(this);
        this.getLastDayOfMonth = this.getLastDayOfMonth.bind(this);
    }

    validateEmpty(value){
        if(!value){
            return 'empty';
        }

        return;
    }

    dateAutoFill(){
        const dateStart = new Date(this.state.dateStart);
        const dateEnd = new Date(this.state.dateEnd);
        const monthStart = dateStart.getMonth();
        const dateNew = new Date(dateStart);

        if(dateEnd < dateStart || dateStart.getMonth() === dateEnd.getMonth()){
            dateNew.setMonth(monthStart + 1);

            this.setState({dateEnd: dateNew.toISOString().slice(0, 10)});
        }
        if (dateNew.setMonth(monthStart + 3) < dateEnd){
            this.setState({dateEnd: dateNew.toISOString().slice(0, 10)});
        }

        
    }

    getLastDayOfMonth(year, month){
        var date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    dateRange(start, end){
        var startDate = new Date(start);
        var endDate = new Date(end);
        var months = {};
        var monthEnd = endDate.getMonth();

        if(monthEnd < startDate.getMonth()){
            monthEnd += 12;
        }

        for(var i = startDate.getMonth(); i <= monthEnd; i++){
            var date = new Date();
            date.setMonth(i);
            var nameMonth = date.toLocaleString('en-US', {month: 'long'});
    
            months[nameMonth] = [];
    
            for(var j = 1; j <= this.getLastDayOfMonth(date.getFullYear(), i); j++){
                var obj = {};
    
                date.setDate(j);
    
                obj['date'] = date.toISOString().slice(0, 10);
                obj['weekday'] = date.getDay();
                months[nameMonth].push(obj);
            }
        }
        return months;
    }

    handleSubmit(event){
        this.dateAutoFill();
        
        this.setState({calendar: this.dateRange(this.state.dateStart, this.state.dateEnd)});
        
        event.preventDefault();
    }

    handleChangeStart(date){
        this.setState({dateStart: date});
    }

    handleChangeEnd(date){
        this.setState({dateEnd: date});
    }

    render(){
        const listMonth = [];

            for(var key in this.state.calendar){
                listMonth.push(<Month days={this.state.calendar[key]} name={key} key={key}/>);
            }

        return(
            <div>
                <form action='' className='form' onSubmit={this.handleSubmit}>
                    <DateInput 
                        name='Start' 
                        onDateChange={this.handleChangeStart}
                        date={this.state.dateStart}
                        class={this.validateEmpty(this.state.dateStart)} />
                    <DateInput 
                        name='End' 
                        onDateChange={this.handleChangeEnd}
                        date={this.state.dateEnd}
                        class={this.validateEmpty(this.state.dateEnd)}/>
                    <Submit value='Show'/>
                </form>
                <div className='calendar'>
                    {listMonth}
                </div>
            </div>
        ); 
    }
}

export default Form;