import React from 'react';
import '../style/DateInput.css';


function DateInput (props){

    const handleChange = (event) => {
        props.onDateChange(event.target.name, event.target.value);
    }

    return(
        <label className="form__lable">
            <span className="form__text">{props.lable}</span>
            <input
                name={props.name}
                type="date"
                value={props.date}
                onChange={handleChange}
                className={props.class}
            />
        </label>
    )
    
}

export default DateInput;