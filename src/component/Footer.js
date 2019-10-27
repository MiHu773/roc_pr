import React from "react"
import { Container, Row, Col } from "reactstrap"

function Footer() {
    return (
        <footer className="footer font-small fixed-bottom bg-secondary text-light">
            <Container fluid>
                <Row className="justify-content-between align-items-end">
                    <Col className="p-1">
                        MBI 19Z
                    </Col>
                    <Col className="p-1 text-right">
                        Michał Grzeszczyk
                        <br />
                        Przemysław Wilczyński
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
