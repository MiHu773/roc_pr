import React from 'react';
import './App.css';
import {Col, Row} from "reactstrap";
import DataInput from "./DataInput";
import DataProcessor from './DataProcessor';

const columnsRes = [{id: "state", display: "Stan", regex: "1|0"}, {
    id: "result",
    display: "Wynik testu",
    regex: "(0[.][0-9]+)|1|0"
}];
const rowsRes = [{state: 1, result: 0.8}, {state: 0, result: 0.3}, {state: 1, result: 0.5}];
const columnsThresh = [{id: "threshold", display: "Próg", regex: "(0[.][0-9]+)|1|0"}];
const rowsThresh = [{threshold: 0.2}, {threshold: 0.4}, {threshold: 0.6}, {threshold: 0.8}];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rowsResults: rowsRes, rowsThresholds: rowsThresh};
        this.state.dataProcessor = new DataProcessor();
        this.state.dataProcessor.processRows(this.state.rowsResults, this.state.rowsThresholds);
        this.resultsChangeHandler = this.resultsChangeHandler.bind(this);
        this.thresholdsChangeHandler = this.thresholdsChangeHandler.bind(this);
    }

    resultsChangeHandler(rowsResults) {
        let dp = this.state.dataProcessor;
        dp.processRows(rowsResults, this.state.rowsThresholds);
        this.setState({rowsResults: rowsResults, dataProcessor: dp});
    }

    thresholdsChangeHandler(rowsThresholds) {
        let dp = this.state.dataProcessor;
        dp.processRows(this.state.rowsResults, rowsThresholds);
        this.setState({rowsThresholds: rowsThresholds, dataProcessor: dp});
    }

    render() {
        return (
            <Row>
                <Col><DataInput columns={columnsRes} rows={rowsRes} parentHandler={this.resultsChangeHandler}/></Col>
                <Col><DataInput columns={columnsThresh} rows={rowsThresh} parentHandler={this.thresholdsChangeHandler}/></Col>
            </Row>
        );
    }
}


export default App;