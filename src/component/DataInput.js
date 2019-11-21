import React from 'react';
import './DataInput.css';
import {Container, InputGroup, Input, InputGroupAddon, Button, Row, Col} from 'reactstrap';

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.inputs = {};
        this.props.columns.forEach((c) => this.state.inputs[c.id] = '');
    }

    addRow() {
        let rows = [...this.props.rows];
        var newRow = {};
        let enable = true;
        for (let key in this.state.inputs) {
            this.props.columns.forEach((c) => {
                if (!c.id.localeCompare(key) == 0) return;
                let re = new RegExp(c.regex);
                if (!re.test(this.state.inputs[key])) {
                    alert("Błąd danych wejściowych. Kolumna: " + c.display + " powinna spełniać: " + c.regex);
                    enable = false;
                }
            });
            newRow[key] = Number(this.state.inputs[key]);
        }
        if (!enable) return;
        rows.push(newRow);
        this.props.parentHandler(rows);
    }

    handleChange(columnName, e) {
        let input = this.state.inputs;
        input[columnName] = e.target.value;
        this.setState({inputs: input});
    }

    removeClicked(i) {
        let rows = [...this.props.rows];
        rows.splice(i, 1);
        this.props.parentHandler(rows);
    }

    render() {
        let inputFields = [];
        let rows = [];
        this.props.columns.forEach((c) => {
            inputFields.push(<Input key={c.id} placeholder={c.display} onChange={this.handleChange.bind(this, c.id)}/>)
        });

        for (let i = 0; i < this.props.rows.length; i++) {
            let rowData = [];
            for (let j = 0; j < this.props.columns.length; j++) {
                let columnID = this.props.columns[j].id;
                rowData.push(<Col>{this.props.rows[i][columnID]}</Col>)
            }
            rows.push(
                <Row className="justify-content-between row-data align-items-center">
                    {rowData}
                    <Col>
                        <Button className="btn-remove" onClick={this.removeClicked.bind(this, i)}>X</Button>
                    </Col>
                </Row>
            );

        }
        return (
            <Container className="mb-10">
                <Row>
                    <Col>
                        <InputGroup>
                            {inputFields}
                            <InputGroupAddon addonType="append">
                                <Button color='success' onClick={this.addRow.bind(this)}>+</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <div className="data-container">
                    {rows}
                </div>

            </Container>
        )
    }
}


export default DataInput