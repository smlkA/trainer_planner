import React from 'react';
import Form from './Form';
import Calendar from './Calendar';
// import Table from './Table';
// import '../style/Page.css';

class Page extends React.Component{
    constructor(props) {
        super(props);

        this.state = {calendar: '',
                        dateStart: '',
                        dateEnd: ''};
    }

    updateData = (value) => {  //TODO: обновлять календарь в page
        this.setState({ calendar: value });

        // this.setState( state => ({calendar: value}));
    }

    // getDateRange = (start, end) => {
    //     let startDate = new Date(start);
    //     let endDate = new Date(end);
    //     let months = {};
    //     let monthEnd = endDate.getMonth();
    
    //     if(monthEnd < startDate.getMonth()){
    //         monthEnd += 12;
    //     }
    
    //     for(let i = startDate.getMonth(); i <= monthEnd; i++){
    //         let date = new Date(start);
    //         date.setMonth(i);
    //         let nameMonth = date.toLocaleString('en-US', {month: 'long'});
    
    //         months[nameMonth] = [];
    
    //         for(let j = 1; j <= this.getLastDayOfMonth(date.getFullYear(), date.getMonth()); j++){
    //             let obj = {};
    
    //             date.setDate(j);
    
    //             obj['date'] = date.toISOString().slice(0, 10);
    //             obj['weekday'] = date.getDay();
    //             obj['weekend'] = (date.getDay() === 0 || date.getDay() === 6) ? true : false;
    //             obj['inactive'] = (date >= startDate && date <= endDate) ? false : true;
    //             months[nameMonth].push(obj);
    //         }
    //     }
        
    //     this.setState({calendar: months});
    // }

    // handleChangeStart = (date) => {
    //     this.setState({dateStart: date});
    // }

    // handleChangeEnd = (date) => {
    //     this.setState({dateEnd: date});
    // }

    render(){

        return(
            <div>
                {/* <Form updateData={this.updateData} 
                        handleChangeEnd={this.handleChangeEnd}
                        handleChangeStart={this.handleChangeStart}/> */}
                <Form updateData={this.updateData} />
                <Calendar />
            </div>
        ); 
    }
}

export default Page;