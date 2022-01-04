import React from "react";
import Headshot from "../../assets/pic/cover-image.jpg"
import { Container, Row } from "react-bootstrap";

export default function About() {
    return (
        <Container>
            <section id="about">
                <Row>
                    <div className="col-sm-6 col-md-2 pr-3 mb-4">
                        <figure className="figure-image">
                            <img src={Headshot} alt="A Headsot of cameron." className="img-fluid mb-3 cmb-headshot"/>
                        </figure>
                    </div>
                    <div className="col-sm-12 col-md-9 mr-2 mb-4">
                        <h1>Good Day!</h1>
                        <p>Hi my name is cameron and I am aiming </p>
                    </div>
                </Row>

                <Row>
                    <div className="cmb-neutralblock p-4">
                        <h3>I would love to work with you!</h3>
                        <p>Please take a look around and see what i have done so far</p>
                    </div>
                </Row>
            </section>
        </Container>
    )
}