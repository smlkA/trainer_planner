import React from 'react';
import TableRow from './TableRow';
import '../style/TableForm.css';

function TableForm(props){

    return(
        <table className='form table'>
            <tbody>
            <tr className='table__row'>
                <td className='table__header'>Selected days: {props.selectedDays.length}</td>
            </tr>
            {props.selectedDays.map((item, i) => <TableRow day={item} key={i} setLector={props.setLector}/>)}
            </tbody>
        </table>
    )
    
}

export default TableForm;