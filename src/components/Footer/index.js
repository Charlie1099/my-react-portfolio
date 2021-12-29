import React from "react";
// import { FagGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="footer px-5">
            <Row>
                <Col className="d-flex col-12 justify-content-end">
                    <a className="cmb-fa m-2" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        {/* <FaLinkedin /> */}
                    </a>
                    <a className="cmb-fa m-2" href="https://github.com/Charlie1099" target="_blank" rel="noreferrer">
                        {/* <FagGithub /> */}
                    </a>
                    <a className="cmb-fa m-2" href="mailto:cdcharlesworth@gmail.com?subject=Contact from Portfolio Site" target="_blank" rel="noreferrer">
                        {/* <FaEnvelope /> */}
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer