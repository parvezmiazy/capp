import React, { Component } from 'react';
import ReactTable from 'react-table';
//import "react-table/react-table.css";
//import {useTable} from 'react-table';

export default class Mytable extends Component {
    render() {

    const tableData = [] 
    const col = 
        [
            {
                Header:"Name",
                accessor:""
            },
            {
                Header:"Age",
                accessor:""
            }
        ]
    


        return (
            <div>
                <ReactTable
                data={tableData}
                columns={col}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6,8,10]}
                
                />
            </div>
        )
    }
}
