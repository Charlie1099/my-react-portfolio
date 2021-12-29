import React from "react";
import "../../App.css"
import { Nav } from "react-bootstrap"

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar-nav mr-auto">
            <Nav.Link>
                <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                    ABOUT ME
                </a>
            </Nav.Link>
            <Nav.Link>
                <a href="#project" onClick={() => handlePageChange("Project")} className={currentPage === "Project" ? "nav-link active" : "nav-link"}>
                    PROJECT
                </a>
            </Nav.Link>
            <Nav.Link>
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                    CONTACT
                </a>
            </Nav.Link>
            <Nav.Link>
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                    RESUME
                </a>

            </Nav.Link>

        </ul>
    )
}

export default NavTabs