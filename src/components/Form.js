import React from 'react';
import DateInput from './DateInput';
import Submit from './Submit';
import '../style/Form.css';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {  };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.props.validateEmpty()){
            this.props.dateAutoFill();

            this.props.setCalendar();
        }
    }

    render(){
        return(
            <form action='' className='form' onSubmit={this.handleSubmit}>
                <DateInput 
                    name='dateStart'
                    lable='Start' 
                    onDateChange={this.props.handleInput}
                    date={this.props.dateStart}
                    class={this.props.dateStartValid ? '' : 'empty'} />
                <DateInput 
                    name='dateEnd'
                    lable='End' 
                    onDateChange={this.props.handleInput}
                    date={this.props.dateEnd}
                    class={this.props.dateEndValid ? '' : 'empty'}/>
                <Submit value='Show'/>
            </form>
        ); 
    }
}

export default Form;