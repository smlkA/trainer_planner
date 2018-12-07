import React from 'react';
import '../style/Input.css';


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: "", name: this.props.name };

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.props.onDateChange(event.target.value);
    }

    render() {
        return(
            <label className="form__lable">
                <span className="form__text">{this.state.name}</span>
                <input
                    type="date"
                    value={this.props.date}
                    onChange={this.handleChange}
                />
            </label>
        )
    }
}

export default Input;