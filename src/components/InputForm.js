import React from 'react';
import DateInput from './DateInput';
import '../style/Form.css';

const InputForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(props.validateEmpty()){
            props.setAutoDate();

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
                class={props.isDateStartValid ? '' : 'empty'} />
            <DateInput 
                name='dateEnd'
                lable='End' 
                onDateChange={props.handleInput}
                date={props.dateEnd}
                class={props.isDateEndValid ? '' : 'empty'}/>
            <input type="submit" value='Show'/>
        </form>
    ); 
    
}

export default InputForm;