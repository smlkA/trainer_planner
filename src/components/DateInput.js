import React from 'react';
import '../style/DateInput.css';


class DateInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: "", 
                       // name: this.props.name,
                        //class: this.props.classInput
                     };

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.props.onDateChange(event.target.value);
    }

    render() {
        return(
            <label className="form__lable">
                <span className="form__text">{this.props.name}</span>
                <input
                    type="date"
                    value={this.props.date}
                    onChange={this.handleChange}
                    className={this.props.class}
                />
            </label>
        )
    }
}

export default DateInput;