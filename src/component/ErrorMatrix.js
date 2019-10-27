import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./ErrorMatrix.css"

function renderRow(row) {
    return (
        <Row className="justify-content-md-center row-data">
            <Col >
                {row.threshold}
            </Col>
            <Col >
                {row.TP}
            </Col>
            <Col >
                {row.FP}
            </Col>
            <Col >
                {row.FN}
            </Col>
            <Col >
                {row.TN}
            </Col>
        </Row>
    )
}

function ErrorMatrix(props) {

    let headers = { threshold: "Próg", TP: "Tp", FP: "Fp", TN: "Tn", FN: "Fn" }
    let data = props.data;
    data.sort((a, b) =>  a.threshold < b.threshold ? -1 : 1 );
    let content = data.map(row => renderRow(row));

    return (
        <Container>
            {renderRow(headers)}
            <div className="table-data-container">
                {content}
            </div>
        </Container>
    )
}

export default ErrorMatrix