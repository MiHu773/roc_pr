import React from 'react';
import './App.css';
import { Col, Row, Container, Button } from "reactstrap";
import DataInput from "./component/DataInput";
import * as ExampleData from "./resources/exampleData";
import processRows, { prepareRocData, prepareRpData } from './DataProcessor';
import Chart from "./component/Chart"
import ErrorMatrix from './component/ErrorMatrix';
import { compareRows, compareThreshold } from './utils';
import TooltipButton from "./component/TooltipButton"
const columnsRes = [{ id: "state", display: "Stan", regex: "1|0" }, {
    id: "result",
    display: "Wynik testu",
    regex: "(0[.][0-9]+)|1|0"
}];

const columnsThresh = [{ id: "threshold", display: "Próg", regex: "(0[.][0-9]+)|1|0" }];

class RocprDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rowsResults: [...ExampleData.rowsRes], rowsThresholds: [...ExampleData.rowsThresh] };
        this.resultsChangeHandler = this.resultsChangeHandler.bind(this);
        this.thresholdsChangeHandler = this.thresholdsChangeHandler.bind(this);
    }

    resultsChangeHandler(rowsResults) {
        this.setState({ rowsResults: rowsResults });
    }

    thresholdsChangeHandler(rowsThresholds) {
        this.setState({ rowsThresholds: rowsThresholds });
    }

    fillExampleOnClickHandler = () => {
        this.setState({ rowsResults: [...ExampleData.rowsRes], rowsThresholds: [...ExampleData.rowsThresh] });
    }

    clearAllOnClickHandler = () => {
        this.setState({ rowsResults: [], rowsThresholds: [] });
    }

    sortOnClickHandler = () => {
        this.resultsChangeHandler(this.state.rowsResults.sort(compareRows))
        this.thresholdsChangeHandler(this.state.rowsThresholds.sort(compareThreshold))
    }

    genThresholdOnClickHandler = () => {

    }

    render() {

        var data = processRows(this.state.rowsResults, this.state.rowsThresholds);
        let rocData = prepareRocData(data);
        let rpData = prepareRpData(data);

        return (
            <Container fluid>
                <Row className="mb-3 justify-content-center">
                    <Col xs={{size: "auto"}}>
                        <TooltipButton color="primary" onClick={this.fillExampleOnClickHandler} 
                        tooltip="Wstawia przykładowe dane wartości wejściowych oraz progów" id="insertData">
                            Wstaw przykładowe dane
                        </TooltipButton>
                    </Col>
                    <Col  xs={{size: "auto"}}>
                        <TooltipButton color="danger" onClick={this.clearAllOnClickHandler}
                        tooltip="Usuwa wszystkie dane wejściowe i progi" id="removeData">
                            Usuń wszystkie dane
                        </TooltipButton>
                    </Col>
                    <Col  xs={{size: "auto"}}>
                        <TooltipButton color="secondary" onClick={this.genThresholdOnClickHandler}
                        tooltip="Generuje wartości progów " id="genThreshold">
                            Generuj progi
                        </TooltipButton>
                    </Col>
                    <Col  xs={{size: "auto"}}>
                        <TooltipButton color="info" onClick={this.sortOnClickHandler}
                        tooltip="Sortuje dane wejściowe oraz progi" id="sort">
                            Sortuj
                        </TooltipButton>
                    </Col>
                </Row>
                    <Row className="text-center justify-content-around">
                        <Col md="4">
                            <Row >
                                <Col xl="7" className="mb-4" >
                                    <h5>Dane wejściowe</h5>
                                    <DataInput columns={columnsRes} rows={this.state.rowsResults} parentHandler={this.resultsChangeHandler} />
                                </Col>
                                <Col xl="5" className="mb-4">
                                    <h5>Progi</h5>
                                    <DataInput columns={columnsThresh} rows={this.state.rowsThresholds} parentHandler={this.thresholdsChangeHandler} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md="8">
                            <Row className="text-center">
                                <Col md="12" className="mb-4">
                                    <h5>Macierz pomyłek</h5>
                                    <ErrorMatrix data={data} />
                                </Col>
                                <Col md="6" className="mb-4">
                                    <h5>Krzywa ROC</h5>
                                    <Chart data={rocData} xLabel="1 - swoistość" yLabel="czułość" />
                                </Col>
                                <Col md="6" className="mb-4">
                                    <h5>Krzywa PR</h5>
                                    <Chart data={rpData} xLabel="czułość" yLabel="precyzja" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

            </Container>
                );
            }
        }
        
        
export default RocprDemo;