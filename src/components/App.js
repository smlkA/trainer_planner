import React from 'react';
import InputForm from './InputForm';
import TableForm from './TableForm';
import '../style/App.css';
import CalendarForm from './CalendarForm';
import getDateRange from '../dateUtils/getDateRange';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: '',
      dateStart: '',
      dateStartValid: true,
      dateEndValid: true,
      dateEnd: '',
      selectedDays: [],
      generateValue: false
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

  handleInput = (name, value) => {
    let validName = name + 'Valid';
    this.setState({[name]: value,
                  calendar: [],
                  selectedDays: [],
                  [validName]: true
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
    this.setState(state => ({calendar: getDateRange(state.dateStart, state.dateEnd)}));
  }

  clickDay = (value) => {
    const selectedDays = this.state.selectedDays.slice();

    const dates = selectedDays.map((item) => item.date);

    if(dates.indexOf(value.date) !== -1){
      selectedDays.splice(dates.indexOf(value.date), 1);
    } else {
      selectedDays.push(value);
    }    

    this.setState({selectedDays});
  }

  setSelectedDays = () => {
    let days = this.state.selectedDays.slice();
    let selectedDays = [];
    let generateValue = true;
    for(let key in this.state.calendar){
      this.state.calendar[key].forEach((item) => {
        days.forEach((elem) => {
          if(item.weekday === elem.weekday && item.typeOfWeek === elem.typeOfWeek && !item.weekend && !item.inactive){
            selectedDays.push(Object.assign({}, item, {lector: ''}));
          }
        })
      })
    }

    if(selectedDays.length === 0){
      generateValue = false;
    }

    this.setState({generateValue, selectedDays});
  }

  clear = () => {
    this.setState({selectedDays: [],
                    generateValue: false})
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

        {this.state.calendar.length !== 0 ? 
          <CalendarForm calendar={this.state.calendar}
                        click={this.clickDay}
                        generate={this.setSelectedDays}
                        selectedDays={this.state.selectedDays}
                        clear={this.clear}
                        generateValue={this.state.generateValue}/> : ''}

        {this.state.generateValue && this.state.selectedDays.length !== 0 ? 
          <TableForm selectedDays={this.state.selectedDays}
                      setLector={this.setLector}/> : ''}
      </div>
    );
  }
}

export default App;