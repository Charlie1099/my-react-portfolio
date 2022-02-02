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
                <p>Current finished projects.</p>
                <hr />
                <div className="row">

                    <div className="col-lg-4 col-md-6 p-4 cdc">
                        <div className="card">
                            <div className="bg-image">
                                <img src={CodingQuiz} className="img-fluid" alt="Screenshot of a coding Quiz app that you can take to test your knowledge" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Coding Quiz</h5>
                                <p>This is a quiz that helps developers test there coding knowledge</p>
                                <p className="card-text">
                                    Languages/Other used to bulid this project:<br/> HTML | CSS | JS
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
                                <p>Day scheduler is a app that you can add tasks which will show you if you are
                                    past the time or if you are well with in the time frame for the task</p>
                                <p className="card-text">
                                    Languages/Other used to bulid this project:<br/>
                                     HTML | CSS | JS | Third pary API
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
                                <p>
                                This is a command line application that provides a employer a complete CMS database so they have the ability to view employees, 
                                view roles, view departments, add employees, add roles, add departments, and update employee records all from the command line prompt.
                                </p>
                                <p className="card-text">
                                    Languages/Other used to bulid this project:<br/>
                                     SQL | JS | npm inquirer | npm chalk
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
                            <p>
                            You can quickly and easily generate a README file by using a command-line 
                            application to generate one. This allows the project creator to devote more time working on the project.
                            </p>
                            <p className="card-text">
                                Languages/Other used to bulid this project:<br/>
                                 JS | npm | Node.Js
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
                            <p>
                            This app will let you use Node.js command line application that will take 
                            information about employees on a team and will generate a HTML page that shows the summaries for each person.
                            </p>
                            <p className="card-text">
                                Languages/Other used to bulid this project:<br/>
                                 JS | npm | Node.Js | Object Oriented Programming
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
                            <h5 className="card-title">Weather Scaner</h5>
                            <p>
                            Weather Scaner, is project is designed to display the current and five day weather forcast of a given city that you are visiting 
                            as a traveler.
                
                            </p>
                            <p className="card-text">
                                Languages/Other used to bulid this project:<br/>
                                 HTML | CSS | JS | Server side API
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
                            <p>
                                Book finder is a project that will help book enthusiast and anyone that wants to look for there
                                next book to read and also save it to a list to keep track of the books that will be next
                            </p>
                            <p className="card-text">
                                Languages/Other used to bulid this project:<br/>
                                 HTML | CSS | JS | Server side API
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