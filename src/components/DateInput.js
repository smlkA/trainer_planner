import React from 'react';
import '../style/DateInput.css';


const DateInput = (props) => 
        <label className="form__lable">
            <span className="form__text">{props.lable}</span>
            <input
                name={props.name}
                type="date"
                value={props.date}
                onChange={props.onDateChange}
                className={props.class}
            />
        </label>


export default DateInput;