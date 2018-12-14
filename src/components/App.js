import React from 'react';
import Form from './Form';
import '../style/App.css';
import Calendar from './Calendar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: '',
      dateStart: '',
      dateStartValid: true,
      dateEndValid: true,
      dateEnd: '',
      selectDays: {
        0: [],
        1: []
      }
    }
  }

  validateEmpty = () => {
    let valid = true;
    
    if(!this.state.dateStart) {
        this.setState({dateStartValid: false});
        valid = false;
    } else {
        this.setState({dateStartValid: true});
    }
     if(!this.state.dateEnd) {
        this.setState({dateEndValid: false});
        valid = false;
    } else {
        this.setState({dateEndValid: true});
    }
    return valid;
}

  getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  getDateRange = (start, end) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    let months = {};
    let monthEnd = endDate.getMonth();

    if (monthEnd < startDate.getMonth()) {
      monthEnd += 12;
    }

    for (let i = startDate.getMonth(); i <= monthEnd; i++){
      let date = new Date(start);
      date.setMonth(i);
      let nameMonth = date.toLocaleString('en-US', {
        month: 'long'
      });

      months[nameMonth] = [];

      for (let j = 1; j <= this.getLastDayOfMonth(date.getFullYear(), date.getMonth()); j++){
        let obj = {};

        date.setDate(j);

        obj['date'] = date.toISOString().slice(0, 10);
        obj['weekday'] = (date.getDay() === 0) ? 6 : date.getDay() - 1;
        obj['weekend'] = (date.getDay() === 0 || date.getDay() === 6) ? true : false;
        obj['inactive'] = (date >= startDate && date <= endDate) ? false : true;
        months[nameMonth].push(obj);
      }
    }
    return months;
  }

  handleInput = (name, value) => {
    this.setState({[name]: value});
  }

  dateAutoFill = () => {
    const dateStart = new Date(this.state.dateStart);
    const dateEnd = new Date(this.state.dateEnd);
    const dateNew = new Date(this.state.dateStart);
    dateNew.setMonth(dateStart.getMonth() + 1);

    let date = dateEnd.toISOString().slice(0, 10);

    if (dateEnd < dateStart || dateNew > dateEnd) {
        date = dateNew.toISOString().slice(0, 10);
    }  
    if (dateNew.setMonth(dateNew.getMonth() + 2) < dateEnd){
        date = dateNew.toISOString().slice(0, 10);
    } 

    this.setState({dateEnd: date});
  }

  setCalendar = () => {
    this.setState(state => ({calendar: this.getDateRange(state.dateStart, state.dateEnd)}));
  }

  clickDay = (event) => { //TODO creat function for to select days
    const selectDays = this.state.selectDays;

    
    selectDays[0].push(event.target.data);
    

    this.setState({selectDays: selectDays});
  }

  render() {
    return ( 
      <div>
        <Form dateStart={this.state.dateStart}
              dateEnd={this.state.dateEnd}
              handleInput={this.handleInput}
              dateAutoFill={this.dateAutoFill}
              setCalendar={this.setCalendar}
              dateStartValid={this.state.dateStartValid}
              dateEndValid={this.state.dateEndValid}
              validateEmpty={this.validateEmpty}
              />

        {this.state.calendar ? <Calendar calendar={this.state.calendar}
                                          click={this.clickDay}/> : ''}
        
      </div>
    );
  }
}

export default App;