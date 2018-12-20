import React from 'react';
import '../style/TableRow.css';

class TableRow extends React.Component{
    constructor(props){
        super(props);
        this.state={author: ''};
    }

    handlerChange = (e) => {
        this.setState({author: e.target.value});
        this.props.setLector(this.props.day.date,  e.target.value);
    }

    render(){
        const date = new Date(this.props.day.date);

        return(
            <tr className='table__row'>
                <td className='table__data table__date'>{date.toLocaleString("ru", 
                                        {day: 'numeric', month: 'long'}) + 
                                        ' (' + date.toLocaleString("ru", {weekday: 'short'}) + ')'}</td>
                <td className='table__data table__name'>
                    <input type='text' className='input__author' value={this.state.author}
                             onChange={this.handlerChange}/>
                </td>
            </tr>
        ); 
    }
}

export default TableRow;