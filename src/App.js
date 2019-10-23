import React from 'react';
import './App.css';
import {Col, Row} from "reactstrap";
import DataInput from "./DataInput";
import DataProcessor from './DataProcessor';

const columns = [{id: "state", display: "Stan"}, {id: "result", display: "Wynik testu"}];
const rows = [{state: 1, result: 0.8}, {state: 0, result: 0.3}, {state: 1, result: 0.5}];
const columnsThresh = [{id: "threshold", display: "Próg"}];
const rowsThresh = [{threshold: 0.2}, {threshold: 0.4}, {threshold: 0.6}, {threshold: 0.8}];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.Results = React.createRef();
        this.Thresholds = React.createRef();
        this.DataProcessor = new DataProcessor();
        this.DataProcessor.processRows(rows, rowsThresh);
        console.log(this.DataProcessor);
    }

    render() {
      const results = this.Results.current;
      console.log(results);
      //this.DataProcessor.processRows(this.Results.current.state, this.Thresholds.current.state);
      //console.log(this.Results.current.state);
      //console.log("aaa");
        return (
            <Row>
                <Col><DataInput columns={columns} rows={rows} ref={this.Results}/></Col>
                <Col><DataInput columns={columnsThresh} rows={rowsThresh} ref={this.Thresholds}/></Col>
            </Row>
        );
    }
}


export default App;