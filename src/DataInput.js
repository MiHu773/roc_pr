import React from 'react';
import './DataInput.css';
import {InputGroup, Input, InputGroupAddon, Button, Row, Col} from 'reactstrap';

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.columns = props.columns;
        this.state.inputs = {};
        this.state.columns.forEach((c) => this.state.inputs[c.id] = '');
        this.state.rows = [];
        this.state.rowId = 0;
        this.props.rows.forEach((r) => this.state.rows.push(r));
    }

    addRow() {
        let rows = [...this.state.rows];
        var newRow = {};
        for(var key in this.state.inputs)
        {
            newRow[key] = this.state.inputs[key];
        }
        rows.push(newRow);
        this.setState(this.state.rows = rows);
    }

    handleChange(columnName, e) {
        let input = this.state.inputs;
        input[columnName] = e.target.value;
        this.setState(this.state.inputs = input);
    }

    removeClicked(i) {
        let rows = [...this.state.rows];
        rows.splice(i, 1);
        this.setState(this.state.rows = rows);
    }

    render() {
        let inputFields = [];
        let rows = [];
        this.state.columns.forEach((c) => {
            inputFields.push(<Input key={c.id} placeholder={c.display} onChange={this.handleChange.bind(this, c.id)}/>)
        });
        for (let i = 0; i < this.state.rows.length; i++) {
            let rowData = [];
            for (let j = 0; j < this.state.columns.length; j++) {
                let columnID = this.state.columns[j].id;
                rowData.push(<Col>{this.state.rows[i][columnID]}</Col>)
            }
            rows.push(
                <Row>
                    {rowData}
                    <Button color='danger' onClick={this.removeClicked.bind(this, i)}>X</Button>
                </Row>);
        }
        return (
            <div className={"shrinkeddiv"}>
                <InputGroup>
                    {inputFields}
                    <InputGroupAddon addonType="append">
                        <Button color='success' onClick={this.addRow.bind(this)}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
                {rows}
            </div>)
    }
}


export default DataInput