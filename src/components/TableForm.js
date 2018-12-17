import React from 'react';
import TableRow from './TableRow';
import '../style/TableForm.css';

function TableForm(props){
    return(
        <table className='form table'>
         <tbody>
            <tr className='table__row'>
                <td className='table__header'>Selected days: {props.selectedDay.length}</td>
            </tr>
            {props.selectedDay.map((item, i) => <TableRow day={item} key={i}/>)}
         </tbody>
        </table>
    ); 
    
}

export default TableForm;