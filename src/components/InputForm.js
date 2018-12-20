import React from 'react';
import DateInput from './DateInput';
import '../style/Form.css';

function InputForm (props){

    const handleSubmit = (event) => {
        event.preventDefault();

        if(props.validateEmpty()){
            props.dateAutoFill();

            props.setCalendar();
        }
    }

    return(
        <form action='' className='form' onSubmit={handleSubmit}>
            <DateInput 
                name='dateStart'
                lable='Start' 
                onDateChange={props.handleInput}
                date={props.dateStart}
                class={props.dateStartValid ? '' : 'empty'} />
            <DateInput 
                name='dateEnd'
                lable='End' 
                onDateChange={props.handleInput}
                date={props.dateEnd}
                class={props.dateEndValid ? '' : 'empty'}/>
            <input type="submit" value='Show'/>
        </form>
    ); 
    
}

export default InputForm;