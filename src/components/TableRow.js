import React from 'react';
import '../style/TableRow.css';

const TableRow = (props) => {
    const date = new Date(props.day.date);

    return(
        <tr className='table__row'>
            <td className='table__data table__date'>{date.toLocaleString("ru", 
                                    {day: 'numeric', month: 'long'}) + 
                                    ' (' + date.toLocaleString("ru", {weekday: 'short'}) + ')'}</td>
            <td className='table__data table__name'>
                <input type='text' className='input__lector' value={props.day.lector}
                            onChange={props.setLector.bind(this, props.day)}/>
            </td>
        </tr>
    );     
}

export default TableRow;