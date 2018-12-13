import React from 'react';
import DateInput from './DateInput';
import Submit from './Submit';
import '../style/Form.css';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {  };
    }

    validateEmpty = (value) => {
        if(!value){
            return 'empty';
        }

        return;
    }

    handleSubmit = (event) => {
        this.props.dateAutoFill();

        this.props.setCalendar();

        event.preventDefault();
    }

    render(){
        return(
            <form action='' className='form' onSubmit={this.handleSubmit}>
                <DateInput 
                    name='Start' 
                    onDateChange={this.props.handleChangeStart}
                    date={this.props.dateStart}
                    class={this.validateEmpty(this.props.dateStart)} />
                <DateInput 
                    name='End' 
                    onDateChange={this.props.handleChangeEnd}
                    date={this.props.dateEnd}
                    class={this.validateEmpty(this.props.dateEnd)}/>
                <Submit value='Show'/>
            </form>
        ); 
    }
}

export default Form;