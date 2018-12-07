import React from 'react';
import Input from './Input';
import Submit from './Submit';
import '../style/Form.css';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = { dateStart: '',
                        dateEnd: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleSubmit(event){
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
                <Input 
                    name='Start' 
                    onDateChange={this.handleChangeStart}
                    date={this.state.dateStart} />
                <Input 
                    name='End' 
                    onDateChange={this.handleChangeEnd}
                    date={this.state.dateEnd}/>
                <Submit value='Show'/>
            </form>
        );
    }
}

export default Form;