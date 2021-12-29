import React, { useState } from "react";
import Nav from "../Nav/index"
import About from "../pages/About"
import Project from "../Project/index"
import Contact from "../pages/Contact"
import Resume from "../pages/Resume"
import "../../App.css"
import { Navbar, Container } from "react-bootstrap"

function Header() {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />
        }
        if (currentPage === "Porject") {
            return <Project />
        }
        if (currentPage === "Contact") {
            return <Contact />
        }
        return <Resume />
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <>
            <header>
                <Navbar expand="lg" bg="light" fixed="top" className="px-5 py-4">
                    <Container>
                        <Navbar.Brand className="col-5" herf="/">Cameron Charlesworth<br/><span>FULL STACK WEB DEVELOPER</span></Navbar.Brand>
                        <Navbar.Toggle className="custom-toggler col-2" aria-controls="navbarCollapsableContent"/>
                        <Navbar.Collapse className="flex-row-reverse" id="navbarCollapsableContent">
                                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                            </Navbar.Collapse> 
                    </Container>
                </Navbar>
            </header>
            <main>
                {renderPage()}
            </main>
        </>
    )
}

export default Header