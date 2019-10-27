import React from 'react';
import './App.css';
import { Col, Row, Container } from "reactstrap";
import DataInput from "./DataInput";

import processRows, { prepareRocData, prepareRpData } from './DataProcessor';
import Chart from "./component/Chart"

const columnsRes = [{ id: "state", display: "Stan", regex: "1|0" }, {
    id: "result",
    display: "Wynik testu",
    regex: "(0[.][0-9]+)|1|0"
}];
const rowsRes = [
    { state: 0, result: 0.1 },
    { state: 1, result: 0.4 },
    { state: 1, result: 0.9 },
    { state: 1, result: 0.8 },
    { state: 1, result: 0.7 },
    { state: 0, result: 0.6 },
    { state: 0, result: 0.6 },
    { state: 0, result: 0.3 },
    { state: 0, result: 0.2 }
];

const columnsThresh = [{ id: "threshold", display: "Próg", regex: "(0[.][0-9]+)|1|0" }];
const rowsThresh = [
    { threshold: 0.05 },
    { threshold: 0.15 },
    { threshold: 0.25 },
    { threshold: 0.35 },
    { threshold: 0.45 },
    { threshold: 0.55 },
    { threshold: 0.65 },
    { threshold: 0.75 },
    { threshold: 0.85 },
    { threshold: 0.95 }
];

class RocprDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rowsResults: rowsRes, rowsThresholds: rowsThresh };
        this.resultsChangeHandler = this.resultsChangeHandler.bind(this);
        this.thresholdsChangeHandler = this.thresholdsChangeHandler.bind(this);
    }

    resultsChangeHandler(rowsResults) {
        this.setState({ rowsResults: rowsResults });
    }

    thresholdsChangeHandler(rowsThresholds) {
        this.setState({ rowsThresholds: rowsThresholds });
    }

    render() {

        var data = processRows(this.state.rowsResults, this.state.rowsThresholds);

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Col className="text-center">
                                <DataInput columns={columnsRes} rows={rowsRes} parentHandler={this.resultsChangeHandler} />
                            </Col>
                            <Col className="text-center">
                                <DataInput columns={columnsThresh} rows={rowsThresh} parentHandler={this.thresholdsChangeHandler} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Chart title="Krzywa ROC" data={prepareRocData(data)} xLabel="1 - swoistość" yLabel="czułość" />
                            </Col>
                            <Col>
                                <Chart title="Krzywa PR" data={prepareRpData(data)} xLabel="czułość" yLabel="precyzja" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}


export default RocprDemo;