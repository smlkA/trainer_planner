import React from 'react';
import TableRow from './TableRow';
import '../style/TableForm.css';

class TableForm extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <table className='form table'>
             <tbody>
                <tr className='table__row'>
                    <td className='table__header'>Selected days: {this.props.selectedDays.length}</td>
                </tr>
                {this.props.selectedDays.map((item, i) => <TableRow day={item} key={i} setLector={this.props.setLector}/>)}
             </tbody>
            </table>
        )
    }
}

export default TableForm;