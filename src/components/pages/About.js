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
                        <p>Hi my name is Cameron and I am aiming to becume a Junior Software Developer I have recently completed the Utah Coding
                            Bootcamp where i had a chance to develop skills in a veriaty of Developer tools such as JavaScript, Node.js, SQL, Express.js,
                            MVC, OOR, and PWA. <br/>
                            <br/>
                            I loved the callenge of learning so much over the six months that I was at the course learing the MERN stack.
                             I look forward to learing more as my jurney on this exciting creer path has just started. 
                            </p>
                    </div>
                </Row>

                <Row>
                    <div>
                        <h3>I would love to work with you!</h3>
                        <p>Please take a look around and see what i have done so far</p>
                    </div>
                </Row>
            </section>
        </Container>
    )
}