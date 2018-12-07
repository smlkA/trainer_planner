import React from 'react';
import DateInput from './DateInput';
import Submit from './Submit';
// import Calendar from './Calendar';
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

            this.setState({dateEnd: dateNew.getFullYear() + 
                            '-' + dateNew.toLocaleString("en-US", {month:"2-digit"}) + 
                            '-' + dateNew.toLocaleString("en-US", {day:"2-digit"})});
        } else if (dateNew.setMonth(monthStart + 4) < dateEnd){
            this.setState({dateEnd: dateNew.getFullYear() + 
                            '-' + dateNew.toLocaleString("en-US", {month:"2-digit"}) + 
                            '-' + dateNew.toLocaleString("en-US", {day:"2-digit"})});
        }
    }

    getLastDayOfMonth(year, month){
        var date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    dateRange(start, end){
        var startDate = new Date(start);
        var endDate = new Date(end);
        var year = startDate.getFullYear();
        var months = {};
        var monthEnd = endDate.getMonth();

        if(monthEnd < startDate.getMonth()){
            monthEnd += 12;
        }

        for(var i = startDate.getMonth(); i <= monthEnd; i++){
            var date = new Date(year, i, 1);
            var nameMonth = date.toLocaleString('en-US', {month: 'long'});
            months[nameMonth] = [];

            for(var j = 1; j <= this.getLastDayOfMonth(year, i); j++){

                var obj = {};
                date.setDate(j);
                var day = date.getDate(); 

                if(date.getDate() < 10){
                    day = '0' + day;
                }

                var month = date.getMonth() + 1;

                if(month < 10){
                    month = '0' + month;
                }
                
                obj['date'] = day + '-' + month + '-' + date.getFullYear();
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
        return(
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
        );
    }
}

export default Form;