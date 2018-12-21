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
      calendar: [],
      dateStart: '',
      isDateStartValid: true,
      isDateEndValid: true,
      dateEnd: '',
      selectedDays: [],
      isGenerated: false
    }
  }

  validateEmpty = () => {
    let isValid = true;
    
    if(!this.state.dateStart) {
        this.setState({isDateStartValid: false});
        isValid = false;
    } else {
        this.setState({isDateStartValid: true});
    }
     if(!this.state.dateEnd) {
        this.setState({isDateEndValid: false});
        isValid = false;
    } else {
        this.setState({isDateEndValid: true});
    }
    return isValid;
  }

  handleInput = (e) => {
    let isValidName = 'is' + e.target.name.split('')[0].toUpperCase() +
                       e.target.name.split('').splice(0, 1).join('') + 'Valid';

    this.setState({[e.target.name]: e.target.value,
                  calendar: [],
                  selectedDays: [],
                  [isValidName]: true
                });
  }

  setAutoDate = () => {
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

  toggleSelectedDay = (value) => {
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
    let isGenerated = true;
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
     isGenerated = false;
    }

    this.setState({isGenerated, selectedDays});
  }

  clear = () => {
    this.setState({selectedDays: [],
                   isGenerated: false})
  }

  setLector = (day, e) => {
    let selectedDays = this.state.selectedDays.slice();

    for(let key in selectedDays){
      if(selectedDays[key].date === day.date){
        selectedDays[key]['lector'] = e.target.value;
      }
    }

    this.setState({selectedDays});
  }

  downloadCSV = () => {
    let csv = 'Date;Lector\n';
    const selectedDays = this.state.selectedDays.slice();
    selectedDays.forEach(function(item) {
      const date = new Date(item.date);
      csv += date.toLocaleString("ru", 
      {day: 'numeric', month: 'long'}) + 
      ' (' + date.toLocaleString("ru", {weekday: 'short'}) + ');' + item.lector + '\n';
    });
 
    let hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURI(csv);
    hiddenElement.download = 'trainer_planner.csv';
    hiddenElement.click();
  }

  render() {
    return ( 
      <div>
        <InputForm dateStart={this.state.dateStart}
              dateEnd={this.state.dateEnd}
              handleInput={this.handleInput}
              setAutoDate={this.setAutoDate}
              setCalendar={this.setCalendar}
              isDateStartValid={this.state.isDateStartValid}
              isDateEndValid={this.state.isDateEndValid}
              validateEmpty={this.validateEmpty}/>

        {this.state.calendar.length !== 0 && 
          <CalendarForm calendar={this.state.calendar}
                        toggleSelectedDay={this.toggleSelectedDay}
                        generate={this.setSelectedDays}
                        selectedDays={this.state.selectedDays}
                        clear={this.clear}
                        isGenerated={this.state.isGenerated}/>}

        {this.state.isGenerated && this.state.selectedDays.length !== 0 && 
          <TableForm selectedDays={this.state.selectedDays}
                      setLector={this.setLector}
                      downloadCSV={this.downloadCSV}/>}
      </div>
    );
  }
}

export default App;