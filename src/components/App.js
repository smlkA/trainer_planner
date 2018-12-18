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
      selected: {
        0: [],
        1: []
      },
      selectedDays: []
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
    let selected = this.state.selected;
    selected[0] = [];
    selected[1] = [];
    this.setState({[name]: value,
                  calendar: '',
                  selected: selected,
                  selectedDays: ''
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

  setselectedDays = () => {
    let arrselectedDays = [];
    for(let key in this.state.calendar){
      this.state.calendar[key].forEach((item) => {
        if(!item.inactive){
          if(item.weekEven && this.state.selected[0].indexOf(item.weekday + '') !== -1){
            arrselectedDays.push(item);
          } else if(!item.weekEven && this.state.selected[1].indexOf(item.weekday + '') !== -1){
            arrselectedDays.push(item);
          }
        }
      })
    }

    if(arrselectedDays.length !== 0){
      this.setState({selectedDays: arrselectedDays})
    }
  }

  clear = () => {
    let selected = this.state.selected;
    selected[0] = [];
    selected[1] = [];
    this.setState({selectedDays: '', selected: selected})
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
                        generate={this.setselectedDays}
                        selectedDays={this.state.selectedDays}
                        clear={this.clear}/> : ''}

        {this.state.selectedDays.length !== 0 ? 
          <TableForm selectedDays={this.state.selectedDays}/> : ''}
      </div>
    );
  }
}

export default App;