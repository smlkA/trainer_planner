import React from 'react';

function TableRow(props){
    const date = new Date(props.day.date);
    return(
        <tr className='table__row'>
            <td className='table__data table__date'>{date.toLocaleString("ru", {day: 'numeric', month: 'long'}) + 
                                    ' (' + date.toLocaleString("ru", {weekday: 'short'}) + ')'}</td>
            <td className='table__data table__name'></td>
        </tr>
    ); 
    
}

export default TableRow;