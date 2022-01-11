import React from "react"
import { FaFileDownload } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import CV from "../../assets/pic/Cameron-Charlesworth-Resume-3.pdf"

export default function Resume() {
    return (
        <div className="contaner">
            <section id="skills">
                <h1 className="text-center mb-1">Skills</h1>
                <p className='text-center'><Button className='btn-primary text-center' href={CV} target='_blank'><FaFileDownload />Download CV</Button></p>
               

                <div className="row">
                    <div className="col-12">
                        <div className="row">

                            <div className="col-sm-6 col-md-3">
                                <h3>Front End Experience</h3>
                                <ul className="list-unstyled">
                                    <hr/>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Moment.js</li>
                                    <li>React</li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <h3>Back End Experience</h3>
                                <ul className="list-unstyled">
                                <hr/>
                                <li>Express.js</li>
                                <li>SQL</li>
                                <li>NoSQL-MongoDB</li>
                                <li>Mongoose</li>
                                <li>GraphQL</li>
                                
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <h3>Other Experience</h3>
                                <ul className="list-unstyled">
                                    <hr/>
                                    <li>PWA</li>
                                    <li>Jest</li>
                                    <li>GitHub/Gitbash</li>
                                    <li>Insomnia</li>
                                    <li>Heroku</li>
                                    <li>Handle Bars</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                         
            </section>
        </div>
    )
}