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
      dateEnd: '',
      selectDays: '',
      selectWeekdays: ''
    }
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

  handleChangeStart = (date) => {
    this.setState({
        dateStart: date
    });
  }

  handleChangeEnd = (date) => {
      this.setState({
          dateEnd: date
      });
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

  render() {
    return ( 
      <div>
        <Form dateStart={this.state.dateStart}
              dateEnd={this.state.dateEnd}
              handleChangeStart={this.handleChangeStart}
              handleChangeEnd={this.handleChangeEnd}
              dateAutoFill={this.dateAutoFill}
              setCalendar={this.setCalendar}
              />

        {this.state.calendar ? <Calendar calendar={this.state.calendar}/> : ''}
        
      </div>
    );
  }
}

export default App;