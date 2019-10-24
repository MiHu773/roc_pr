import React from 'react';
import './DataInput.css';
import {InputGroup, Input, InputGroupAddon, Button, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

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
        let enable = true;
        for (let key in this.state.inputs) {
            this.state.columns.forEach((c) => {
                if (!c.id.localeCompare(key) == 0) return;
                let re = new RegExp(c.regex);
                if (!re.test(this.state.inputs[key])) {
                    alert("Błąd danych wejściowych. Kolumna: " + c.display + " powinna spełniać: " + c.regex
                    )
                    enable = false;
                }
            });
            newRow[key] = this.state.inputs[key];
        }
        if (!enable) return;
        rows.push(newRow);
        this.props.parentHandler(rows);
        this.setState({rows: rows});
    }

    handleChange(columnName, e) {
        let input = this.state.inputs;
        input[columnName] = e.target.value;
        this.setState({inputs: input});
    }

    removeClicked(i) {
        let rows = [...this.state.rows];
        rows.splice(i, 1);
        this.props.parentHandler(rows);
        this.setState({rows: rows});
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
                rowData.push(<Col className={"rowValues"}>{this.state.rows[i][columnID]}</Col>)
            }
            rows.push(
                <ListGroupItem>
                    <Row>
                        {rowData}
                        <Button color='danger' onClick={this.removeClicked.bind(this, i)}>X</Button>
                    </Row>
                </ListGroupItem>);

        }
        return (
            <div className={"shrinkeddiv"}>
                <InputGroup>
                    {inputFields}
                    <InputGroupAddon addonType="append">
                        <Button color='success' onClick={this.addRow.bind(this)}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
                <ListGroup>
                    {rows}
                </ListGroup>
            </div>)
    }
}


export default DataInput