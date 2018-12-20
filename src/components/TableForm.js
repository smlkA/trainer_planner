import React from 'react';
import TableRow from './TableRow';
import '../style/TableForm.css';

const TableForm = (props) => {
    return(
        <div>
            <table className='form table'>
                <tbody>
                <tr className='table__row'>
                    <td className='table__header'>Selected days: {props.selectedDays.length}</td>
                </tr>
                {props.selectedDays.map((item, i) => <TableRow day={item} key={i} setLector={props.setLector}/>)}
                </tbody>
            </table>
            <button onClick={props.downloadCSV}>Download CSV</button>
        </div>
        
    )
    
}

export default TableForm;