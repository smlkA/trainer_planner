import React from 'react';
import InputForm from './InputForm';
import TableForm from './TableForm';
import '../style/App.css';
import CalendarForm from './CalendarForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: '',
      dateStart: '',
      dateStartValid: true,
      dateEndValid: true,
      dateEnd: '',
      selected: {
        0: [],
        1: []
      },
      selectedDay: ''
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

  getWeek = (value) => {
    let date = new Date(value);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
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
        obj['weekend'] = date.getDay() === 0 || date.getDay() === 6;
        obj['inactive'] = (date >= startDate && date <= endDate) ? false : true;
        obj['weekEven'] = this.getWeek(date) % 2 === 0; 
        months[nameMonth].push(obj);
      }
    }
    return months;
  }

  handleInput = (name, value) => {
    let selected = this.state.selected;
    selected[0] = [];
    selected[1] = [];
    this.setState({[name]: value,
                  calendar: '',
                  selected: selected,
                  selectedDay: ''
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

  clickDay = (e, value) => {
    let newClassName = e.target.className.split(' ');

    newClassName.indexOf('selected') === -1 ? newClassName.push('selected') : 
      newClassName.splice(newClassName.indexOf('selected'), 1);

    e.target.className = newClassName.join(' ');

    const selected = this.state.selected;
    const day = value.weekday + '';
    if(value.weekEven){
      selected[0].indexOf(day) === -1 ? selected[0].push(day) : 
        selected[0].splice(selected[0].indexOf(day), 1);
    } else {
      selected[1].indexOf(day) === -1 ? selected[1].push(day) : 
        selected[1].splice(selected[0].indexOf(day), 1);
    }
    
    
    this.setState({selected: selected});
  }

  setSelectedDay = () => {
    let arrSelectedDay = [];
    for(let key in this.state.calendar){
      this.state.calendar[key].forEach((item) => {
        if(!item.inactive){
          if(item.weekEven && this.state.selected[0].indexOf(item.weekday + '') !== -1){
            arrSelectedDay.push(item);
          } else if(!item.weekEven && this.state.selected[1].indexOf(item.weekday + '') !== -1){
            arrSelectedDay.push(item);
          }
        }
      })
    }

    if(arrSelectedDay.length !== 0){
      this.setState({selectedDay: arrSelectedDay})
    }
  }

  clear = () => {
    let selected = this.state.selected;
    selected[0] = [];
    selected[1] = [];
    this.setState({selectedDay: '', selected: selected})
  }

  render() {
    return ( 
      <div>
        <InputForm dateStart={this.state.dateStart}
              dateEnd={this.state.dateEnd}
              handleInput={this.handleInput}
              dateAutoFill={this.dateAutoFill}
              setCalendar={this.setCalendar}
              dateStartValid={this.state.dateStartValid}
              dateEndValid={this.state.dateEndValid}
              validateEmpty={this.validateEmpty}
              />

        {this.state.calendar ? 
          <CalendarForm calendar={this.state.calendar}
                        click={this.clickDay}
                        generate={this.setSelectedDay}
                        selectedDay={this.state.selectedDay}
                        clear={this.clear}/> : ''}

        {this.state.selectedDay ? 
          <TableForm selectedDay={this.state.selectedDay}/> : ''}
      </div>
    );
  }
}

export default App;