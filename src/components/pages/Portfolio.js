import React from "react";
import CodingQuiz from "../../assets/pic/CodingQuiz.png"
import DayScheduler from "../../assets/pic/DayScheduler.png"
import EmployeeTracker from "../../assets/pic/EmployeeTracker.png"
import NodeGeneratedReadeMe from "../../assets/pic/NodeGeneratedReadeMe.png"
import TeamProfileGenerator from "../../assets/pic/TeamProfileGenerator.png"
import WeatherAPI from "../../assets/pic/WeatherAPI.png"
import GroupProject from "../../assets/pic/GroupProject.png"

export default function Portfolio() {
    return (
        <div className="container">
            <section id="work" className="text-center">
                <h1 className="mb-1">Work</h1>
                <p>This page has The most recent projects that I have done.</p>
                <hr />
                <div className="row">

                    <div className="col-lg-4 col-md-6 p-4">
                        <div className="card">
                            <div className="bg-image">
                                <img src={CodingQuiz} className="img-fluid" alt="Screenshot of a coding Quiz app that you can take to test your knowledge" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Coding Quiz</h5>
                                <p className="card-text">
                                    Languages/Other used to bulid this project: HTML | CSS | JS
                                </p>
                                <a href="https://charlie1099.github.io/coding-quiz" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Deployed App on GitHub</a>
                                <a href="https://github.com/Charlie1099/coding-quiz" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-4">
                        <div className="card">
                            <div className="bg-imge">
                                <img src={DayScheduler} className="img-fluid" alt="Screenshot of a Day Scheduler app where ypu can keep track of your tasks" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Day Scheduler</h5>
                                <p className="card-text">
                                    Languages/Other used to bulid this project: HTML | CSS | JS | Third pary API
                                </p>
                                <a href="https://charlie1099.github.io/day-scheduler" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Deployed App on GitHub</a>
                                <a href="https://github.com/Charlie1099/day-scheduler" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-4">
                        <div className="card">
                            <div className="bg-imge">
                                <img src={EmployeeTracker} className="img-fluid" alt="Screenshot of a Employee Tracker app where ypu can keep track of your employees and add new ones" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Employee Tracker</h5>
                                <p className="card-text">
                                    Languages/Other used to bulid this project: SQL | JS | npm inquirer | npm chalk
                                </p>
                                <a href="https://watch.screencastify.com/v/QYKC6NOmx5YDSgFbexXN" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Watch a short clip of the App</a>
                                <a href="https://github.com/Charlie1099/employee-tracker" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-4">
                        <div className="card">
                        <div className="bg-imge">
                            <img src={NodeGeneratedReadeMe} className="img-fluid" alt="Screenshot of a Node.js app that will generate a reademe" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Node Generated ReadeMe</h5>
                            <p className="card-text">
                                Languages/Other used to bulid this project: JS | npm | Node.Js
                            </p>
                            <a href="https://watch.screencastify.com/v/7yp9YRZyQFDSj8l64ruv" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Watch a short clip of the App</a>
                            <a href="https://github.com/Charlie1099/employee-tracker" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 p-4">
                    <div className="card">
                        <div className="bg-imge">
                            <img src={TeamProfileGenerator} className="img-fluid" alt="Screenshot of a team profile generator app that will generate a progile of your team" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text">
                                Languages/Other used to bulid this project: JS | npm | Node.Js | Object Oriented Programming
                            </p>
                            <a href="https://watch.screencastify.com/v/ywDrDBsMqopCeJgsu1ZT" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Watch a short clip of the App</a>
                            <a href="https://github.com/Charlie1099/Team-Profile-Generator" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 p-4">
                    <div className="card">
                        <div className="bg-imge">
                            <img src={WeatherAPI} className="img-fluid" alt="Screenshot of a team profile generator app that will generate a progile of your team" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text">
                                Languages/Other used to bulid this project: HTML | CSS | JS | Server side API
                            </p>
                            <a href="https://charlie1099.github.io/weather-tracker" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Deployed App on GitHub</a>
                            <a href="https://github.com/Charlie1099/weather-tracker" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 p-4">
                    <div className="card">
                        <div className="bg-imge">
                            <img src={GroupProject} className="img-fluid" alt="Screenshot of a Book Finder app that will find you books" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Book Finder "Group project"</h5>
                            <p className="card-text">
                                Languages/Other used to bulid this project: HTML | CSS | JS | Server side API
                            </p>
                            <a href="https://conleyannmarie.github.io/book-finder/" target="_blank" rel="noreferrer nooper" className="btn btn-primary">Deployed App on GitHub</a>
                            <a href="https://github.com/conleyannmarie/book-finder" target="_blank" rel="noreferrer nooper" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </div>
                </div>
                
               
            </div>
            </section>
        </div>


    )
}