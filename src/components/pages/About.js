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
                        <h1 className="title">Welcome!</h1>
                        <p>Hi, my name is Cameron and I am aiming to become a Junior Software Developer. I have recently completed the Utah Coding
                            Bootcamp where I developed skills in a variety of developer tools including JavaScript, Node.js, SQL, Express.js,
                            MVC, OOR, and PWA. I also had the opportunity to be a part of three class projects where we would work with 4 people and had to 
                            communicate, deligate the work load and make GitHub issues for the project for the group and pesent the project to the teacher, teacher assistants 
                            and cohort.
                            <br/>
                            <br/>
                            I loved the challenge of learning so much over the six months that I was at the course learing the MERN stack.
                             I look forward to learing more as my journey on this exciting creer path has just started. 
                            </p>
                            <br/>
                            <h3>I would love to work with you!</h3>
                        <p>Please take a look around and get to know me and my work.</p>
                    </div>
                </Row>

                {/* <Row>
                    <div>
                        <h3>I would love to work with you!</h3>
                        <p>Please take a look around and see what I have done so far</p>
                    </div>
                </Row> */}
            </section>
        </Container>
    )
}